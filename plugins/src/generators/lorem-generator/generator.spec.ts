import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { loremGeneratorGenerator } from './generator';
import { LoremGeneratorGeneratorSchema } from './schema';

describe('lorem-generator generator', () => {
    let tree: Tree;
    const options: LoremGeneratorGeneratorSchema = { name: 'test' };

    beforeEach(() => {
        tree = createTreeWithEmptyWorkspace();
    });

    it('should run successfully', async () => {
        await loremGeneratorGenerator(tree, options);
        const config = readProjectConfiguration(tree, 'test');
        expect(config).toBeDefined();
    });
});
