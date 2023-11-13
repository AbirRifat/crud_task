function insertData() {
    var id = document.getElementById("idField").value;
    var name = document.getElementById("nameField").value;

    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'id=' + id + '&name=' + name + '&insert=1',
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}
function updateData() {
    var id = document.getElementById("idField").value;
    var name = document.getElementById("nameField").value;

    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'id=' + id + '&name=' + name + '&update=1',
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}
function deleteData() {
    var id = document.getElementById("idField").value;

    fetch('backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'id=' + id + '&delete=1',
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}

function fetchData() {
    fetch('backend.php?fetch=1')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

function displayData(data) {
    var dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = "";

    if (data.length > 0) {
        var table = "<table border='1'><tr><th>ID</th><th>Name</th></tr>";
        data.forEach(row => {
            table += `<tr><td>${row.id}</td><td>${row.name}</td></tr>`;
        });
        table += "</table>";
        dataTable.innerHTML = table;
    } else {
        dataTable.innerHTML = "No data found.";
    }
}
fetchData();
