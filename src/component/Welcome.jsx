import { GENRES } from '../utils/CommonUtils';
import SelectionCard from './SelectionCard';
import styles from './Welcome.module.css'
import { motion } from 'framer-motion'


export function Welcome( {onSelectCard}) {

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
        { selection: GENRES.saveTheWorld, image: "globe", hoveredImage: "sword", text: "世界を守りたい！" },
        { selection: GENRES.adventure, image: "adventure", hoveredImage: "magic", text: "魔法使いや冒険者になりたい！" },
        { selection: GENRES.building, image: "building", hoveredImage: "hammer", text: "ものづくりの達人になりたい！" },
        { selection: GENRES.raising, image: "animals", hoveredImage: "egg", text: "生き物を育てたい！" },
        { selection: GENRES.puzzle, image: "detective", hoveredImage: "magnifying", text: "なぞ解き探偵・勉強マスター！" },
        { selection: GENRES.multiplayer, image: "competition", hoveredImage: "medal", text: "対戦で1位になりたい！" },
        { selection: GENRES.sports, image: "sports", hoveredImage: "trophy", text: "スター選手になりたい！" },
        { selection: GENRES.party, image: "party", hoveredImage: "cracker", text: "みんなでワイワイ楽しみたい！" },
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