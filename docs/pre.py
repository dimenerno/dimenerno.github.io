import os
import re

def process_markdown_file(filename):
    # _posts 디렉토리 내에서 파일을 찾음
    file_path = os.path.join('_posts', f'{filename}.md')

    # 파일이 존재하는지 확인
    if not os.path.exists(file_path):
        print(f"Error: '{file_path}' not found.")
        return

    # 파일을 읽음
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # 1. $$로 감싸진 내용에 대해, $$ 위아래로 여백이 한 칸 있어야 하고 내용은 $$와 다른 줄에 있어야 함
    def format_dollar_dollar(match):
        inner_content = match.group(1).strip()
        # $$ 위 아래로 여백이 없으면 여백을 추가하고 줄바꿈을 함
        if not inner_content.startswith("\n") and not inner_content.endswith("\n"):
            return f'\n$$\n{inner_content}\n$$\n'
        return match.group(0)  # 이미 여백이 있을 경우는 변경하지 않음

    # $$로 감싸진 부분을 찾아서 여백 추가하기
    content = re.sub(r'\$\$(.*?)\$\$', format_dollar_dollar, content, flags=re.DOTALL)

    # 2. $로 감싸진 내용에 대해, 특수 문자를 변경
    def escape_special_chars(match):
        return match.group(0).replace('_', r'\_') \
                             .replace('|', r'\|') \
                             .replace('\\{', r'\lbrace') \
                             .replace('\\}', r'\rbrace') \
                             .replace('*', r'\ast')

    # $로 감싸진 부분을 찾아서 특수 문자 처리하기
    content = re.sub(r'\$(.*?)\$', escape_special_chars, content, flags=re.DOTALL)

    # 수정된 내용을 파일에 덮어쓰기
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

    print(f"'{file_path}'가 수정됨.")

if __name__ == "__main__":
    filename = input("수정 파일: ")
    process_markdown_file(filename)