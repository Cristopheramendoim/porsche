const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');
c = c.replace(/\\\$\\{/g, '${');
fs.writeFileSync('index.html', c);
