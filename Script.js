const fs = require('fs');

// Read the text file
fs.readFile('uni.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the content into lines
  const lines = data.split('\n');

  // Create a map to store line occurrences
  const lineOccurrences = {};
  const uniqueLines = [];

  // Loop through lines and count occurrences
  lines.forEach((line) => {
    const trimmedLine = line.trim().replace('-', ''); // Remove hyphens
    if (trimmedLine !== '') {
      if (!lineOccurrences[trimmedLine]) {
        lineOccurrences[trimmedLine] = 1;
      } else {
        lineOccurrences[trimmedLine]++;
      }
    }
    uniqueLines.push(trimmedLine);
  });

  // Print out lines with occurrences greater than 1 and save to a file
  const repeatingLines = [];
  for (const line in lineOccurrences) {
    if (lineOccurrences[line] > 1) {
      repeatingLines.push(`Line: "${line}" - Occurrences: ${lineOccurrences[line]}`);
    }
  }

  // Save repeating lines to a file
  fs.writeFile('repeating.txt', repeatingLines.join('\n'), (err) => {
    if (err) {
      console.error('Error writing repeating lines to file:', err);
    } else {
      console.log('Repeating lines saved to repeating.txt');
    }
  });

  // Save unique lines to a file
  fs.writeFile('unique.txt', [...new Set(uniqueLines)].join('\n'), (err) => {
    if (err) {
      console.error('Error writing unique lines to file:', err);
    } else {
      console.log('Unique lines saved to unique.txt');
    }
  });
});


