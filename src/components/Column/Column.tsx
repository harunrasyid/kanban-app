import styles from "./style.module.css";
interface Props {
  title: string;
}

export const Column = ({ title }: Props) => {
  return <div className={styles.column}>{title}</div>;
};
