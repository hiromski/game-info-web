import Modal from "../UI/Modal";
import { IMG_GENRE } from "../utils/CommonUtils";
import styles from './Award.module.css'

export default function Award({ game, open, onClose }) {
    const award = {
        saveTheWorld: ['勇者', 'ゆうしゃ'],
        adventure: ['冒険者', 'ぼうけんしゃ'],
        building: ['匠', 'たくみ'],
        raising: ['育てマスター', 'そだてますたー'],
        puzzle: ['名探偵', 'めいたんてい'],
        multiplayer: ['ゲーマー', 'げーまー'],
        sports: ['スター選手', 'すたーせんしゅ'],
        party: ['楽しみ', 'たのしみ']
    }
    return (
        <Modal open={open} style='award'>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '18px' }}>
                    <ruby>{award[game.genre[0]][0]}<rt>{award[game.genre[0]][1]}</rt></ruby>の証を手に入れた！
                </h2>
                <p style={{ fontSize: '15px' }}><ruby>別<rt>べつ</rt></ruby>の<ruby>主人公<rt>しゅじんこう</rt></ruby>にもなってみよう！</p>
                 <div className={styles.shinyContainer}>
                <img style={{ height: '9vw', width: '15vh', marginTop: '5vh' }} src={IMG_GENRE[game.genre[0]]} />
                </div>
            </div>
            <button onClick={onClose} style={{ alignSelf: 'center', marginTop: '5vh' }}>閉じる</button>
        </Modal>
    )
}