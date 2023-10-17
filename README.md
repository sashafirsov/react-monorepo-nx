# ReactMonorepoNx Vite + Nx monorepo 
To evaluate and compare the bundled and unbundled builds on large codebase.

Based on  [Nx](https://nx.dev/) and [ViteJs](https://vitejs.dev/) based monorepo build toolchain.

In this project only React stack is evaluated with the goal of mixing TypeScript and Rust sources and targets.

# Directory
* [Change](CHANGE.md) - the history of changes.
* [apps/apps/react-monorepo-nx](apps/react-monorepo-nx) generated by preset app
* app/frontend 

1K TS files in each folder:
* app/odd
* app/even
* ui/odd
* ui/even
* ui/common


## Project structure
* 2 main independent apps, `frontend` and `react-monorepo-nx`
* `frontend` as app with 2 routes (`odd`,`even`) to loaded on demand sub-apps. 
* `ui/` library of reused components, the half list of components is added to each sub-route by `lib-generate.sh` (odd-component)
* app sub-routes and ui sub-sets would include 4 big dependencies to assure the bundler would place each into separate sub-bundle.
* required number of modules: 30Mb volume /5K TS files, 6Kb per TS file.
To make the files content different, the module name and [lorem ipsum generator](https://www.npmjs.com/package/lorem-ipsum) are going to be shown by the React component.
* the TS build, Eslint, IDE load time performance on large monorepo is essential, hence the generated files preserved in monorepo. 


## Build process
The `yarn generate` is ran only once with the output generated saved in git repo. The second run would just override the generated files set.

The monorepo is ready for build and run 
    yarn test
    yarn dev   # development run for `frontend` app
    yarn build # prod build
    yarn serve # run the prod build

<hr/>
👇generated by `react-monorepo` preset
# ReactMonorepoNx

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨


## Start the app

To start the development server run `nx serve react-monorepo-nx`. Open your browser and navigate to http://localhost:4200/. Happy coding!


## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
