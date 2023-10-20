import {
    addProjectConfiguration,
    formatFiles,
    generateFiles,
    getProjects,
    Tree,
} from '@nx/devkit';
import * as path from 'path';
import { LoremGeneratorGeneratorSchema } from './schema';

export async function loremGeneratorGenerator(
    tree: Tree,
    options: LoremGeneratorGeneratorSchema
) {
    const projectsMap = getProjects(tree);
    const proj = projectsMap.get(options.project);
    const { sourceRoot } = proj;

    const generateLayer = (parentName = options.name, depth=0, srcPath='') => {
        if( depth>2)
            return
        for (const i0 of [0, 1, 2]) {
            const name= `${parentName}_${i0}`;
            generateFiles(tree, path.join(__dirname, 'files'), sourceRoot+'/lib'+srcPath, {
                ...options,
                name,
            });
            generateLayer( name,depth+1,`${srcPath}/${name}`)
        }
    };
    generateLayer();

    await formatFiles(tree);
}

export default loremGeneratorGenerator;
