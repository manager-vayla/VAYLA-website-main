const fs = require('fs');
const urls = {
    'main.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzRjYjI3MWUxZGZlZjQ2NmE5Nzk4NDNjMWViNTg2MjM1EgsSBxDHxNOtiQwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTM5NDg3NTAxOTA4MjI5NTU0OA&filename=&opi=89354086',
    'arena.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzEwMjNkYTNmMzJhNzQ3ZGU5MjA4MmZjNTJmN2NjNGRiEgsSBxDHxNOtiQwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTM5NDg3NTAxOTA4MjI5NTU0OA&filename=&opi=89354086',
    'tokenutility.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2M4NGUzNTFiMjVlNDRhOWU5Nzk2ZTA0NmI0ZGI1Y2Q3EgsSBxDHxNOtiQwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTM5NDg3NTAxOTA4MjI5NTU0OA&filename=&opi=89354086',
    'doc.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzE5MTdlMDdiZTU5ZjRjY2NiZjczZGEyZjgyNDUzODg5EgsSBxDHxNOtiQwYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTM5NDg3NTAxOTA4MjI5NTU0OA&filename=&opi=89354086'
};
(async () => {
    fs.mkdirSync('stitch_html', { recursive: true });
    for (const [name, url] of Object.entries(urls)) {
        const res = await fetch(url);
        const text = await res.text();
        fs.writeFileSync('stitch_html/' + name, text);
    }
    console.log('Downloaded all HTML files');
})();
