import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

// import FrontendOdd from '@rmn/odd';
// import FrontendEven from '@rmn/even';

import { lazy, Suspense } from 'react';
import { Loading } from '@rmn/shared';

const FrontendEven = lazy(
    () => import('@rmn/even') //.then(module => ({ default: module.FrontendEven }))
);
const FrontendOdd = lazy(
    () => import('@rmn/odd') //.then(module => ({ default: module.FrontendOdd }))
);

export function App() {
    return (
        <main className={styles.main}>
            {/* START: routes */}
            {/* These routes and navigation have been generated for you */}
            {/* Feel free to move and update them to fit your needs */}
            <nav role="navigation" className={styles.nav}>
                <ul>
                    <li>
                        <Link to="/">Home</Link> |{' '}
                        <a href="https://github.com/sashafirsov/react-monorepo-nx">
                            Git
                        </a>
                    </li>
                    <li>
                        <Link to="/odd">Odd lib</Link> own and shared tree
                    </li>
                    <li>
                        <Link to="/even">Even lib</Link> PdfView, own and shared
                        tree
                    </li>
                </ul>
                <section>
                    Demo for evaluation and comparison of the bundled and
                    unbundled builds on large 30Mb codebase.
                    <br />
                    To see the difference between unbundled and bundled
                    distributions, within the
                    <Link to="/odd">Odd lib</Link> or{' '}
                    <Link to="/even">Even lib</Link>, click on `toggle lorem
                    tree` to trigger the 3Mb of components loaded.
                </section>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            This is the generated root route.{' '}
                            <Link to="/odd">Click here for odd page.</Link>
                        </div>
                    }
                />
                <Route
                    path="/odd"
                    element={
                        <Suspense fallback={<Loading />}>
                            <FrontendOdd />
                        </Suspense>
                    }
                />
                <Route
                    path="/even"
                    element={
                        <Suspense fallback={<Loading />}>
                            <FrontendEven />
                        </Suspense>
                    }
                />
            </Routes>
            {/* END: routes */}
            <NxWelcome title="frontend" />
        </main>
    );
}

export default App;
