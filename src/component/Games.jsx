import styles from './Games.module.css'
import { motion } from 'framer-motion'
import GameTitle from './GameTitle';
import { useEffect, useState } from 'react';
import { GENRE_TITLES } from '../utils/CommonUtils';
import { select } from 'framer-motion/client';


export default function Games({ genre, games }) {

  const containerVariants = {
    hidden: { opacity: 1 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      },
    },
  };

  const gameVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className={styles.showGames}>
      <h2>{GENRE_TITLES(genre)}</h2>
      <div className={styles.gamesScroll}>
        <motion.div
          variants={containerVariants}
          style={{ overflow: "hidden", width: "100%", display: "flex", height: '100%'}}
          initial="hidden"
          animate="visible"
          key={genre}>
          {games.map((game, i) => (
            <motion.div key={game.title + i} variants={gameVariants}>
              <GameTitle  game={game} />
            </motion.div>

          ))}
        </motion.div>
      </div>
    </div>
  )
}