/* eslint-disable @next/next/no-img-element */
import styles from "@/styles/Envelope.module.sass";
import { useState } from "react";
import Card from "./CardsConrtent";

const Envelope = () => {
    const [open, setOpen] = useState(false);
    const [throwEnvelope, setThrowEnvelope] = useState(false);
    const [equilibrium, setEquilibrium] = useState(false);
    const [readStance, setReadStance] = useState(false);

    const [activeCardIndex, setActiveCardIndex] = useState(0);

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
            setReadStance(true);
            // setReadStance(!readStance);
        }
    };

    // CARDS
    const cards = [
        {
            id: 1,
            src: "/CoverLetter.svg",
            content: "",
        },
        {
            id: 2,
            src: "/LetterDesign.svg",
            content: Card.Two(),
        },
        // {
        //     id: 3,
        //     src: "/LetterDesign.svg",
        //     content: Card.Three(),
        // },
        // {
        //     id: 4,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
        // {
        //     id: 5,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
        // {
        //     id: 6,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
        // {
        //     id: 7,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
        // {
        //     id: 8,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
        // {
        //     id: 9,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
        // {
        //     id: 10,
        //     src: "/LetterDesign.svg",
        //     content: "",
        // },
    ];

    const handleNext = () => {
        if (activeCardIndex < cards.length - 1) {
            setActiveCardIndex(activeCardIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (activeCardIndex > 0) {
            setActiveCardIndex(activeCardIndex - 1);
        }
    };

    return (
        <>
            <main
                className={`${styles.container} ${throwEnvelope ? styles.throw : ""}  ${open ? styles.open : ""
                    }`}
                onClick={handleClickOpen}
            >
                <img className={styles.top} src="/env_top.svg" alt="envelope" />
                <div
                    className={`${styles.letter} ${readStance && styles.readStance}`}
                    onClick={handleClickLetter}
                >
                    {cards.map((card, index) => {
                        let cardClass = styles.card; // Base card class

                        // Dynamically assign classes based on position
                        if (index === activeCardIndex) {
                            cardClass += ` ${styles.activeCard}`;
                        } else if (index === activeCardIndex + 1) {
                            cardClass += ` ${styles.secondCard}`;
                        } else if (index === activeCardIndex + 2) {
                            cardClass += ` ${styles.thirdCard}`;
                        } else if (index < activeCardIndex) {
                            const redundantIndex = activeCardIndex - index;
                            if (redundantIndex === 1) {
                                cardClass += ` ${styles.redundantOne}`;
                            } else if (redundantIndex === 2) {
                                cardClass += ` ${styles.redundantTwo}`;
                            } else {
                                cardClass += ` ${styles.redundantThree}`;
                            }
                        }

                        return (
                            <div key={card.id} className={cardClass} style={{ backgroundImage: `url('${card.src}')` }}>
                                {" "}
                                <button
                                    onClick={handlePrevious}
                                    disabled={index !== activeCardIndex}
                                >
                                    <img src="/Arrow.svg" alt="arrow-next" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={index !== activeCardIndex}
                                >
                                    <img src="/Arrow.svg" alt="arrow-next" />
                                </button>
                                <div>{card.content}</div>
                                {/* <img src={card.src} alt={`Card ${card.id}`} /> */}
                            </div>
                        );
                    })}
                </div>
                <img className={styles.bot} src="/env_bot.svg" alt="envelope" />
                <img className={styles.arc} src="/env_arc.svg" alt="envelope" />
                <img className={styles.base} src="/env_base.svg" alt="envelope" />
            </main>
        </>
    );
};

export default Envelope;
