import styles from './GameTitle.module.css'

export default function GameTitle( { game }) {
    console.log(game)
    return (
        <div className={styles.gameCard}>
           <span> {game.title}</span>
        </div>
    )

}