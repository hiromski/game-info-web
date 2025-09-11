import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Welcome } from './component/Welcome'
import Games from './component/Games';
import { getGamesByGenre } from './utils/CommonUtils.jsx';

function App() {
   const [games, setGames] = useState([]);
   const [showGames, setShowGames] = useState()
   const [filteredGames, setFilteredGames] = useState([])
   const [genre, setGenre] = useState()
   const gameDivRef = useRef()

    useEffect(() => {
      const fetchGameData = async () => {
        const res = await fetch('/game-data.json')
        const data = await res.json()
        
        setGames(data)
      }

      fetchGameData()
  }, []);

  useEffect(() => {
    const gamesByGenre = getGamesByGenre(genre, games)
    setFilteredGames(gamesByGenre)
  }, [genre])

  function handleShowGames(genreSelection) {
    setShowGames(true)
    setGenre(genreSelection)
  }

  useEffect(() => {
    gameDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [showGames, genre])
  

  return (
    <>
      <Welcome onSelectCard={handleShowGames}/>
      {showGames && 
      <div className='show-card' ref={gameDivRef}>
        <Games genre={genre} games={filteredGames}/>
      </div>}
    </>
  )
}

export default App
