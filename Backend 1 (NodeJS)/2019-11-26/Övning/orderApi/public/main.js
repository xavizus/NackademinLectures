$(main);


function main() {
    let url = "http://localhost:3000/api/v1";

    fetch(url)
        .then(response => response.json())
        .then(data => loadTable(data));

}

function loadTable(data) {
    let customers = data.customers;
    customers.map(customer => {
        let tableRow = `
        <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.company}</td>
            <td>${customer.city}</td>
            <td>${customer.orders.length}</td>
        </tr>
        `;
        $('#tableBody').append(tableRow);
    });
}