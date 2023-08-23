import styles from "./style.module.css";
import { Card } from "../Card/Card.tsx";
import { State, TaskType } from "../../types/Types.ts";
import { stateTitle } from "../../utils/column-utils.ts";
import { useStore } from "../../store/store.ts";
import { shallow } from "zustand/shallow";
import useAddModal from "../../hooks/useAddModal.ts";
import { AddModal } from "../AddModal/AddModal.tsx";
import * as uuid from "uuid";

interface Props {
  state: State;
}

export const Column = ({ state }: Props) => {
  const tasks: TaskType[] = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow,
  );
  const addTasks = useStore((store) => store.addTasks);
  const draggedTask = useStore((store) => store.draggedTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const moveTask = useStore((store) => store.moveTask);

  const { open, showModal, closeModal, title, setTitle } = useAddModal();

  const handleClickAddTask = () => {
    addTasks({ id: uuid.v4(), title: title, state: state });
    closeModal();
  };

  return (
    <div
      className={styles.column}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        moveTask({
          id: draggedTask?.id ?? 0,
          title: draggedTask?.title ?? "",
          state: state,
        });
        setDraggedTask(undefined);
      }}
    >
      <div className={styles.titleContainer}>
        <p>{stateTitle(state)}</p>
        <button className={styles.addButton} onClick={showModal}>
          Add
        </button>
      </div>
      {tasks.map((task, index) => {
        return <Card task={task} key={index.toString() + task.title} />;
      })}
      <AddModal
        open={open}
        title={title}
        setTitle={setTitle}
        handleClickAddTask={handleClickAddTask}
        closeModal={closeModal}
      />
    </div>
  );
};
