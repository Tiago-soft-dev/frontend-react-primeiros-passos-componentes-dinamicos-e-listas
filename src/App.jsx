import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {

  const devmonss = {
    java: {
      nome: 'Java',
      imagem: 'https://salvatore.academy/devmon/1_java.png'
    },
    kotlin: {
      nome: 'Kotlin',
      imagem: 'https://salvatore.academy/devmon/2_kotlin.png'
    },
    android: {
      nome: 'Android',
      imagem: 'https://salvatore.academy/devmon/3_android.png'
    }
  }

  const devmonArray = Object.entries(devmonss).map(([key, value]) => {
    return {
      chave: key,
      nome: value.nome,
      imagem: value.imagem
    }
  })

  return (
    <>
      Lista de Cards com Map:
      <br />
      <br />
      <Header />
      <div className='cards'>
        {devmonArray.map((value) => {
          return <Card nome={value.nome} imagem={value.imagem} key={value.chave} />
          })}
      </div>

      <br />
      <br />
      Lista de Cards 2:
      <br />
      <br />
      <Header />
      <div className='cards'>
        <Card nome="Java" imagem="https://salvatore.academy/devmon/1_java.png" />
        <Card nome="Kotlin" imagem="https://salvatore.academy/devmon/2_kotlin.png" />
        <Card nome="Android" imagem="https://salvatore.academy/devmon/3_android.png" />
      </div>

    </>
  )
}

export default App
