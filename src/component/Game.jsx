import Modal from "../UI/Modal";
import styles from './Game.module.css'
export function Game({ open, game, onClose }) {
    return (
        <Modal open={open} onClose={onClose} style='modal'>
            <div style={{ textAlign: 'center'}}>
            <h2 style={{ fontSize: '16px' }}>
                {game.title}
            </h2>
            <span>
                {game.platform}
            </span>
            <p>
                {game.description}
            </p>
            <div className={styles.gameImage}>
                Game Image Here
            </div>
            <button onClick={onClose}>閉じる</button>
            </div>
        </Modal>
    )
}