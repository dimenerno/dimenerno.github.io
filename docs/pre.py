import os
import re

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
    
    # Pattern to match the content inside $...$
    pattern = r'(\$.*?\$)'
    
    # Function to replace symbols inside $...$
    def replace_symbols(match):
        # Get the content inside $...$
        inner_content = match.group(1)
        
        # Replace the symbols except for the escaped ones
        inner_content = re.sub(r'(?<!\\)_', r'\\_', inner_content)   # _ to \_
        inner_content = re.sub(r'(?<!\\)\*', r'\\ast', inner_content) # * to \ast
        inner_content = re.sub(r'(?<!\\)\\{', r'\\lbrace ', inner_content)  # \{ to \lbrace
        inner_content = re.sub(r'(?<!\\)\\}', r'\\rbrace ', inner_content)  # \} to \rbrace
        inner_content = re.sub(r'(?<!\\)\|', r'\\|', inner_content)   # | to \|
        
        return inner_content

    # Apply the replacement to all matches of the pattern
    updated_content = re.sub(pattern, replace_symbols, content)

    # 수정된 내용을 파일에 덮어쓰기
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

    print(f"'{file_path}'가 수정됨.")

if __name__ == "__main__":
    # filename = input("수정 파일: ")
    filename = "2025-05-09-resiliency"
    process_markdown(filename)