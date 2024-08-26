const fs = require('fs');

fs.readFile('nonexistent-file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Operational Error: File not found");
        return;
    }
    console.log(data);
});
