fetch('./profile.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
    


    let profile = document.getElementById("profile");
   
   


    profile.innerHTML += `<div class="artist" id="artist1">
    <img src="img/profilepic1.jpg" alt="Artist 1">
    <!-- Content for artist 1 -->
    <h3>WANJIRU OMONDI</h3>
    <p>Specializes in abstract painting and oilbased paints</p>
</div>`;

for (let i = 0; i < data.length; i++) {

    
}
























