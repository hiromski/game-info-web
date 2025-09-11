import { useState } from 'react'
import styles from './GameTitle.module.css'
import { Game } from './Game'
import Award from './Award'

export default function GameTitle({ game }) {
    const [showGame, setShowGame] = useState()
    const [showAward, setShowAward] = useState()

    function handleCloseGame() {
        setShowGame(false)
        handleShowAward()
    }

    function handleShowAward() {
        const hasSeen = localStorage.getItem(game.genre[0]);
        if (hasSeen === "true") return;

        localStorage.setItem(game.genre[0], "true")
        setShowAward(true)
    }

    function handleCloseAward() {
        setShowAward(false)
    }
    return (
        <>
        {showAward && <Award game={game} open={showAward} onClose={handleCloseAward}/>
        }
            {showGame &&
                <Game open={showGame} onClose={handleCloseGame} game={game} />}
            <div className={styles.gameCard} onClick={() => setShowGame(true)}>
                <span> {game.title}</span>
                <div className={styles.gameImage}>
                    Game Image Here
                </div>
            </div>
        </>
    )

}