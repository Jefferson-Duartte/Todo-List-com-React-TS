//CSS
import { useState } from "react"
import styles from "./App.module.css"

//Components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TaskForm from "./components/TaskForm/TaskForm"
import TaskList from "./components/TaskList/TaskList"
import Modal from "./components/Modal/Modal"

//Interface
import { ITask } from "./interfaces/Task"

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const removeTask = (id:number) => {
    setTaskList(taskList.filter((task => task.id !== id)))
  }

  const hideOrShowModal = (display:boolean) => {

    const modal = document.querySelector("#modal")
    if(display){
      	modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }
  }

  const editTask = (task:ITask):void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  return (
    <>
      <Modal children={<TaskForm btnText="Editar tarefa" taskList={taskList} task={taskToUpdate}/>}/>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} handleDelete={removeTask} handleEdit={editTask}/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
