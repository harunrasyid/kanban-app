import styles from "./style.module.css";
import { Card } from "../Card/Card.tsx";
interface Props {
  title: string;
}

export const Column = ({ title }: Props) => {
  return (
    <div className={styles.column}>
      <p>{title}</p>
      <Card title={"Task"} />
    </div>
  );
};
