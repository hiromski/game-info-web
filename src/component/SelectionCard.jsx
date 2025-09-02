import { useState } from 'react'
import { GENRES } from '../utils/CommonUtils'
import { motion } from 'framer-motion'
import style from './SelectionCard.module.css'

export default function SelectionCard({ selection, children }) {
    const [showSubMessage, setShowSubMessage] = useState(false)

    const subMessage = () => {
        if (selection === GENRES.saveTheWorld)
            return (<>
                <ruby>敵<rt>てき</rt></ruby>をやっつけて
                <ruby>平和<rt>へいわ</rt></ruby>を
                <ruby>守<rt>まも</rt></ruby>ろう！
            </>)
        else if (selection === GENRES.adventure)
            return (<>
                <ruby>仲間<rt>なかま</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に
                <ruby>大冒険<rt>だいぼうけん</rt></ruby>にいこう！
            </>)
        else if (selection === GENRES.building)
            return (<>
                <ruby>家<rt>いえ</rt></ruby>や<ruby>町<rt>まち</rt></ruby>をつくって
                <ruby>夢<rt>ゆめ</rt></ruby>の<ruby>世界<rt>せかい</rt></ruby>をひろげよう！
            </>)
        else if (selection === GENRES.raising)
            return (<>
                <ruby>動物<rt>どうぶつ</rt></ruby>や<ruby>モンスター<rt>もんすたー</rt></ruby>を
                <ruby>育て<rt>そだて</rt></ruby>て<ruby>一緒<rt>いっしょに</rt></ruby>にくらそう！
            </>)
        else if (selection === GENRES.puzzle)
            return (<>
                <ruby>知識<rt>ちしき</rt></ruby>やひらめきで<ruby>パズル<rt>ぱずる</rt></ruby>をといたり
                <ruby>色々<rt>いろいろ</rt></ruby>なことを<ruby>学ぼう<rt>まなぼう</rt></ruby>！
            </>)
        else if (selection === GENRES.multiplayer)
            return (<>
                <ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>プレイヤー<rt>ぷれいやー</rt></ruby>やともだちと
                <ruby>戦<rt>たた</rt></ruby>かって1<ruby>位<rt>い</rt></ruby>をめざそう！
            </>)
        else if (selection === GENRES.sports)
            return (<>
                <ruby>色<rt>いろ</rt></ruby><ruby>んなスポーツ<rt>すぽーつ</rt></ruby>で
                <ruby>活躍<rt>かつやく</rt></ruby>しよう！
            </>)
        else if (selection === GENRES.party)
            return (<>
                <ruby>パーティーゲーム<rt>ぱーてぃーげーむ</rt></ruby>で<ruby>友<rt>とも</rt></ruby>だちと
                <ruby>楽<rt>たの</rt></ruby>しくあそぼう！
            </>)
    }

    return (
        <div class={style.card}
            onMouseEnter={() => setShowSubMessage(true)}
            onMouseLeave={() => setShowSubMessage(false)}>
            {children}
            {showSubMessage &&
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{duration: 0.5}}> {subMessage()}</motion.p>}
        </div>
    )
}