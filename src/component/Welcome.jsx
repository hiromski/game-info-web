import { GENRES } from '../utils/CommonUtils';
import SelectionCard from './SelectionCard';
import styles from './Welcome.module.css'
import { motion } from 'framer-motion'


export function Welcome() {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1.7
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: 'easeOut',
            },
        },
    };

    const selectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            <div className={styles.skyBackground}>
                <div className={styles.welcome}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible">
                        <motion.h1 variants={titleVariants}>
                            ようこそ！
                            キミの<ruby>冒険<rt>ぼうけん</rt></ruby>がここからはじまるよ！
                        </motion.h1>
                        <motion.h2 variants={titleVariants}>
                            キミはどんな<ruby>主人公<rt>しゅじんこう</rt></ruby>になりたい？ <ruby>選<rt>えら</rt></ruby>んでみよう！
                        </motion.h2>
                        <motion.div className={`${styles.grid} ${styles.grid4}`}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.3 } }
                            }}>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.saveTheWorld}>
                                    <ruby>世界<rt>せかい</rt></ruby>を<ruby>守<rt>まも</rt></ruby>りたい！
                                </SelectionCard>
                            </motion.div>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.adventure}>
                                    <ruby>魔法使い<rt>まほうつかい</rt></ruby>や<ruby>冒険者<rt>ぼうけんしゃ</rt></ruby>になりたい！
                                </SelectionCard>
                            </motion.div>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.building}>
                                    ものづくりの<ruby>達人<rt>たつじん</rt></ruby>になりたい！
                                </SelectionCard>
                            </motion.div>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.raising}>
                                    <ruby>生き物<rt>いきもの</rt></ruby>を<ruby>育<rt>そだ</rt></ruby>てたい！
                                </SelectionCard>
                            </motion.div>
                        </motion.div>
                        <motion.div className={`${styles.grid} ${styles.grid4}`} style={{ paddingTop: '20px' }}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.2 } }
                            }}>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.puzzle}>
                                    なぞ<ruby>解き探偵<rt>ときたんてい</rt></ruby>・<ruby>勉強マスター<rt>べんきょうますたー</rt></ruby>！
                                </SelectionCard>
                            </motion.div>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.multiplayer}>
                                    <ruby>対戦<rt>たいせん</rt></ruby>で1<ruby>位<rt>い</rt></ruby>になりたい！
                                </SelectionCard>
                            </motion.div>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.sports}><ruby>
                                    スター選手<rt>すたーせんしゅ</rt></ruby>になりたい！
                                </SelectionCard>
                            </motion.div>
                            <motion.div variants={selectionVariants}>
                                <SelectionCard selection={GENRES.party}>
                                    みんなでワイワイ<ruby>楽<rt>たの</rt></ruby>しみたい！
                                </SelectionCard>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                </div >
            </div>
            <div>

            </div>
        </>
    )
}