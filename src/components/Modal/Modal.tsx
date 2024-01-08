import styles from "./Modal.module.css"

type Props = {}

const Modal = (props: Props) => {
  return (
    <div className="modal">
      <div></div>
      <div>
        <h1>Texto do modal</h1>
      </div>
    </div>
  )
}

export default Modal