const fs = require('fs');
let html = fs.readFileSync('stitch_html/doc.html', 'utf8');
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
    let jsx = bodyMatch[1];
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    jsx = jsx.replace(/<br>/g, '<br/>');
    jsx = jsx.replace(/<hr>/g, '<hr/>');
    jsx = jsx.replace(/<img(.*?)>/g, (match) => {
        if (match.endsWith('/>')) return match;
        return match.replace(/>$/, '/>');
    });
    fs.writeFileSync('stitch_doc.jsx', jsx);
    console.log('Converted Doc');
}
