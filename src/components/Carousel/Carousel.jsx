import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import style from "./Carousel.module.css";
import { useState, useEffect, useRef } from "react";
import { Span } from "./Carousel.styled";

const Carousel = () => {
    const [index, setIndex] = useState(2);
    const intervalRef = useRef(null); // Intervalni saqlash uchun

    const images = [
        "https://bit.ly/4dF3CkO",
        "https://bit.ly/470bxq5",
        "https://bit.ly/3X3kWJ5"
    ];

    const increasing = () => {
        setIndex(prevState => (prevState < images.length ? prevState + 1 : 1));
    };

    const decreasing = () => {
        setIndex(prevState => (prevState > 1 ? prevState - 1 : images.length));
    };

    const spans = [1, 2, 3];

    useEffect(() => {
        // Intervalni o'rnatish
        intervalRef.current = setInterval(increasing, 3000); // Har 3 soniyada o'zgaradi

        // Intervalni tozalash
        return () => clearInterval(intervalRef.current);
    }, [increasing]);

    // Intervalni to'xtatish va qayta o'rnatish
    const handleArrowClick = (direction) => {
        clearInterval(intervalRef.current);
        if (direction === "left") {
            decreasing();
        } else {
            increasing();
        }
      
        intervalRef.current = setInterval(increasing, 3000);
    };

    return (
        <div className={style.carousel}>
            <div className={style.left} onClick={() => handleArrowClick("left")} style={{ cursor: "pointer" }}>
                <ArrowLeft2 size={50} color="black" variant="Bold"/>
            </div>
            <div className={style.middle}>
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Carousel ${idx + 1}`}
                        style={{ display: index === idx + 1 ? "block" : "none", width: "100%" }}
                        draggable={false}
                    />
                ))}
                <div className={style.spans}>
                    {spans.map(num => (
                        <Span key={num} $active={index === num} onClick={() => setIndex(num)} />
                    ))}
                </div>
            </div>
            <div className={style.right} onClick={() => handleArrowClick("right")} style={{ cursor: "pointer" }}>
                <ArrowRight2 size={50} color="black" variant="Bold" />
            </div>
        </div>
    );
};

export default Carousel;
