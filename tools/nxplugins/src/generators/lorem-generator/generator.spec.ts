import { createTreeWithEmptyWorkspace, createTree } from '@nx/devkit/testing';

import { Tree, readProjectConfiguration, addProjectConfiguration } from "@nx/devkit";
import { } from '@nx/workspace';

import { loremGeneratorGenerator } from './generator';
import { LoremGeneratorGeneratorSchema } from './schema';

describe('lorem-generator generator', () => {
    let tree: Tree;
    const options: LoremGeneratorGeneratorSchema = { name: 'test', project:'test-lib', text:'' };

    beforeEach(() => {
        tree = createTreeWithEmptyWorkspace();
        addProjectConfiguration(tree, 'test-lib', {
            root: 'libs/test-lib',
            sourceRoot: 'libs/test-lib/src',
            projectType: 'library',
            targets: {},
        });
    });

    it('should run successfully', async () => {
        await loremGeneratorGenerator(tree, options);
        const config = readProjectConfiguration(tree, 'test-lib');
        expect(config).toBeDefined();
    });
    // fix me: generate the lorem tree and check the components presence
});
