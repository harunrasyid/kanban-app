import styles from "./style.module.css";
interface Props {
  title: string;
}

// TODO: temporary
const STATUS: string = "TO DO"

export const Card = ({ title }: Props) => {
  return <div className={styles.card}>
    <div>
      {title}
    </div>
    <div className={styles.bottomContainer}>
      <div></div>
      <div className={styles.statusContainer}>{STATUS}</div>
    </div>
  </div>;
};
