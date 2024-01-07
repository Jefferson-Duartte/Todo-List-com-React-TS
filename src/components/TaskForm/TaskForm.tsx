import styles from "./TaskForm.module.css"

interface Props {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label>
          Título:
          <input type="text" placeholder="Título da tarefa" />
        </label>
      </div>
      <div className={styles.input_container}>
        <label>
          Dificuldade:
          <input type="text" placeholder="Dificuldade da tarefa" />
        </label>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm