
function handleLikeButtonClick() {
    // Select all elements with the class "like-button" and "like-count"
    const likeButtons = document.querySelectorAll(".like-button");
    const likeCountElements = document.querySelectorAll(".likes");

    // Loop through each like button
    likeButtons.forEach((button, index) => {
        let likes = 0; // Initial likes count for each image

        button.addEventListener("click", function () {
            likes++; // Increase likes count for the clicked image
            likeCountElements[index].textContent = `${likes} likes`; // Update likes count in the DOM for the corresponding image
        });
    });
}

// Call the function to handle like button click
handleLikeButtonClick();

// function addToCart() {
//     // Add the item to the cart (this is just a placeholder, you would implement your own logic here)
//     // For example, you might add the item to an array representing the cart
//     let cart = []; // Assuming cart is an array
//     cart.push({ item: "Title", quantity: 1 }); // Adding an item to the cart

//     // Update the cart count (you can update the count displayed in the UI)
//     let cartCount = cart.length;

//     // Display a message to the user (you can use an alert, console.log, or display a message in the UI)
//     alert("Item added to cart"); // Display an alert message

//     // You can also update the UI to reflect the updated cart count, for example:
//     document.getElementById("cart-count").textContent = cartCount; // Update the cart count displayed in the UI
// }



fetch('./profile.json')
    .then((response) => response.json())
    .then((json) => setArtist(json));




function setArtist(data) {



    let profile = document.getElementById("profile");






    for (let i = 0; i < data.length; i++) {

        profile.innerHTML += `<div class="artist" id="artist1">
        <img src="${data[i]?.image}" alt="Artist 1">
        <!-- Content for artist 1 -->
        <h3> ${data[i]?.name}</h3>
        <p>${data[i]?.description}</p>
    </div>`;
    }


}

//Add to cart
// Initialize cart badge count
let cartBadgeCount = 0;

// Function to add a product to the cart
function addToCart() {
    // Increment cart badge count
    cartBadgeCount++;
    // Update the cart badge
    updateCartBadge();
}

// Function to update the cart badge
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartBadgeCount;
    }
}
























