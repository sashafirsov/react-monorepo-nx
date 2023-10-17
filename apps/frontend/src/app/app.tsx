import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

import {FrontendOdd} from '@rmn/odd';
import {FrontendEven} from '@rmn/even';

export function App() {
  return (
    <main className={styles.main}>  

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <nav role="navigation" className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/odd">Odd lib</Link>
          </li>
          <li>
            <Link to="/even">Even lib</Link>
          </li>
        </ul>
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
            <div>
              <Link to="/">Click here to go back to root page.</Link>
              <FrontendOdd/>
            </div>
          }
        />
        <Route
          path="/even"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
              <FrontendEven/>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
      <NxWelcome title="frontend" />
    </main>
  );
}

export default App;
