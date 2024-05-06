import React, { useState } from 'react';

const Card = ({ cardsData, filter }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
    };

    return (
        <>
            {cardsData
            .filter((card) => {
                return filter === '' || card.tag === filter;
            })
            .map((card, index) => (
                <div className="card" key={index}>
                    <img onClick={() => handleClick(index)} src={card.itemUrl} alt={`Card ${index + 1}`} />
                </div>
            ))}

            {showModal && (
                <div className="modal">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <img src={cardsData[currentIndex].itemUrl} alt={`Card ${currentIndex + 1}`} />
                    <p>{cardsData[currentIndex].description}</p>
                    <button className="arrow-button" onClick={handlePrev}>&#10094;</button>
                    <button className="arrow-button" onClick={handleNext}>&#10095;</button>
                </div>
            )}
        </>
    );
};

export default Card;
