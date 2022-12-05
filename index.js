let btnAdd = document.querySelector('#bottom');
let btn2Add = document.querySelector('#top');
let table = document.querySelector('table');
let nameInput = document.querySelector('#name');
let lastName = document.querySelector('#lastname');
let City = document.querySelector('#city');
let countryInput = document.querySelector('#country');
let serialNumber = document.querySelector('#SN');

btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let lastname = lastName.value;
    let city = City.value;
    let country = countryInput.value;
    let sn=serialNumber.value
    let template = `
                <tr>
                    <td>${sn}</td>
                    <td>${name}</td>
                    <td>${lastname}</td>
                    <td>${city}</td>
                    <td>${country}</td>
                </tr>`;
    table.innerHTML += template;
});


btn2Add.addEventListener('click', () => {

    let serialnumber = serialNumber.value;
    let name = nameInput.value;
    let lastname = lastName.value;
    let city = City.value;
    let country = countryInput.value;



    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    
   
    var c = row.insertCell(-1);
    var fn = row.insertCell(0);
    var ct = row.insertCell(1);    
    var ln = row.insertCell(1);  
    var sn = row.insertCell(0); 

   
    fn.innerHTML = name;
    ln.innerHTML = lastname;
    ct.innerHTML = city;
    c.innerHTML =country ;
    
    
  
});
