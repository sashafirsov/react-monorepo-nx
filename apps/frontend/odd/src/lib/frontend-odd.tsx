import styles from './frontend-odd.module.scss';
import { Shared, ToggleLorem } from "@rmn/shared";
import { lazy, useState } from 'react';
import sum from 'lodash-es/sum';

const Lorem0 = lazy(() => import('./lorem_0/lorem_0frontend-odd'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1frontend-odd'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2frontend-odd'));

/* eslint-disable-next-line */
export interface FrontendOddProps {}

export function FrontendOdd(_props: FrontendOddProps) {
    const [numbers, setNumbers] = useState([1, 2]);

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
            <ToggleLorem moduleUrl={import.meta.url} scope='odd' >
                <>
                    <Lorem0 />
                    <Lorem1 />
                    <Lorem2 />
                </>
            </ToggleLorem>

            <Shared />
        </div>
    );
}

export default FrontendOdd;
