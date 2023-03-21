let countriesSelectBox = document.querySelector("#countries");
let CitySelectBox = document.querySelector("#cities");

let objData = {
    Canada: ['Totonto', 'Vancouver', 'Quebec', 'Montreal','Alberta' ],
    USA: ['Los Angles', 'New york', 'Washington DC', 'San Diego', 'Miami'],
    Germany: ['Hamburg', 'Hanover', 'Berlin'],
    Iran: ['Tehran', 'Tabriz', 'Shiraz', 'Gilan', 'Yazd', 'Kish'],
    Turkey: ['Istanbul', 'Adana', 'Van', 'Antalya'],
    UAE:['Dubai', 'Abu Dhabi']
}
countriesSelectBox.addEventListener('change', changeHandler);
function changeHandler() {
    CitySelectBox.innerHTML = "";
    if (countriesSelectBox.value === 'Please Select ...') {
        CitySelectBox.innerHTML = "<option>Select City ...</option>"
    }
    else {
         objData[countriesSelectBox.value].forEach(addSelectBox);
    }
}
function addSelectBox(city) {
    let newOption = document.createElement('option');
    newOption.value = city;
    newOption.innerHTML = city;
    CitySelectBox.append(newOption);
}


