import { useState } from 'react'
import { GENRES, IMAGES } from '../utils/CommonUtils'
import { motion } from 'framer-motion'
import style from './SelectionCard.module.css'

export default function SelectionCard({ selection, children, image, hoveredImage, onSelectCard }) {
    const [hovered, setHovered] = useState(false)

    const subMessage = () => {
        if (selection === GENRES.saveTheWorld)
            return (<span>
                <ruby>敵<rt>てき</rt></ruby>をやっつけて
                <ruby>平和<rt>へいわ</rt></ruby>を
                <ruby>守<rt>まも</rt></ruby>ろう！
            </span>)
        else if (selection === GENRES.adventure)
            return (<span>
                <ruby>仲間<rt>なかま</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に
                <ruby>大冒険<rt>だいぼうけん</rt></ruby>しよう！
            </span>)
        else if (selection === GENRES.building)
            return (<span>
                <ruby>家<rt>いえ</rt></ruby>や<ruby>町<rt>まち</rt></ruby>をつくって
                <ruby>夢<rt>ゆめ</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>をひろげよう！
            </span>)
        else if (selection === GENRES.raising)
            return (<span>
                <ruby>動物<rt>どうぶつ</rt></ruby>や<ruby>モンスター<rt>もんすたー</rt></ruby>を
                <ruby>育て<rt>そだて</rt></ruby>て<ruby>一緒<rt>いっしょに</rt></ruby>にくらそう！
            </span>)
        else if (selection === GENRES.puzzle)
            return (<span>
                <ruby>パズル<rt>ぱずる</rt></ruby>を<ruby>解い<rt>とい</rt></ruby>たり
                <ruby>楽<rt>たの</rt></ruby>しく<ruby>学<rt>まな</rt></ruby>ぼう！
            </span>)
        else if (selection === GENRES.multiplayer)
            return (<span>
                <ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>やともだちと
                <ruby>戦<rt>たた</rt></ruby>かって1<ruby>位<rt>い</rt></ruby>をめざそう！
            </span>)
        else if (selection === GENRES.sports)
            return (<span>
                <ruby>色<rt>いろ</rt></ruby><ruby>んなスポーツ<rt>すぽーつ</rt></ruby>で
                <ruby>活躍<rt>かつやく</rt></ruby>しよう！
            </span>)
        else if (selection === GENRES.party)
            return (<span>
                <ruby>パーティーゲーム<rt>ぱーてぃーげーむ</rt></ruby>で<ruby>友<rt>とも</rt></ruby>だちと
                <ruby>楽<rt>たの</rt></ruby>しくあそぼう！
            </span>)
    }

    return (
        <div class={style.card}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onSelectCard}>
            {children}
            {hovered &&
                <>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}> {subMessage()}</motion.p>
                    <motion.img
                        src={IMAGES[hoveredImage]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: [1.3, 1.1] }}
                        transition={{ duration: 0.7 }}
                        style={{ width: (hoveredImage === 'hammer' || hoveredImage === 'magnifying' || hoveredImage === 'trophy') ? '20%' : '30%' }} />
                </>}
            {!hovered &&
                <motion.img
                    src={IMAGES[image]}
                    style={{ width: image === 'detective' ? '40%' : '' }} />}
        </div>
    )
}