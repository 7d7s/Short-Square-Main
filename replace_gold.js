const fs = require('fs');
const path = require('path');

const cssRGB = '180, 178, 181'; // #b4b2b5
const newHex = '#b4b2b5';

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace Tailwind arbitrary colors: text-[#c8b390]/50 -> text-golden/50
    const tailwindRegex = /([a-zA-Z0-9:_-]+)-\[#c8b390\](\/[0-9]+(?:\.[0-9]+)?)?/gi;
    content = content.replace(tailwindRegex, (match, prefix, opacity) => {
        return `${prefix}-golden${opacity || ''}`;
    });

    // Replace rgba instances
    const rgbaRegex = /rgba\(\s*200\s*,\s*179\s*,\s*144\s*,/g;
    content = content.replace(rgbaRegex, `rgba(var(--golden-rgb),`);

    // Replace isolated remaining hexes
    content = content.replace(/#c8b390/gi, newHex);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath);
        } else {
            if (/\.(tsx|ts|jsx|js|css|json)$/.test(file)) {
                processFile(filePath);
            }
        }
    }
}

['./app', './components', './data', './config'].forEach(dir => {
    walk(path.join(__dirname, dir));
});
