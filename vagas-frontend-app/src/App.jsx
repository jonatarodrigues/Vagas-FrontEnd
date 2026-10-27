import { useState } from 'react'
import './App.css'

//import Welcome from './components/Welcome'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Depoimentos from './components/Depoimentos'
import News from './components/News'
import Vagas from './components/Vagas'
import vagas from './data/vagas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header></Header>


      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em..."
      >
        <button className="btn">Publicar vaga $299</button>
      </Hero>

      <main className="conteudo">
        <Vagas vagas={vagas}></Vagas>
      </main>

      <News></News>

      <Depoimentos></Depoimentos>

      <Footer></Footer>

    </>
  )
}

export default App
