import React from 'react';
import ProductGrid from '../../../components/ProductGrid';

const HallList = () => {
    const HallCard = [
        { Image: "./images/paperoni-image.png", name: "Стіл №1" },
        { Image: "./images/paperoni-image.png", name: "Стіл №2" },
        { Image: "./images/paperoni-image.png", name: "Стіл №3" },
        { Image: "./images/paperoni-image.png", name: "Стіл №4" },
        { Image: "./images/paperoni-image.png", name: "Стіл №5" },
    ]
    return (
        <div>
            <ProductGrid gridStructure={HallCard} />
        </div>
    );
}
export default HallList;