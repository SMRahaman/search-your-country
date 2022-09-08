const loadCountries=(serach)=>{
const url=`https://restcountries.com/v3.1/name/${serach}`
fetch(url)
.then(res=> res.json())
.then(data=>displayCountries(data))
// .then(data=>console.log(data))

}

const displayCountries=(countries)=>{
 
    const displayUnit=document.getElementById('display_unit');
    displayUnit.innerHTML=``;
    for(let country of countries){
       const divCreate=document.createElement('div');
       divCreate.classList.add('display');
        divCreate.innerHTML=`
        <h5>Country Name:${country.name.common}</h5>
        <h6>Country Area:${country.area}</h6>
        <h6>Capital Name:${country.capital[0]}</h6>
        <h6>Population:${country.population}</h6>
        <h6>Flag:</h6>
        <img src="${country.flags.png}">
        
        `;
        displayUnit.appendChild(divCreate);
        
    }
}

const getInputValue=()=>{

    const searchField=document.getElementById('input_field');
    const searchFieldValue=searchField.value;
    loadCountries(searchFieldValue);
    searchField.value='';
}




// loadCountries('bangladesh');