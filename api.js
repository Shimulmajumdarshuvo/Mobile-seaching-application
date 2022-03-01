
//spinner added function
const toggleSpiner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
//error handling functon added
const errorHandling = displayStyle => {
    document.getElementById('error-handling').style.display = displayStyle;
}



//search field function in mobile
const searchMobile = () => {

    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;


    // display spiner
    toggleSpiner('block');



    console.log(searchText);

    searchFiled.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = mobiles => {
    console.log(mobiles);
    const searchResut = document.getElementById('search-result');

    searchResut.textContent = '';

    if (mobiles == '' || mobiles == null) {
        errorHandling('block');
    } else {
        errorHandling('none');
    }

    mobiles.slice(0, 20)?.forEach(mobile => {

        const div = document.createElement('div');
        div.classList.add('search-result');
        div.classList.add('col');


        div.innerHTML = `
        
        
                     <div class="img rounded">
                     <img
                     class="w-50"
                     src="${mobile.image}"
                      alt="picture"
                       />
                     </div>
                      <div class="card-body">
                         <h5 class="card-title">Name : ${mobile.phone_name}</h5>
                    <h5 class="card-title">Brand : ${mobile.brand}</h5>

                     </div>
                     <div class="button-container">
                     <button  class="delete-btn btn btn-danger">Delete</button>
                     <button onclick="loadPhonDetails('${mobile.slug}')" class="details-btn btn btn-success">Details</button>
                  </div>
                 </div>
               </div>


             `;
        searchResut.appendChild(div);
        const allDetailsBtn = document.getElementsByClassName("delete-btn");
        console.log(allDetailsBtn);
        for (const button of allDetailsBtn) {
            button.addEventListener("click", (del) => {

                del.target.parentNode.parentNode.style.display = "none";
            });
        }

        toggleSpiner('none');



    })
}
// search moblle slug part
const loadPhonDetails = mobileSlug => {
    console.log(mobileSlug);
    const url = ` https://openapi.programming-hero.com/api/phone/${mobileSlug}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhonDetails(data.data));


}
const displayPhonDetails = (data) => {
    console.log(data);
    const phonDetails = document.getElementById('phon-details');


    phonDetails.textContent = '';

    const div = document.createElement('div');

    div.classList.add('card');
    div.innerHTML = `
    <div class="img rounded">
    <img
    class="w-35"
    src="${data.image}"
     alt="picture"
      />
    </div>
    <div class="card-body">
                
                <h5 class="card-title">Brand : ${data.brand}</h5>
                <h5 class="card-title">Name : ${data.name}</h5>
                
                <p class="card-title">${data.releaseDate ? data.releaseDate : 'No release Date found'}</p>
                <hr>
                <h5>Main Features:</h5>
                <p class="card-title">Storage:${data.mainFeatures.storage}</p>
                <p class="card-title">Display:${data.mainFeatures.displaySize}</p>
                <p class="card-title">Chipset:${data.mainFeatures.chipSet}</p>
                <p class="card-title">Memeory:${data.mainFeatures.memory}</p>
                <p class="card-title">Sensor:${data.mainFeatures.sensors}</p>
                <h5 class="card-title">${data.slug}</h5>
                <hr>
                <h5>Others Fetures</h5>
                <p class="card-title">Blooth:${data.others.Bluetooth}</p>
                <p class="card-title">GPS:${data.others.GPS}</p>
                <p class="card-title">USB:${data.others.USB}</p>
                <p class="card-title">WLAN:${data.others.WLAN}</p>
                
                


            </div>

    `;
    phonDetails.appendChild(div);
}

