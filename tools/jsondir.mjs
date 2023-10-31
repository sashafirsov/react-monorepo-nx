import fs from "node:fs";
import path from "node:path";
import sum from "lodash-es/sum.js";

const files = [];

function dirTree(filename) {
    let stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };
    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + "/" + child);
        });
    } else {
        info.type = "file";
        info.size = stats.size;
        files.push({ name: info.name, path: info.path, size: stats.size });
    }
    return info;
}

const scope = process.argv.pop();
const dir = process.argv.pop();
const jsonPath = `${dir}/dir-${scope}.json`;
fs.rmSync(jsonPath, { force: true });
const dTree = dirTree(dir);
(()=>dTree)(); // to avoid unused warning
const filtered = files.filter(f=>f.name.includes(scope)).filter(f => f.name.startsWith("lorem") && !f.name.includes("spec") && !f.name.includes("css"));
const totalSize = sum(filtered.map(f => f.size));
const ret = {
    files: filtered.length,
    totalSize,
    average: Math.ceil(totalSize / filtered.length),
    modules: filtered.map(f=>f.path
        .replace('apps/frontend/odd/src/lib/','')
        .replace('apps/frontend/even/src/lib/','')
        .replace('shared/src/lib/','')
        .replace('dist/apps/frontend-esm/assets/','')
        .replace('dist/apps/frontend/assets/',''))
        .sort((a,b)=>b.length-a.length),
    LOREM_DEPTH: process.env.LOREM_DEPTH,
    LOREM_PARAGRAPHS: process.env.LOREM_PARAGRAPHS
};
fs.writeFileSync(jsonPath, JSON.stringify(ret, null, "\t"));
console.log(jsonPath);
console.log(JSON.stringify(ret, null, "\t"));
