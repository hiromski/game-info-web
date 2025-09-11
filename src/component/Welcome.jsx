import { GENRES, IMG_GENRE } from '../utils/CommonUtils';
import SelectionCard from './SelectionCard';
import styles from './Welcome.module.css'
import { motion } from 'framer-motion'


export function Welcome({ onSelectCard }) {

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 1.7 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  };

  const selectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const cardData = [
    {
      selection: GENRES.saveTheWorld, image: "globe", hoveredImage: IMG_GENRE['saveTheWorld'], text: (
        <>
          <ruby>世界<rt>せかい</rt></ruby>を
          <ruby>守<rt>まも</rt></ruby>りたい！
        </>
      )
    },
    {
      selection: GENRES.adventure, image: "adventure", hoveredImage: IMG_GENRE['adventure'], text: (
        <>
          <ruby>魔法使<rt>まほうつか</rt></ruby>いや
          <ruby>冒険者<rt>ぼうけんしゃ</rt></ruby>になりたい！
        </>
      )
    },
    {
      selection: GENRES.building, image: "building", hoveredImage: IMG_GENRE['building'], text: (
        <>
          <ruby>もの<rt>もの</rt></ruby>づくりの
          <ruby>達人<rt>たつじん</rt></ruby>になりたい！
        </>
      )
    },
    {
      selection: GENRES.raising, image: "animals", hoveredImage: IMG_GENRE['raising'], text: (
        <>
          <ruby>生<rt>い</rt></ruby>き
          <ruby>物<rt>もの</rt></ruby>を
          <ruby>育<rt>そだ</rt></ruby>てたい！
        </>
      )
    },
    {
      selection: GENRES.puzzle, image: "detective", hoveredImage: IMG_GENRE['puzzle'], text: (
        <>
          <ruby>なぞ<rt>なぞ</rt></ruby>
          <ruby>解<rt>と</rt></ruby>き
          <ruby>探偵<rt>たんてい</rt></ruby>・
          <ruby>勉強<rt>べんきょう</rt></ruby>
          マスター！
        </>
      )
    },
    {
      selection: GENRES.multiplayer, image: "competition", hoveredImage: IMG_GENRE['multiplayer'], text: (
        <>
          <ruby>対戦<rt>たいせん</rt></ruby>で
          1<ruby>位<rt>い</rt></ruby>になりたい！
        </>
      )
    },
    {
      selection: GENRES.sports, image: "sports", hoveredImage: IMG_GENRE['sports'], text: (
        <>
          <ruby>スター<rt>すたー</rt></ruby>
          <ruby>選手<rt>せんしゅ</rt></ruby>になりたい！
        </>
      )
    },
    {
      selection: GENRES.party, image: "party", hoveredImage: IMG_GENRE['party'], text: (
        <>
          みんなでワイワイ
          <ruby>楽<rt>たの</rt></ruby>しみたい！
        </>
      )
    },
  ];

  const grids = [
    { items: cardData.slice(0, 4), stagger: 0.3, style: {} },
    { items: cardData.slice(4), stagger: 0.2, style: { paddingTop: "20px" } },
  ];

  return (
    <div className={styles.skyBackground}>
      <div className={styles.welcome}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h1 variants={titleVariants}>
            ようこそ！キミの<ruby>冒険<rt>ぼうけん</rt></ruby>がここからはじまるよ！
          </motion.h1>
          <motion.h2 variants={titleVariants}>
            キミはどんな<ruby>主人公<rt>しゅじんこう</rt></ruby>になりたい？ <ruby>選<rt>えら</rt></ruby>んでみよう！
          </motion.h2>

          {grids.map((grid, i) => (
            <motion.div
              key={i}
              className={`${styles.grid} ${styles.grid4}`}
              style={grid.style}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: grid.stagger } } }}
            >
              {grid.items.map((card, j) => (
                <motion.div key={j} variants={selectionVariants}>
                  <SelectionCard
                    selection={card.selection}
                    image={card.image}
                    hoveredImage={card.hoveredImage}
                    onSelectCard={onSelectCard}
                  >
                    {card.text}
                  </SelectionCard>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}