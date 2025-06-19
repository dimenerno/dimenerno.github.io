module Jekyll
  class LangPermalinkGenerator < Generator
    priority :low

    def generate(site)
      site.posts.docs.each do |post|
        lang = post.data["lang"]

        # 원래 파일명에서 날짜 제거 (2024-11-17-bell-rocket → bell-rocket)
        filename = File.basename(post.basename, File.extname(post.basename))
        slug = filename.sub(/^\d{4}-\d{2}-\d{2}-/, '')  # 날짜 제거
        slug = slug.sub(/-en$/, '') if lang == "en"     # 영어 slug 정리

        # 날짜 경로
        date = post.date.strftime("/%Y/%m/%d")

        # permalink 지정
        if lang == "en"
          post.data["permalink"] = "#{date}/#{slug}/en"
        else
          post.data["permalink"] = "#{date}/#{slug}"
        end
      end
    end
  end
end
