import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from './Modal.module.css'
import { motion } from "framer-motion";

export default function Modal({ children, open, style }) {

    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

    return createPortal(
        <>
            {open && style === 'modal' ? (
                <>
                    <div className={styles.overlay}/>
                    <motion.div
                        className={styles[style]}
                        initial={{ y: -100, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                            mass: 1,
                        }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "white",
                            zIndex: 1000,
                        }}
                    >

                        {children}
                    </motion.div>
                </>
            ) :
            (
                <>
                    <div className={styles.overlay}/>
                    <motion.div
                        className={styles[style]}
                        initial={{ y: 0, opacity: 0, scale: 0 }}
                        animate={{ y: 0, opacity: 1, scale: 1}}
                        transition={{
                            duration: 1
                        }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "white",
                            zIndex: 1000,
                        }}
                    >

                        {children}
                    </motion.div>
                </>
            ) }
        </>,
        document.getElementById("modal")

    )
}