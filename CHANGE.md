
 Created `frontend` app by [react/application generator](https://nx.dev/nx-api/react/generators/application)
    yarn nx g app frontend --routing --bundler=vite --compiler=swc --e2eTestRunner=playwright --projectNameAndRootFormat=derived --strict --unitTestRunner=vitest --dry-run


 Added UI component
    npx nx g @nx/react:lib ui

Following nx-recipes/[react-monorepo](https://github.com/nrwl/nx-recipes/tree/main/react-monorepo) bootstrap  rpoject with 
    npx create-nx-workspace@latest react-monorepo-nx --preset=react-monorepo

    