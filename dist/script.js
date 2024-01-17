const productList = [
    // Array of product objects with category, title, image URL, and description
    { category: "Dehydrated veggies", title: "Tomato", imageUrl: "./products/IMG_4537.jpg", link: "product1.html" },
    { category: "Dehydrated veggies", title: "Onion", imageUrl: "./products/IMG_4538.jpg", link: "product2.html" },
    { category: "Dehydrated veggies", title: "Ginger", imageUrl: "./products/IMG_4539.jpg", link: "product3.html" },
    { category: "Dehydrated veggies", title: "Banana", imageUrl: "./products/IMG_4540.jpg", link: "product4.html" },
    { category: "Dehydrated veggies", title: "Mango", imageUrl: "./products/IMG_4541.jpg", link: "product5.html" },
    { category: "Dehydrated veggies", title: "Garlic", imageUrl: "./products/IMG_4542.jpg", link: "product6.html" },
    { category: "Dehydrated veggies", title: "Lady Finger", imageUrl: "./products/IMG_4543.jpg", link: "product7.html" },
    { category: "Dehydrated veggies", title: "Red Chilli", imageUrl: "./products/IMG_4544.jpg", link: "product8.html" },
    { category: "Dehydrated veggies", title: "Beetroot", imageUrl: "./products/IMG_4546.jpg", link: "product10.html" },
    { category: "Dehydrated veggies", title: "Bittermelon", imageUrl: "./products/IMG_4547.jpg", link: "product11.html" },
    { category: "Dehydrated veggies", title: "Avla", imageUrl: "./products/IMG_4548.jpg", link: "product12.html" },
    { category: "Dehydrated veggies", title: "Jackfruit", imageUrl: "./products/IMG_4550.jpg", link: "product14.html" },
    { category: "Dehydrated veggies", title: "Chickoo", imageUrl: "./products/IMG_4551.jpg", link: "product15.html" },
    { category: "Dehydrated veggies", title: "Pineapple", imageUrl: "./products/IMG_4553.jpg", link: "product17.html" },
    { category: "Dehydrated veggies", title: "Fish", imageUrl: "./products/IMG_4555.jpg", link: "product19.html" },
    { category: "Dehydrated veggies", title: "Apple", imageUrl: "./products/IMG_4558.jpg", link: "product22.html" },
    { category: "Dehydrated veggies", title: "Curry leaves", imageUrl: "./products/IMG_4559.jpg", link: "product23.html" },
    { category: "Dehydrated veggies", title: "Palak", imageUrl: "./products/IMG_4560.jpg", link: "product24.html" },
    { category: "Dehydrated veggies", title: "Pumpkin", imageUrl: "./products/IMG_4561.jpg", link: "product25.html" },
    { category: "Dehydrated veggies", title: "Carrot", imageUrl: "./products/IMG_4562.jpg", link: "product26.html" },
    { category: "Dehydrated veggies", title: "Dry-Fruits", imageUrl: "./products/IMG_4563.jpg", link: "product27.html" },
    // ... Add more products as needed
];

const productContainer = document.getElementById("product-list");

productList.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "lg:w-1/6 md:w-1/3 p-4 w-full border bg-white hover:shadow-xl cursor-pointer";
    productCard.innerHTML = `
            <a class="block relative h-48 rounded overflow-hidden" href="${product.link}">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="${product.imageUrl}">
            </a>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">${product.title}</h2>
            </div>
        `;

    productContainer.appendChild(productCard);
});