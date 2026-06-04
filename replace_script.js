const fs = require('fs');
let data = fs.readFileSync('src/data/posts.tsx', 'utf8');
data = data.replaceAll('<p>Watch the full interview with them <strong><a href="https://www.youtube.com/watch?v=ynvn5tOfB-s" target="_blank" rel="noreferrer noopener">on YouTube</a></strong></p>', '<p>Watch the full interview with Dr. Harin Kanani and Mr. Prabh Mehar Singh <strong><a href="https://www.youtube.com/watch?v=ynvn5tOfB-s" target="_blank" rel="noreferrer noopener">on YouTube</a></strong></p>');
fs.writeFileSync('src/data/posts.tsx', data);
