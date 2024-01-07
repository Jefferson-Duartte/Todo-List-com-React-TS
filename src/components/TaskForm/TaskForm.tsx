import styles from "./TaskForm.module.css"

//Components
import { useState, useEffect, ChangeEvent,FormEvent } from "react"

//Interface
import { ITask } from "../../interfaces/Task"

interface Props {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = () => {}

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
      setTitle(e.target.value)
    }else{
      setDifficulty(parseInt(e.target.value))
    }
    console.log(title)
    console.log(difficulty)
  }

  return (
    <form className={styles.form}>
      <div onSubmit={addTaskHandler} className={styles.input_container}>
        <label>
          Título:
          <input type="text" placeholder="Título da tarefa" onChange={handleChange} name="title" />
        </label>
      </div>
      <div className={styles.input_container}>
        <label>
          Dificuldade:
          <input type="text" placeholder="Dificuldade da tarefa" onChange={handleChange} />
        </label>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm