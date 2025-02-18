function formatTestCases(input) {
    return input
        .split("\n")  // Split by lines
        .map((line, index) => {
            line = line.trim();
            
            // Ensure the first line is always commented out
            if (index === 0 && !line.startsWith("//")) {
                return `// ${line}`;
            }

            // Comment out all instructions and explanations
            if (line.startsWith("// Given") || line.startsWith("// icyHot")) {
                return `// ${line.replace("//", "").trim()}`;
            } 
            
            // Format function calls
            if (line.match(/^\w+\(.*\)\s*→/)) {
                return line.replace(/(\w+\(.*?\))\s*→ (.+)/, 'console.log($1); // → $2');
            }

            return line; // Return unchanged for any other lines
        })
        .join("\n");
}

console.log(formatTestCases(`
Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.


front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"
`))