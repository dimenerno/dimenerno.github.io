import os
import re

# {% tikz %} ... {% endtikz %} 블록 (공백·인자 허용, 여러 줄)
TIKZ_BLOCK = re.compile(r'(\{%-?\s*tikz\b.*?%\}.*?\{%-?\s*endtikz\s*-?%\})', re.DOTALL)

# Pattern to match the content inside $...$
MATH_PATTERN = re.compile(r'(\$.*?\$)')

def replace_symbols(match):
    # Get the content inside $...$
    inner_content = match.group(1)

    # Replace the symbols except for the escaped ones
    inner_content = re.sub(r'(?<!\\)\*', r'\\ast', inner_content) # * to \ast
    inner_content = re.sub(r'(?<!\\)\\{', r'\\lbrace ', inner_content)  # \{ to \lbrace
    inner_content = re.sub(r'(?<!\\)\\}', r'\\rbrace ', inner_content)  # \} to \rbrace
    inner_content = re.sub(r'(?<!\\)\|', r'\\|', inner_content)   # | to \|

    return inner_content

def process_markdown(filename):
    # _posts 디렉토리 내에서 파일을 찾음
    file_path = os.path.join('_posts', f'{filename}.md')

    # 파일이 존재하는지 확인
    if not os.path.exists(file_path):
        print(f"Error: '{file_path}' not found.")
        return

    # 파일을 읽음
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # tikz 블록을 기준으로 분리: 짝수 인덱스는 일반 텍스트, 홀수 인덱스는 tikz 블록
    parts = TIKZ_BLOCK.split(content)
    for i in range(0, len(parts), 2):
        parts[i] = MATH_PATTERN.sub(replace_symbols, parts[i])
    updated_content = ''.join(parts)

    # 수정된 내용을 파일에 덮어쓰기
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

    print(f"'{file_path}'가 수정됨.")

if __name__ == "__main__":
    # filename = input("수정 파일: ")
    filename = "2026-10-27-lawvere-en"
    process_markdown(filename)