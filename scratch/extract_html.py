import html
import json

file_path = '/Users/rahiljethwa/Downloads/www.solidarity.in/ref/investment-thesis-on-synergy-green-industries-ltd/index.html'

with open(file_path, 'r') as f:
    lines = f.readlines()

# Extract content from line 767 to 1448
content_lines = lines[766:1448]
content_html = "".join(content_lines).strip()

# Excerpt is from 767 to 797
excerpt_lines = lines[766:797]
excerpt_html = "".join(excerpt_lines).strip()

# Escape double quotes and backslashes for JS string
# We want to be able to paste this into the TSX file
def escape_for_js(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

with open('/Users/rahiljethwa/Downloads/www.solidarity.in/scratch/extracted_content.json', 'w') as f:
    json.dump({'excerpt': escape_for_js(excerpt_html), 'content': escape_for_js(content_html)}, f)
