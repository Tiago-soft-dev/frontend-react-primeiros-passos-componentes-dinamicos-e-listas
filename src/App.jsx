import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className='cards'>
        <Card nome="Java" imagem="https://salvatore.academy/devmon/1_java.png" />
        <Card nome="Kotlin" imagem="https://salvatore.academy/devmon/2_kotlin.png" />
        <Card nome="Android" imagem="https://salvatore.academy/devmon/3_android.png" />
      </div>

    </>
  )
}

export default App
