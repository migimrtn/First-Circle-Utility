document.addEventListener('DOMContentLoaded', () => {
    fetchActivities();

    document.getElementById('json').addEventListener('click', downloadJSON);
    document.getElementById('csv').addEventListener('click', downloadCSV);
    document.getElementById('console').addEventListener('click', printToConsole);
});

async function fetchActivities() {
    const tableBody = document.getElementById('boredapitable').querySelector('tbody');
    tableBody.innerHTML = '';

    const requests = [];
    for(let i = 0; i < 15; i++) {
        requests.push(fetch('http://localhost:3000/api/random').then(response => response.json()));
    }

    try {
        const results = await Promise.all(requests);
        console.log(results); 
        results.forEach(activity => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = activity.activity || 'N/A';
            row.insertCell(1).textContent = activity.availability || 'N/A';
            row.insertCell(2).textContent = activity.type || 'N/A';
            row.insertCell(3).textContent = activity.participants || 'N/A';
            row.insertCell(4).textContent = activity.price || 'N/A';
            row.insertCell(5).textContent = activity.accessibility || 'N/A';
            row.insertCell(6).textContent = activity.duration || 'N/A';
            row.insertCell(7).textContent = activity.kidFriendly || 'N/A';
            row.insertCell(8).textContent = activity.link ? activity.link : 'N/A';
            row.insertCell(9).textContent = activity.key || 'N/A';
        });
    } catch (error) {
        console.error('Error fetching activities: ', error);
    }
}


function downloadJSON() {
    const data = getTableData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'boredapi.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadCSV() {
    const data = getTableData();
    const csv = convertToCSV(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'boredapi.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function printToConsole() {
    const data = getTableData();
    console.log(data);
}

function getTableData() {
    const table = document.getElementById('boredapitable');
    const rows = table.querySelectorAll('tbody tr');
    const data = Array.from(rows).map(row => {
        const cells = row.querySelectorAll('td');
        return {
            activity: cells[0].textContent,
            availability: cells[1].textContent,
            type: cells[2].textContent,
            participants: cells[3].textContent,
            price: cells[4].textContent,
            accessibility: cells[5].textContent,
            duration: cells[6].textContent,
            kidFriendly: cells[7].textContent,
            link: cells[8].textContent,
            key: cells[9].textContent
        };
    });
    return data;
}

function convertToCSV(data) {
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map(obj => Object.values(obj).map(value => `"${value}"`).join(',')).join('\n');
    return header + rows;
}