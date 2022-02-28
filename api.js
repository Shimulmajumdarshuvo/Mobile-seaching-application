const searchMobile = () => {

    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
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
                     <button onclick="teamDetails()" class="details-btn btn btn-success">Details</button>
                  </div>
                 </div>
               </div>


             `;
        searchResut.appendChild(div);


    })
}