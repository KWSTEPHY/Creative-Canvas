fetch('./profile.json')
    .then((response) => response.json())
    .then((json) => setArtist(json));
    


    
function setArtist(data){ 



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























