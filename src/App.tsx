//CSS
import styles from "./App.module.css"

//Components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <h1>Conteudo...</h1>
      </main>
      <Footer/>
    </>
  )
}

export default App
