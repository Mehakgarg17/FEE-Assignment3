// Sample property data
const properties = [
    {
        id: 1,
        image:"https://www.99acres.com/universalapp/img/PriceTrend2.png",
        title: "Price Trends",
        content:"check property rates & prices"
    },
    {
        id: 2,
        image:"https://www.99acres.com/universalapp/img/LocalityInsights2.png",
        title: "Locality Insights",
        content:"know more about different localities"
    },
    {
        id: 3,
        image:"https://www.99acres.com/universalapp/img/TransactionPrices2.png",
        title: "Transaction Prices",
        content:"check property transaction prices"
    }
];

// Function to render featured property listings
function renderFeaturedProperties() {
    const propertyListings = document.querySelector('.property-listings');

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="property-image">
            <h3>${property.title}</h3>
            <p>${property.content}</p>
        `;
        propertyListings.appendChild(propertyCard);
    });
}

// Call the render function initially
renderFeaturedProperties();