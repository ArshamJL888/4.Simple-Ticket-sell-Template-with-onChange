let countries = document.getElementById('countries');
let cities = document.getElementById('cities');

let citiesArray = {
    Canada: ['Totonto', 'Vancouver', 'Quebec', 'Montreal','Alberta' ],
    USA: ['Los Angles', 'New york', 'Washington DC', 'San Diego', 'Miami'],
    Germany: ['Hamburg', 'Hanover', 'Berlin'],
    Iran: ['Tehran', 'Tabriz', 'Shiraz', 'Gilan', 'Yazd', 'Kish'],
    Turkey: ['Istanbul', 'Adana', 'Van', 'Antalya'],
    UAE:['Dubai', 'Abu Dhabi']
};

countries.addEventListener('change', cityHandler);

function cityHandler() {
    let country = countries.value;
    cities.textContent = "";
    if (country === 'Please Select') {
        cities.insertAdjacentHTML("beforeend", '<option value="city">Selecty City ...</option>')
    }
    else {
        citiesArray[country].forEach((city)=> {
           let newOption = document.createElement('option');
           newOption.textContent = city;
           newOption.value = city;
           cities.append(newOption);
        })
    }
}