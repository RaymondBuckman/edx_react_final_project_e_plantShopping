import React, { useState,useEffect } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { addItem, handleToggle } from './CartSlice'   // Make sure this is in brackets!
import { useDispatch } from 'react-redux';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page

    // Create one variable named addedToCart for state management using the useState hook to track which products are added to the cart.
    const [addedToCart, setAddedToCart] = useState({})

    // Variable to keep track of total # of cart items
    // (8. Total Quantity Counter)
    const [cartCount, setCartCount] = useState(0)

    // Disable "Add to Cart" button

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        // I had an error coming from dispatch where it said "TypeError: s is undefined"
        // This error happened because addItem being imported above wasn't in brackets! (like so { addItem })
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));

        // console.log(addedToCart);
        console.log(product)
        dispatch(addItem(product));
        setCartCount(cartCount + 1);
    };

    const [plantsArray, setPlantsArray] = useState([
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15",
                    disabled: false
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12",
                    disabled: false
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$18",
                    disabled: false
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20",
                    disabled: false
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17",
                    disabled: false
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14",
                    disabled: false
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20",
                    disabled: false
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18",
                    disabled: false
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15",
                    disabled: false
                },
                {
                    name: "Mint",
                    image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12",
                    disabled: false
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$14",
                    disabled: false
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$22",
                    disabled: false
                }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description: "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$10",
                    disabled: false
                },
                {
                    name: "Marigold",
                    image:"https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description: "Natural insect repellent, also adds color to the garden.",
                    cost: "$8",
                    disabled: false
                },
                {
                    name: "Geraniums",
                    image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description: "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$20",
                    disabled: false
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9",
                    disabled: false
                },
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20",
                    disabled: false
                },
                {
                    name: "Catnip",
                    image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$13",
                    disabled: false
                }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$14",
                    disabled: false
                },
                {
                    name: "Echinacea",
                    image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$16",
                    disabled: false
                },
                {
                    name: "Peppermint",
                    image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13",
                    disabled: false
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$14",
                    disabled: false
                },
                {
                    name: "Chamomile",
                    image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$15",
                    disabled: false
                },
                {
                    name: "Calendula",
                    image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$12",
                    disabled: false
                }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$25",
                    disabled: false
                },
                {
                    name: "Pothos",
                    image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$10",
                    disabled: false
                },
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Needs infrequent watering and is resilient to most pests.",
                    cost: "$15",
                    disabled: false
                },
                {
                    name: "Cast Iron Plant",
                    image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$20",
                    disabled: false
                },
                {
                    name: "Succulents",
                    image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$18",
                    disabled: false
                },
                {
                    name: "Aglaonema",
                    image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$22",
                    disabled: false
                }
            ]
        }
    ]);

    const handleDisabled = (plantsArray, index, plantIndex) => {
        // console.log(plantsArray[index].category + '\n' + plantsArray[index].plants[plantIndex].name + '\n');

        
        const updatedPlants = plantsArray.map((category, cIndex) => {
            if(cIndex === index) {
                // alert("works!")
                return {
                    ...category,
                    plants: category.plants.map((plant, pIndex) => 
                        plantIndex === pIndex ? { ...plant, disabled: true } : plant
                    )
                };
            }

            return category;
        });

        setPlantsArray(updatedPlants);
        // console.log(addedToCart)
    }

    const handleEnabled = (currPlant) => {
        // plantsArray.map(category => {
        //     // const plantToEnable = category.plants.find((plant) => plant.name === currPlant.name)
        //     return {
        //         ...category,
        //         plants: category.plants.map(plant => 
        //             plant.name === currPlant.name ? { ...plant, disabled: false } : plant
        //         )
        //     };
        // })

        const updatedPlants = plantsArray.map((category) => {
            if(category.plants.some(item => item.name === currPlant.name)) {
                // console.log(category.plants)
                return {
                    ...category,
                    plants: category.plants.map(plant => 
                        plant.name === currPlant.name ? { ...plant, disabled: false } : plant
                    )
                };
            }
            
            return category;
        });

        setPlantsArray(updatedPlants);
    }
    

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
        width: '100vw'
    }

   const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
   }

   const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none'
    }

   const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" style={{textDecoration:'none'}}>
                            <div>
                                <h3 style={{color:'white'}}>Paradise Nursery</h3>
                                <i style={{color:'white'}}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><span id="cartNumber">{cartCount}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
                </div>
            </div>
        {!showCart? (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1><div className="category-title">{category.category}</div></h1>
                    <div className="product-list">
                        {category.plants.map((plant, plantIndex) => (
                            <div className="product-card" key={plantIndex}>
                                <div className="product-title">{plant.name}</div>
                                <img className="product-image" src={plant.image} alt={plant.name} />
                                {/*Similarly like the above plant.name show other details like description and cost*/}
                                <div className="product-price">{plant.cost}</div>
                                <p style={{ fontSize: '.75em' }}>{plant.description}</p>
                                <button  
                                    className={`product-button ${plant.disabled ? "disabled" : ""}`}
                                    disabled={plant.disabled} 
                                    onClick={() => (
                                        handleAddToCart(plant),
                                        handleDisabled(plantsArray, index, plantIndex)
                                    )}
                                >
                                    {plant.disabled ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
 ) :  (
    <CartItem 
        onContinueShopping={handleContinueShopping} 
        setShowCart={setShowCart}
        cartCount={cartCount}
        setCartCount={setCartCount}
        handleEnabled={handleEnabled}
    />
)}
    </div>
    );
}

export default ProductList;
