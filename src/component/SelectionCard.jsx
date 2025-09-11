import { useState } from 'react'
import { GENRE_MESSAGES, IMAGES } from '../utils/CommonUtils'
import { motion } from 'framer-motion'
import style from './SelectionCard.module.css'

export default function SelectionCard({ selection, children, image, hoveredImage, onSelectCard }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className={style.card}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onSelectCard(selection)}>
            {children}
            {hovered &&
                <>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}> {GENRE_MESSAGES(selection)}</motion.p>
                    <motion.img
                        src={hoveredImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, scale: [1.3, 1.1] }}
                        transition={{ duration: 0.7 }}
                        style={{ width: (selection === 'building' || selection === 'puzzle' || selection === 'sports') ? '20%' : '30%' }} />
                </>}
            {!hovered &&
                <motion.img
                    src={IMAGES[image]}
                    style={{ width: image === 'detective' ? '40%' : '' }} />}
        </div>
    )
}