const fs = require('fs');

// Read the text file
fs.readFile('uni.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the content into lines
  const lines = data.split('\n');

  // Create a map to store unique lines
  const uniqueLines = {};

  // Loop through lines and store unique lines with the same domain
  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine !== '') {
      const domain = trimmedLine.substring(trimmedLine.lastIndexOf('@'));
      if (!uniqueLines[domain]) {
        uniqueLines[domain] = trimmedLine;
      }
    }
  });

  // Save unique lines to a new file
  const uniqueLinesArray = Object.values(uniqueLines);
  fs.writeFile('unique.txt', uniqueLinesArray.join('\n'), (err) => {
    if (err) {
      console.error('Error writing unique lines to file:', err);
    } else {
      console.log('Unique lines saved to unique.txt');
    }
  });
});
