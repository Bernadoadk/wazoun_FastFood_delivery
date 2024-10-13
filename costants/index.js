export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/hamburgerIcon.png'),
    },
    {
        id: 3,
        name: 'Italien',
        image: require('../assets/images/spaghettiIcon.png'),
    },
    {
        id: 4,
        name: 'SeaFood',
        image: require('../assets/images/fishIcon.png'),
    },
    {
        id: 5,
        name: 'Patisserie',
        image: require('../assets/images/cupcakeIcon.png'),
    },
    {
        id: 6,
        name: 'Chinois',
        image: require('../assets/images/boxIcon.png'),
    },
    {
        id: 7,
        name: 'Cocktail',
        image: require('../assets/images/cocktailIcon.png'),
    },
]

export const featured = {
    id: 1,
    title: 'Hot & Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Ci Gusta!2',
            image: require('../assets/images/Ci_Gusta.jpeg'),
            description: 'Hot and spicy pizzas',
            lat: 6.3540968134432205,
            lng: 2.393542649407162,
            address: "Rte De L'Aéroport, Cotonou",
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                }
            ]
        },
        {
            id: 2,
            name: 'American Dreem',
            image: require('../assets/images/AmericanDream.jpeg'),
            description: 'Hot and spicy pizzas',
            lat: 6.358183750540401,
            lng: 2.43688024092638,
            address: '76 Boulevard Steinmetz, Cotonou',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                }
            ]
        },
        {
            id: 3,
            name: 'Skyline',
            image: require('../assets/images/Skyline.jpeg'),
            description: 'Hot and spicy pizzas',
            lat: 6.362227760569375,
            lng: 2.4322163832544916,
            address: 'Cadjehoun, Cotonou',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'Hot and spicy pizzas',
                    price: 7000,
                    image: require('../assets/images/pizzaDish.jpeg'),
                }
            ]
        }
    ],
}
