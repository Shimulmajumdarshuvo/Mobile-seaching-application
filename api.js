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
    //     const searchResut = document.getElementById('search-result');
    //     mobiles.forEach(mobile => {
    //         const div = document.createElement('div');
    //         div.classList.add('col');
    //         div.innerHTML = `
    //         <div onclick="loadMobileDetail(${mobile.brand})" class="card h-100">
    //                 <img src="${mobile.image}" class="card-img-top" alt="...">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${mobile.phone_name}</h5>
    //                     <h5 class="card-title">${mobile.slug}</h5>

    //                 </div>
    //             </div>

    //         `;

    //     })
}