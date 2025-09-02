import { useEffect, useState } from 'react'
import './App.css'
import { Welcome } from './component/Welcome'

function App() {
   const [games, setGames] = useState([]);

    useEffect(() => {
      const fetchGameData = async () => {
        const res = await fetch('/game-data.json')
        const data = await res.json()
        
        setGames(data)
        console.log(data)
      }

      fetchGameData()
  }, []);

  

  return (
    <>
      <Welcome />
    </>
  )
}

export default App
