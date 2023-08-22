import styles from "./style.module.css";
interface Props {
  open: boolean;
  title: string;
  setTitle(data: string): void;
  handleClickAddTask(): void;
  closeModal(): void;
}

export const AddModal = ({
  open,
  closeModal,
  setTitle,
  title,
  handleClickAddTask,
}: Props) => {
  return (
    <div>
      {open ? (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <input
              className={styles.input}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={"Add new task"}
              value={title}
            />
            <div className={styles.buttonContainer}>
              <button
                className={styles.submitButton}
                onClick={handleClickAddTask}
                disabled={title === ""}
              >
                Add task
              </button>
              <button className={styles.submitButton} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
