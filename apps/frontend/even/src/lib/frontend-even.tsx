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
    const [clickedTime, setClickedTime] = useState(0);
    const RenderedTime = () => {
        const ms = Date.now() - clickedTime;
        return <>Loaded in {ms.toLocaleString()} ms </>;
    };
    return (
        <div className={styles.container}>
            <h1>Welcome to FrontendEven!</h1>
            <a onClick={() => setShown(!shown)} className="list-item-link"> <h3>Toggle PdfView</h3> <i> &nbsp; to load 100Mb dependency</i></a>
            {shown && (
                <Suspense fallback={<Loading />}>
                    <PdfView />
                </Suspense>
            )}
            <a
                onClick={() => {
                    setShownL(!shownL);
                    setClickedTime(Date.now);
                }}
                className="list-item-link"
            >
                <h3>Toggle Lorem tree</h3> &nbsp; <i>to test the load timing</i>
            </a>
            {shownL && (
                <Suspense fallback={<Loading />}>
                    <RenderedTime />
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
