import styles from "./Modal.module.css"

type Props = {
  children: React.ReactNode
}

const Modal = ({children}: Props) => {

  const closeModal = (e:React.MouseEvent):void => {

    const modal = document.getElementById("modal")

    modal!.classList.add("hide")
  }


  return (
    <div className="hide" id="modal">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Editar tarefas:</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal