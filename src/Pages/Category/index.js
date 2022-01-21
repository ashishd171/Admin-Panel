import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DashBoard from '../../components/DashBoard';
import ProductGrid from '../../components/ProductGrid';
import ProductList from '../../components/ProductList';

const Category = () => {
    const [product, setProduct] = useState(true)
    const CatagoryCard = [
        { Image: "./images/Pizzaimage.png", name: "Піца" },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
        { Image: "./images/Hotdrinks.png", name: "Гарячі напої" },
        { Image: "./images/Lunchcard.svg", name: "Ланчі" },
        { Image: "./images/Snacksimage.png", name: "Снеки" },
        { Image: "./images/Sweetsimage.png", name: "Солодощі" },
    ]
    const [isModal, setIsModal] = useState(false);
    const handleModal = () => {
        setIsModal(!isModal)
    }
    const history = useHistory()
    // showButton={!isModal} showInput={!isModal} listgridbtn={!isModal} productDesign={product} handleProduct={(valuechnage) => setProduct(valuechnage)}
    return (
        <div>
            {
                product && !isModal ? <ProductGrid CardStructure={CatagoryCard} Cardtype={"Category"} /> : <ProductList isModal={isModal} toggle={handleModal} />
            }
        </div>
    );
}
export default Category;