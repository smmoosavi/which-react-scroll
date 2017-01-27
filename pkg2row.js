let code = str => `\`${str}\``;
let link = (text, href) => `[${text}](${href})`;
let img = (alt, src) => `![${alt}](${src})`;

let npmLink = pkg => `https://www.npmjs.com/package/${pkg}`;
let downloadCount = pkg => `https://img.shields.io/npm/dm/${pkg}.svg`;
let repoUrl = repoName => `https://github.com/${repoName}`;
let starLink = repoName => `https://img.shields.io/github/stars/${repoName}.svg?style=social&label=Star`;

function pkg2row({pkg, repoName, demo}) {
    let npm = npmLink(pkg);
    return [
        link(code(pkg), npm),
        link(img('npm', downloadCount(pkg)), npm),
        link(repoName, repoUrl(repoName)),
        link(img('GitHub stars', starLink(repoName)), repoUrl(repoName)),
        demo && link('demo', demo)
    ];
}


module.exports = pkg2row;
