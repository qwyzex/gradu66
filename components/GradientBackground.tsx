import { NextPage } from "next";
// import InteractiveBlob from "./InteractiveBlob";
import { useEffect, useState, useRef } from "react";
import styles from "@/styles/InteractiveBlob.module.sass";

const GradientBackground: NextPage = () => {
    const blobRef = useRef<HTMLDivElement>(null); // Reference to the interactive blob
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Smooth movement of the blob
        const animateBlob = () => {
            setBlobPosition((prev) => ({
                x: prev.x + (mousePosition.x - prev.x) / 20,
                y: prev.y + (mousePosition.y - prev.y) / 20,
            }));
            requestAnimationFrame(animateBlob);
        };

        animateBlob();
    }, [mousePosition]);

    useEffect(() => {
        // Mousemove event to track the target position
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Apply the updated position to the blob element
    useEffect(() => {
        if (blobRef.current) {
            blobRef.current.style.transform = `translate(${blobPosition.x}px, ${blobPosition.y}px)`;
        }
    }, [blobPosition]);

    return (
        <div className="gradient-bg">
            <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>

                <div className={styles.interactive} ref={blobRef}></div>
            </div>
        </div>
    );
};

export default GradientBackground;
