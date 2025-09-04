import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Welcome } from './component/Welcome'
import Games from './component/Games';

function App() {
   const [games, setGames] = useState([]);
   const [showGames, setShowGames] = useState()
   const gameDivRef = useRef()

    useEffect(() => {
      const fetchGameData = async () => {
        const res = await fetch('/game-data.json')
        const data = await res.json()
        
        setGames(data)
        console.log(data)
      }

      fetchGameData()
  }, []);

  function handleShowGames() {
    setShowGames(true)
    gameDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  

  return (
    <>
      <Welcome onSelectCard={handleShowGames}/>
      {showGames && 
      <div className='show-card' ref={gameDivRef}>
        <Games/>
      </div>}
    </>
  )
}

export default App
