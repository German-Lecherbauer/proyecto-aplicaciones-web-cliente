
const products = [
    { 
        name: "Camiseta",
        description: "Camiseta de algodon 100%",
        image: "./img/LogoGoogle.png",
        price: 25
    },

    { 
        name: "Pantalon",
        description: "Pantalon Jean",
        image: "./img/LogoGoogle.png",
        price: 50
    },

    { 
        name: "Buzo",
        description: "Buzo de algodon 100%",
        image: "./img/LogoGoogle.png",
        price: 40
    },

    { 
        name: "Sombrero",
        description: "Sombrero de algodon 100%",
        image: "./img/LogoGoogle.png",
        price: 40
    }
];

    const grid = document.querySelector('.product-grid');

    function createProductCard(product){

        const card = document.createElement('article');
        card.classList.add('product-card');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const title = document.createElement('h3');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.textContent = product.description;

        const price = document.createElement('p');
        price.textContent = `$${product.price}`;

        const button = document.createElement('button');
        button.textContent = 'Comprar';

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(button);

        return card;
    }

    products.forEach( product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    


