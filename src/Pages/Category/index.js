import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProductGrid from '../../components/ProductGrid';
import ProductList from '../../components/ProductList';


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
        { Image: "./images/paperoni.svg", name: "Піца", type: 'pizza' },
        { Image: "./images/hawaii pizza.png", name: "ПіНапоїца" },
        { Image: "./images/cheese pizza.png", name: "Гарячі напої" },
        { Image: "./images/meat pizza.png", name: "Ланчі" },
        { Image: "./images/bavarska pizza.png", name: "Снеки" },
    ],
    'juice': [
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца", type: 'juice' },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
    ],
    'hotdrink': [
        { Image: "./images/Hotdrinks.png", name: "Піца", type: 'hotdrink' },
        { Image: "./images/Hotdrinks.png", name: "ПіНапоїца" },
        { Image: "./images/Hotdrinks.png", name: "Гарячі напої" },
        { Image: "./images/Hotdrinks.png", name: "Ланчі" },
        { Image: "./images/Hotdrinks.png", name: "Снеки" },
        { Image: "./images/Hotdrinks.png", name: "Солодощі" }
    ],
    'lunch': [
        { Image: "./images/Lunchcard.svg", name: "Піца", type: 'lunch' },
        { Image: "./images/Lunchcard.svg", name: "ПіНапоїца" },
        { Image: "./images/Lunchcard.svg", name: "Гарячі напої" },
        { Image: "./images/Lunchcard.svg", name: "Ланчі" },
        { Image: "./images/Lunchcard.svg", name: "Снеки" },
        { Image: "./images/Lunchcard.svg", name: "Солодощі" }
    ],
    'snaks': [
        { Image: "./images/Snacksimage.png", name: "Піца", type: 'snaks' },
        { Image: "./images/Snacksimage.png", name: "ПіНапоїца" },
        { Image: "./images/Snacksimage.png", name: "Гарячі напої" },
        { Image: "./images/Snacksimage.png", name: "Ланчі" },
        { Image: "./images/Snacksimage.png", name: "Снеки" },
        { Image: "./images/Snacksimage.png", name: "Солодощі" }
    ],
    'sweets': [
        { Image: "./images/Sweetsimage.png", name: "Піца", type: 'sweets' },
        { Image: "./images/Sweetsimage.png", name: "ПіНапоїца" },
        { Image: "./images/Sweetsimage.png", name: "Гарячі напої" },
        { Image: "./images/Sweetsimage.png", name: "Ланчі" },
        { Image: "./images/Sweetsimage.png", name: "Снеки" },
        { Image: "./images/Sweetsimage.png", name: "Солодощі" }
    ]
}

const Category = (props) => {
    const [optionSelected, setOptionSelected] = useState('all');
    const [productList, setProductList] = useState(data[optionSelected]);

    useEffect(() => {
        console.log(optionSelected, data[optionSelected])
        setProductList(data[optionSelected]);
    }, [optionSelected]);

    const CatagoryCard = [
        { Image: "./images/Pizzaimage.png", name: "Піца" },
        { Image: "./images/Juiceimage.png", name: "ПіНапоїца" },
        { Image: "./images/Hotdrinks.png", name: "Гарячі напої" },
        { Image: "./images/Lunchcard.svg", name: "Ланчі" },
        { Image: "./images/Snacksimage.png", name: "Снеки" },
        { Image: "./images/Sweetsimage.png", name: "Солодощі" }
    ]

    const [isModal, setIsModal] = useState(false);
    const handleModal = () => {
        setIsModal(!isModal)
    }
    const history = useHistory()
    return (
        <div>
            {
                props.handleProduct && !isModal ?
                    <ProductGrid CardStructure={productList} handleClick={(option) => setOptionSelected(option)}
                        Cardtype={"Category"} /> :
                    <ProductList isModal={isModal} toggle={handleModal} />
            }
        </div>
    );
}
export default Category;