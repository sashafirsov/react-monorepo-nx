import styles from './frontend-odd.module.scss';
import { Loading, Shared } from '@rmn/shared';
import { lazy, Suspense, useState } from 'react';
import sum from 'lodash-es/sum';

const Lorem0 = lazy(() => import('./lorem_0/lorem_0frontend-odd'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1frontend-odd'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2frontend-odd'));

/* eslint-disable-next-line */
export interface FrontendOddProps {}

export function FrontendOdd(_props: FrontendOddProps) {
    const [shownL, setShownL] = useState(false);
    const [numbers, setNumbers] = useState([1,2]);
    return (
        <div className={styles['container']}>
            <h1>Welcome to FrontendOdd!</h1>
            <section>
                <code>import  sum  from 'lodash'</code>
                loads the module from large library. The bundler should be picking
                only code for <b>sum</b>
                <table>
                    {numbers.map((n: number,i:number) => (
                        <tr><td>{i}</td><td>{n}</td></tr>
                    ))}
                    <tr><th>∑</th><td>{sum(numbers)} lodash.sum(numbers)</td></tr>
                </table>
                <button onClick={() => {
                    setNumbers([...numbers,10]);
                }}> ADD 10</button>
            </section>
            <button onClick={() => setShownL(!shownL)}>
                {' '}
                Toggle Lorem tree
            </button>
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
