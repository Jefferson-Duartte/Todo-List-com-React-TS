import styles from "./TaskForm.module.css"

//Components
import { useState, useEffect, ChangeEvent,FormEvent } from "react"

//Interface
import { ITask } from "../../interfaces/Task"

interface Props {
  btnText: string,
  taskList: ITask[],
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>> ,
  task? : ITask | null
}

const TaskForm = ({btnText,taskList, setTaskList, task}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = {id, title, difficulty}

    setTaskList!([...taskList, newTask])
    setTitle("")
    setDifficulty(0)

    console.log(taskList)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
  }

  useEffect(() => {
    if(task){
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  },[task])

  return (
    <form  onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label>
          Título:
          <input type="text" placeholder="Título da tarefa" onChange={handleChange} name="title" value={title} />
        </label>
      </div>
      <div className={styles.input_container}>
        <label>
          Dificuldade:
          <input type="text" placeholder="Dificuldade da tarefa" onChange={handleChange} value={difficulty} />
        </label>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm