import styles from './frontend-odd.module.scss';

/* eslint-disable-next-line */
export interface FrontendOddProps {}

export function FrontendOdd(props: FrontendOddProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendOdd!</h1>
    </div>
  );
}

export default FrontendOdd;
