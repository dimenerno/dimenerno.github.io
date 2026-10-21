# TikZ 그림을 빌드 시점에 SVG로 컴파일하는 플러그인
#
# 사용법:
#   {% tikz %}
#   \draw (0,0) -- (1,1);
#   {% endtikz %}
#
# 태그 인자는 tikzpicture 옵션으로 들어감 ({% tikz scale=2 %}).
# 본문에 \begin{...}이 있으면 감싸지 않고 그대로 사용 (tikzcd 등).
# 프리앰블 추가: _config.yml의 tikz.preamble, 또는 포스트 front matter의 tikz_preamble.
# 결과물은 public/tikz/<hash>.svg에 캐시되므로 내용이 바뀔 때만 다시 컴파일됨.

require "digest"
require "fileutils"
require "open3"
require "tmpdir"

module Jekyll
  class TikzBlock < Liquid::Block
    CACHE_DIR = File.join("public", "tikz")

    BASE_PREAMBLE = <<~TEX
      \\documentclass[dvisvgm,tikz,border=2pt]{standalone}
      \\usepackage{amsmath,amssymb}
      \\usetikzlibrary{arrows.meta,calc,positioning,shapes,decorations.pathreplacing}
    TEX

    def initialize(tag_name, markup, tokens)
      super
      @options = markup.strip
    end

    def render(context)
      site = context.registers[:site]
      page = context.registers[:page]
      body = super.strip

      config = site.config["tikz"] || {}
      preamble = [BASE_PREAMBLE, config["preamble"], page["tikz_preamble"]].compact.join("\n")

      unless body.include?("\\begin{")
        opts = @options.empty? ? "" : "[#{@options}]"
        body = "\\begin{tikzpicture}#{opts}\n#{body}\n\\end{tikzpicture}"
      end

      tex = "#{preamble}\n\\begin{document}\n#{body}\n\\end{document}\n"
      name = "#{Digest::SHA1.hexdigest(tex)[0, 16]}.svg"
      svg_path = File.join(site.source, CACHE_DIR, name)

      compile(tex, svg_path, page["path"]) unless File.exist?(svg_path)

      unless site.static_files.any? { |f| f.path == svg_path }
        site.static_files << StaticFile.new(site, site.source, "/#{CACHE_DIR}", name)
      end

      %(<figure class="tikz"><img src="#{site.baseurl}/#{CACHE_DIR}/#{name}" alt="TikZ diagram"></figure>)
    end

    private

    def compile(tex, svg_path, source)
      Dir.mktmpdir do |dir|
        File.write(File.join(dir, "fig.tex"), tex)

        out, status = Open3.capture2e("latex", "-interaction=nonstopmode", "-halt-on-error", "fig.tex", chdir: dir)
        unless status.success?
          log = out.lines.grep(/^!|^l\.\d+/).first(6).join
          raise "TikZ compile failed in #{source}:\n#{log}"
        end

        out, status = Open3.capture2e("dvisvgm", "--no-fonts", "--bbox=papersize", "--zoom=1.4", "-o", "fig.svg", "fig.dvi", chdir: dir)
        raise "dvisvgm failed in #{source}:\n#{out}" unless status.success?

        FileUtils.mkdir_p(File.dirname(svg_path))
        FileUtils.cp(File.join(dir, "fig.svg"), svg_path)
      end
    end
  end
end

Liquid::Template.register_tag("tikz", Jekyll::TikzBlock)
