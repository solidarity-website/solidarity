const fs = require('fs');

let content = fs.readFileSync('src/data/posts.tsx', 'utf8');

// Find all objects with categories including 'Perspective On Questions From Client Partners'
// Since it's a JS object array, we can use a regex to match the id, title, and replace brief note.

let newContent = content.replace(/{\s*id:[\s\S]*?}/g, (match) => {
  if (match.includes("'Perspective On Questions From Client Partners'")) {
    // Extract title
    let titleMatch = match.match(/title:\s*"([^"]+)"/);
    if (titleMatch) {
      let title = titleMatch[1];
      // Replace >brief note< or >a brief note< or >a brief note< with >Brief note: ${title} (PDF)<
      let updated = match.replace(/>brief note</g, `>Brief note: ${title} (PDF)<`);
      updated = updated.replace(/>a brief note</g, `>Brief note: ${title} (PDF)<`);
      return updated;
    }
  }
  return match;
});

fs.writeFileSync('src/data/posts.tsx', newContent);
console.log("Updated posts.tsx successfully.");
