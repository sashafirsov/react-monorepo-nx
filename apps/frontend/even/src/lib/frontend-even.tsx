import styles from './frontend-even.module.scss';

/* eslint-disable-next-line */
export interface FrontendEvenProps {}

export function FrontendEven(props: FrontendEvenProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendEven!</h1>
    </div>
  );
}

export default FrontendEven;
