import styles from "./Modal.module.css"

type Props = {
  children: React.ReactNode
}

const Modal = ({children}: Props) => {
  return (
    <div className="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Editar tarefas:</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal