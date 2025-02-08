import styles from "@/styles/CardsContent.module.sass";

function One() {
    return <></>;
}

function Two() {
    return (
        <p className={styles.Two}>
            &quot;As the sun sets on one journey and rises on another, we pause to honor a
            moment of profound significance—a celebration of growth, perseverance, and the
            boundless possibilities that lie ahead. This occasion marks not just the end
            of a chapter but the prologue to an unwritten story, rich with dreams and
            ambitions. It is a time to reflect on the paths we&apos;ve walked, the lessons
            we&apos;ve gathered, and the aspirations that will carry us into
            tomorrow.&quot;
        </p>
    );
}

function Three() {
    return (
        <>
            <div>
                <p>TIME</p>
                <p>20 Agustus 2025</p>
            </div>
            <div>
                <p>LOCATION</p>
                <p>Indonesia</p>
                <button>MAPS</button>
            </div>
        </>
    );
}

const Card = {
    One,
    Two,
    Three,
};

export default Card;
