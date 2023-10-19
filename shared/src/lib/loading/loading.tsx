import styles from './loading.module.scss';

/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
    return (
        <div className={styles.container}>
            <div className={styles['lds-spinner']}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span> Loading...</span>
        </div>
    );
}

export default Loading;
