# Usage Instructions for Individual and Combined Scripts

## Individual Scripts:

### Script 1: Removing Hyphens and Counting Occurrences

- **Filename:** `script.js`
- **Functionality:** Reads a text file named `uni.txt`, removes hyphens from each line, counts occurrences of each line, saves repeating lines and unique lines to separate files.
- **Usage:**
  1. Ensure `node.js` is installed on your system.
  2. Place the `uni.txt` file containing the text to process in the same directory as the script.
  3. Run the script using Node.js: `node script.js`.
  4. Output files `repeating.txt` and `unique.txt` will be generated in the same directory.

### Script 2: Storing Unique Lines by Domain

- **Filename:** `second_script.js`
- **Functionality:** Reads a text file named `uni.txt`, extracts domain from each line (after '@'), stores only unique lines for each domain, saves them to a file.
- **Usage:**
  1. Ensure `node.js` is installed on your system.
  2. Place the `uni.txt` file containing the text to process in the same directory as the script.
  3. Run the script using Node.js: `node second_script.js`.
  4. Output file `unique.txt` will be generated in the same directory.

## Combined Usage:

### Functionality:

Both scripts process the `uni.txt` file but offer different functionalities:

1. **Script 1:** Counts occurrences of each line after removing hyphens.
2. **Script 2:** Stores only unique lines for each domain (after '@').

### Usage:

1. Ensure `node.js` is installed on your system.
2. Place the `uni.txt` file containing the text to process in the same directory as the scripts.
3. Run both scripts in sequence using Node.js.
4. Output files `repeating.txt` and `unique.txt` from Script 1 and `unique.txt` from Script 2 will be generated in the same directory.

### Running Combined Scripts:

1. Run `node script.js` to execute Script 1.
2. Run `node Second script.js` to execute Script 2.

