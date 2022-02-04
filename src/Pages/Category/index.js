import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductGrid from '../../components/ProductGrid';
import ProductsList from '../../components/ProductsList';

const data = {
    'all': [
        { Image: "./images/Pizzaimage.png", name: "Піца", type: 'pizza' },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца", type: 'juice' },
        { Image: "./images/Hotdrinks.png", name: "Гарячі напої", type: 'hotdrink' },
        { Image: "./images/Lunchcard.svg", name: "Ланчі", type: 'lunch' },
        { Image: "./images/Snacksimage.png", name: "Снеки", type: 'snaks' },
        { Image: "./images/Sweetsimage.png", name: "Солодощі", type: 'sweets' }
    ],
    'pizza': [
        { Image: "./images/paperoni.svg", name: "Піца", price: "110 грн"},
        { Image: "./images/hawaii pizza.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/cheese pizza.png",  price: "110 грн",name: "Гарячі напої" },
        { Image: "./images/meat pizza.png",  price: "110 грн",name: "Ланчі" },
        { Image: "./images/bavarska pizza.png",  price: "110 грн",name: "Снеки" },
    ],
    'juice': [
        { Image: "./images/Juiceimage.png",  price: "800 грн",name: "ПіНапоїца", },
        { Image: "./images/Juiceimage.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png",  price: "110 грн",name: "ПіНапоїца" },
    ],
    'hotdrink': [
        { Image: "./images/Hotdrinks.png",  price: "110 грн",name: "Піца", },
        { Image: "./images/Hotdrinks.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Hotdrinks.png",  price: "110 грн",name: "Гарячі напої" },
        { Image: "./images/Hotdrinks.png",  price: "110 грн",name: "Ланчі" },
        { Image: "./images/Hotdrinks.png",  price: "110 грн",name: "Снеки" },
        { Image: "./images/Hotdrinks.png",  price: "110 грн",name: "Солодощі" }
    ],
    'lunch': [
        { Image: "./images/Lunchcard.svg",  price: "110 грн",name: "Піца", },
        { Image: "./images/Lunchcard.svg",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Lunchcard.svg",  price: "110 грн",name: "Гарячі напої" },
        { Image: "./images/Lunchcard.svg",  price: "110 грн",name: "Ланчі" },
        { Image: "./images/Lunchcard.svg",  price: "110 грн",name: "Снеки" },
        { Image: "./images/Lunchcard.svg",  price: "110 грн",name: "Солодощі" }
    ],
    'snaks': [
        { Image: "./images/Snacksimage.png",  price: "110 грн",name: "Піца",},
        { Image: "./images/Snacksimage.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Snacksimage.png",  price: "110 грн",name: "Гарячі напої" },
        { Image: "./images/Snacksimage.png",  price: "110 грн",name: "Ланчі" },
        { Image: "./images/Snacksimage.png",  price: "110 грн",name: "Снеки" },
        { Image: "./images/Snacksimage.png",  price: "110 грн",name: "Солодощі" }
    ],
    'sweets': [
        { Image: "./images/Sweetsimage.png",  price: "110 грн",name: "Піца", },
        { Image: "./images/Sweetsimage.png",  price: "110 грн",name: "ПіНапоїца" },
        { Image: "./images/Sweetsimage.png",  price: "110 грн",name: "Гарячі напої" },
        { Image: "./images/Sweetsimage.png",  price: "110 грн",name: "Ланчі" },
        { Image: "./images/Sweetsimage.png",  price: "110 грн",name: "Снеки" },
        { Image: "./images/Sweetsimage.png",  price: "110 грн",name: "Солодощі" }
    ]
}

const Category = (props) => {
    const [optionSelected, setOptionSelected] = useState('all');
    const [productList, setProductList] = useState(data[optionSelected]);

    useEffect(() => {
        setProductList(data[optionSelected]);
    }, [optionSelected]);

    const [isModal, setIsModal] = useState(false);
    const handleModal = () => {
        setIsModal(!isModal)
    }
    useEffect(() => {
        return () => {
            console.log(isModal, 'returning')
            handleModal()
        };
    }, []);

    const history = useHistory()
    console.log(isModal, 'render',props.handleProduct && !isModal)
    return (
        <div>
            {
                props.handleProduct && !isModal ?
                    <ProductGrid gridStructure={productList} data={optionSelected} handleClick={(option) => setOptionSelected(option)}
                        cardType={"Category"} /> :
                    <ProductsList listStructure={productList} isModal={isModal} toggle={handleModal} />
            }
        </div>
    );
}
export default Category;