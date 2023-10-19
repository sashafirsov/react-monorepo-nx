# TODO
* change odd/even js entry files/bundle names
* tree shaking. Add heavy lib to `odd` with single api call, not a lazy case.
* linter main command
* seed 5K TS files of 6K each 
* storybook

# DONE
Excluded `apps/frontend/public/pdf` from eslint and ts config as 3rd party libs which are not subject for change/analyze.

PdfView based on `@pdftron/webviewer` added as a sample of heavy 3rd party lib with lots of static files 
(125Mb in ~600 files, with 300 JS files of 16Mb). 
To avoid performance impact on linter ans TS analyzing by IDE/linter the `public/pdf` folder has to be excluded in matching configs.

LF as default. [.gitattributes](.gitattributes) and
    git config core.eol lf
    git config core.autocrlf input


`odd` and `even` lazy load with `Suspense` fallback. 


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
