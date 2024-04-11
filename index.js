
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




fetch('https://raw.githubusercontent.com/KWSTEPHY/Creative-Canvas/main/profile.json')
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
























