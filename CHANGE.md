

Created `shared` lib iside of `frontend`
    yarn nx g @nx/react:library shared --bundler=vite --appProject=frontend --component --compiler=swc --importPath=@rmn/shared  --projectNameAndRootFormat=derived --dry-run

Created `even` lib iside of `frontend`
    yarn nx g @nx/react:library even --bundler=vite --appProject=frontend --component --compiler=swc --importPath=@rmn/even --directory=apps/frontend --projectNameAndRootFormat=derived --dry-run

Created `odd` lib iside of `frontend`
    yarn nx g @nx/react:library odd --bundler=vite --appProject=frontend --component --compiler=swc --importPath=@rmn/odd --directory=apps/frontend --projectNameAndRootFormat=derived --dry-run

Created `frontend` app by [react/application generator](https://nx.dev/nx-api/react/generators/application)
    yarn nx g app frontend --routing --bundler=vite --compiler=swc --e2eTestRunner=playwright --projectNameAndRootFormat=derived --strict --unitTestRunner=vitest --dry-run

 Added UI component
    npx nx g @nx/react:lib ui

Following nx-recipes/[react-monorepo](https://github.com/nrwl/nx-recipes/tree/main/react-monorepo) bootstrap  rpoject with 
    npx create-nx-workspace@latest react-monorepo-nx --preset=react-monorepo
