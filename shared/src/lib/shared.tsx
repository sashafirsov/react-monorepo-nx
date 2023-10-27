import styles from './shared.module.scss';
import { lazy } from 'react';
import ToggleLorem from "./ToggleLorem";

const Lorem0 = lazy(() => import('./lorem_0/lorem_0shared'));
const Lorem1 = lazy(() => import('./lorem_1/lorem_1shared'));
const Lorem2 = lazy(() => import('./lorem_2/lorem_2shared'));

/* eslint-disable-next-line */
export interface SharedProps {}

export function Shared(_props: SharedProps) {
    return (
        <div className={styles['container']}>
            <h1>Welcome to Shared!</h1>
            <ToggleLorem moduleUrl={import.meta.url} scope='shared'>
                <>
                    <Lorem0 />
                    <Lorem1 />
                    <Lorem2 />
                </>
            </ToggleLorem>
        </div>
    );
}

export default Shared;
