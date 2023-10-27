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
    const [numbers, setNumbers] = useState([1, 2]);
    const [clickedTime, setClickedTime] = useState(0);
    const RenderedTime = () => {
        const ms = Date.now() - clickedTime;
        return <>Loaded in {ms.toLocaleString()} ms </>;
    };
    return (
        <div className={styles['container']}>
            <h1>Welcome to FrontendOdd!</h1>
            <section>
                <code>import sum from 'lodash'</code>
                loads the module from large library. The bundler should be
                picking <b>only</b> code for <b>sum</b> so the `odd` module size
                only few bytes larger of `even`.
                <table>
                    <tbody>
                        {numbers.map((n: number, i: number) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{n}</td>
                            </tr>
                        ))}
                        <tr>
                            <th>∑</th>
                            <td>{sum(numbers)} lodash.sum(numbers)</td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => {
                        setNumbers([...numbers, 10]);
                    }}
                >
                    {' '}
                    ADD 10
                </button>
            </section>
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

export default FrontendOdd;
