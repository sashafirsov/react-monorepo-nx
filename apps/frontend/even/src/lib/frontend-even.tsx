import styles from './frontend-even.module.scss';
import { Loading, Shared } from '@rmn/shared';
import { lazy, Suspense, useState } from 'react';

const PdfView = lazy(() => import('./pdf-view/pdf-view'));

/* eslint-disable-next-line */
export interface FrontendEvenProps {}

export function FrontendEven(props: FrontendEvenProps) {
    const [shown, setShown] = useState(false);
    return (
        <div className={styles['container']}>
            <h1>Welcome to FrontendEven!</h1>
            <button onClick={() => setShown(!shown)}> Toggle PdfView</button>
            {shown && (
                <Suspense fallback={<Loading />}>
                    <PdfView />
                </Suspense>
            )}
            <Shared />
        </div>
    );
}

export default FrontendEven;
