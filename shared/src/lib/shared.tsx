import styles from './shared.module.scss';
import { lazy, Suspense, useState } from 'react';
import Loading from './loading/loading';

const Lorem0 = lazy(() => import('./lorem_0/lorem_0shared'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1shared'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2shared'));

/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(_props: SharedProps) {
    const [shownL, setShownL] = useState(false);
    const [clickedTime, setClickedTime] = useState(0);
    const RenderedTime = () => {
        const ms = Date.now() - clickedTime;
        return <>Loaded in {ms.toLocaleString()} ms </>;
    };
    return (
        <div className={styles['container']}>
            <h1>Welcome to Shared!</h1>
            <a
                onClick={() => {
                    setShownL(!shownL);
                    setClickedTime(Date.now);
                }}
                className="list-item-link"
            >
                Toggle Lorem tree
            </a>
            {shownL && (
                <Suspense fallback={<Loading />}>
                    <RenderedTime />
                    <Lorem0 />
                    <Lorem1 />
                    <Lorem2 />
                </Suspense>
            )}
        </div>
    );
}

export default Shared;
