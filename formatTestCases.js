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
`))