import styles from './frontend-even.module.scss';
import { Loading, Shared } from '@rmn/shared';
import { lazy, Suspense, useState } from 'react';

const PdfView = lazy(() => import('./pdf-view/pdf-view'));
const Lorem0 = lazy(() => import('./lorem_0/lorem_0frontend-even'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1frontend-even'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2frontend-even'));

/* eslint-disable-next-line */
export interface FrontendEvenProps {}

export function FrontendEven(_props: FrontendEvenProps) {
    const [shown, setShown] = useState(false);
    const [shownL, setShownL] = useState(false);
    return (
        <div className={styles['container']}>
            <h1>Welcome to FrontendEven!</h1>
            <button onClick={() => setShown(!shown)}> Toggle PdfView</button>
            {shown && (
                <Suspense fallback={<Loading />}>
                    <PdfView />
                </Suspense>
            )}
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

export default FrontendEven;
