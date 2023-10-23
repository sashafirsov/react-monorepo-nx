import styles from './frontend-odd.module.scss';
import { Loading, Shared } from "@rmn/shared";
import { lazy, Suspense, useState } from "react";

const Lorem0 = lazy(() => import('./lorem_0/lorem_0frontend-odd'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1frontend-odd'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2frontend-odd'));

/* eslint-disable-next-line */
export interface FrontendOddProps {}

export function FrontendOdd(_props: FrontendOddProps) {
    const [shownL, setShownL] = useState(false);

    return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendOdd!</h1>
        <button onClick={() => setShownL(!shownL)}> Toggle Lorem tree</button>
        {shownL && (
            <Suspense fallback={<Loading />}>
                <Lorem0 />
                <Lorem1 />
                <Lorem2 />
            </Suspense>
        )}
      <Shared />
    </div>
  );
}

export default FrontendOdd;
