import { ITask } from '../../interfaces/Task'
import styles from "./TaskList.module.css"

type Props = {
  taskList: ITask[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <>
    {taskList.length > 0 ? (taskList.map((task) => (
      <div className={styles.task} key={task.id}>
        <div className={styles.details}>
          <h2>{task.title}</h2>
          <p>Dificuldade: {task.difficulty}</p>
          </div>
        <div className={styles.actions}>
          <i className='bi bi-pencil'></i>
          <i className='bi bi-trash'></i>
        </div>
      </div>
    ))) : (<p>Não há tarefas cadastradas</p>) }

    </>
  )
}

export default TaskList