"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Get a reference to the parent element where we want to append the table
const body = document.querySelector('body');
// Create the table element
const table = document.createElement('table');
// Create the table header
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headerCell1 = document.createElement('th');
const headerCell2 = document.createElement('th');
const headerCell3 = document.createElement('th');
const headerCell4 = document.createElement('th');
const headerCell5 = document.createElement('th');
const headerCell6 = document.createElement('th');
const headerCell7 = document.createElement('th');
headerCell1.innerText = 'id';
headerCell2.innerText = 'Name';
headerCell3.innerText = 'Email';
headerCell4.innerText = 'Age';
headerCell5.innerText = 'Address';
headerCell6.innerText = 'Contact';
headerCell7.innerText = 'DOB';
headerRow.appendChild(headerCell1);
headerRow.appendChild(headerCell2);
headerRow.appendChild(headerCell3);
headerRow.appendChild(headerCell4);
headerRow.appendChild(headerCell5);
headerRow.appendChild(headerCell6);
headerRow.appendChild(headerCell7);
thead.appendChild(headerRow);
table.appendChild(thead);
// Create the table body and rows
const tbody = document.createElement('tbody');
table.appendChild(tbody);
// Append the table to the parent element
body.appendChild(table);
//styling
table.style.width = '98vw';
table.style.border = "2px solid grey";
thead.style.backgroundColor = 'black';
thead.style.color = 'white';
thead.style.padding = '2px';
const th = document.querySelectorAll('th');
th.forEach(cell => {
    cell.style.padding = '1em 0';
});
function fetchEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = yield response.json();
            console.log(data);
            const tableBody = document.querySelector('tbody');
            data.forEach((item) => {
                const row = document.createElement('tr');
                row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.firstName}</td>
          <td>${item.email}</td>
		   <td>${item.age}</td> 
		   <td>${item.address}</td> 
		   <td>${item.contactNumber}</td>
          <td>${item.dob}</td>
        `;
                tableBody.appendChild(row);
            });
            // Styling
            const tableCells = document.querySelectorAll('td');
            const tablerow = document.querySelectorAll('tr');
            // Set the padding for each cell
            tableCells.forEach((cell, i) => {
                cell.style.padding = '.8em .2em';
                // i%2===0  ? cell.style.backgroundColor = '#d9dbdb' : "white"
            });
            tablerow.forEach((cell, i) => {
                i % 2 !== 0 ? cell.style.backgroundColor = '#d9dbdb' : "white";
            });
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}
fetchEmployees();
//# sourceMappingURL=index.js.map