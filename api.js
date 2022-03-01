const toggleSpiner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}



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
    mobiles.forEach(mobile => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                     <div class="img rounded">
                     <img
                     class="w-35"
                     src="${mobile.image}"
                      alt="picture"
                       />
                     </div>
                      <div class="card-body">
                         <h5 class="card-title">${mobile.phone_name}</h5>
                    <h5 class="card-title">${mobile.slug}</h5>

                     </div>
                     <div class="button-container">
                     <button  class="delete-btn btn btn-danger">Delete</button>
                     <button onclick="loadPhonDetails('${mobile.slug}')" class="details-btn btn btn-success">Details</button>
                  </div>
                 </div>
               </div>


             `;
        searchResut.appendChild(div);

        toggleSpiner('none');



    })
}
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
                
                <h5 class="card-title">${data.brand}</h5>
                <h5 class="card-title">${data.name}</h5>
                <p class="card-title">${data.releaseDate}</p>
                <p class="card-title">${data.mainFeatures.storage}</p>
                <p class="card-title">${data.mainFeatures.displaySize}</p>
                <p class="card-title">${data.mainFeatures.chipSet}</p>
                <p class="card-title">${data.mainFeatures.memory}</p>
                <h5 class="card-title">${data.slug}</h5>
                
                


            </div>

    `;
    phonDetails.appendChild(div);
}