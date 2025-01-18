/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Envelope.module.sass";
import { useState } from "react";

const Envelope = () => {
    const [open, setOpen] = useState(false);
    const [throwEnvelope, setThrowEnvelope] = useState(false);
    const [equilibrium, setEquilibrium] = useState(false);
    const [readStance, setReadStance] = useState(false);

    const time_throw = 1750;
    const time_equil = 1750;

    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(() => {
            setThrowEnvelope(true);
        }, time_throw);
        setTimeout(() => {
            setEquilibrium(true);
        }, time_throw + time_equil);
    };

    const handleClickLetter = () => {
        if (equilibrium) {
            setReadStance(!readStance);
        }
    };

    return (
        <>
            <main
                className={`${styles.container} ${throwEnvelope ? styles.throw : ""}  ${
                    open ? styles.open : ""
                }`}
                onClick={handleClickOpen}
            >
                <img className={styles.top} src="/env_top.svg" alt="envelope" />
                <div
                    className={`${styles.letter} ${readStance && styles.readStance}`}
                    onClick={handleClickLetter}
                >
                    <div className={`${styles.card} ${styles.activeCard}`}>
                        <img src="/CoverLetter.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                    <div className={`${styles.card} ${styles.secondCard}`}>
                        <img src="/LetterDesign.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                    <div className={`${styles.card} ${styles.thirdCard}`}>
                        <img src="/LetterDesign.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                    <div className={`${styles.card}`}>
                        <img src="/LetterDesign.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                    <div className={`${styles.card}`}>
                        <img src="/LetterDesign.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                    <div className={`${styles.card}`}>
                        <img src="/LetterDesign.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                    <div className={`${styles.card}`}>
                        <img src="/LetterDesign.svg" alt="" />
                        <button>NEXT</button>
                        <button>PREVIOUS</button>
                    </div>
                </div>
                <img className={styles.bot} src="/env_bot.svg" alt="envelope" />
                <img className={styles.arc} src="/env_arc.svg" alt="envelope" />
                <img className={styles.base} src="/env_base.svg" alt="envelope" />
            </main>
        </>
    );
};

export default Envelope;
