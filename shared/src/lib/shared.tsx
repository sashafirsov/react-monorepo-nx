import styles from './shared.module.scss';
import { lazy, Suspense, useState } from "react";
import Loading from "./loading/loading";

const Lorem0 = lazy(() => import('./lorem_0/lorem_0'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2'));

/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(_props: SharedProps) {
    const [shownL, setShownL] = useState(false);
  return (
    <div className={styles['container']}>
      <h1>Welcome to Shared!</h1>
        <button onClick={() => setShownL(!shownL)}> Toggle Lorem tree</button>
        {shownL && (
            <Suspense fallback={<Loading />}>
                <Lorem0 />
                <Lorem1 />
                <Lorem2 />
            </Suspense>
        )}

    </div>
  );
}

export default Shared;
