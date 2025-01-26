import re

def process_markdown(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Function to process inline math surrounded by single $ signs
    def process_inline_math(match):
        math_content = match.group(1)
        processed_content = (
            math_content
            .replace('_', '\\_')
            .replace('\{', '\\lbrace ')
            .replace('\}', '\\rbrace ')
            .replace('*', '\\ast')
            .replace('|', '\\|')
        )
        return f'${processed_content}$'

    # Function to process block math surrounded by $$ signs
    def process_block_math(match):
        math_content = match.group(1)
        return f"\n$$\n{math_content}\n$$\n"

    # Process inline math
    content = re.sub(r'\$(.*?)\$', process_inline_math, content)

    # Process block math
    content = re.sub(r'\$\$(.*?)\$\$', process_block_math, content, flags=re.DOTALL)

    with open(file_path, 'w') as file:
        file.write(content)

# Example usage
file_path = '_posts/2024-11-19-CSB.md'  # Replace with your markdown file
process_markdown(file_path)