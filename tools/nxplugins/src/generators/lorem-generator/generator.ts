import {
    formatFiles,
    generateFiles,
    getProjects,
    Tree,
} from '@nx/devkit';
import { LoremIpsum } from "lorem-ipsum";
import * as path from 'path';

import { LoremGeneratorGeneratorSchema } from './schema';

export async function loremGeneratorGenerator(
    tree: Tree,
    options: LoremGeneratorGeneratorSchema
) {
    const projectsMap = getProjects(tree);
    const proj = projectsMap.get(options.project);
    const { sourceRoot } = proj;
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 8,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    const generateLayer = (parentName = options.name, depth=0, srcPath='') => {
        if( depth>2)
            return
        for (const i0 of [0, 1, 2]) {
            const name= `${parentName}_${i0}`;
            const text = options.text || lorem.generateParagraphs(16);
            generateFiles(tree, path.join(__dirname, 'files'), sourceRoot+'/lib'+srcPath, {
                ...options,
                name,
                text
            });
            generateLayer( name,depth+1,`${srcPath}/${name}`)
        }
    };
    generateLayer();

    await formatFiles(tree);
}

export default loremGeneratorGenerator;
