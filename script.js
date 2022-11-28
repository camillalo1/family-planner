//Model 


//View

let planTable = document.getElementById('app');
updateView();

function updateView(){
    let html= /*HTML*/ `
        <h3> Family Planner </h3>
        <h1> Lopes-Garberg </h1>

        <tr>
            <th> Mandag </th>
            <th> Tirsdag </th>
            <th> Onsdag </th>
            <th> Torsdag </th>
            <th> Fredag </th>
            <th> Lørdag </th>
            <th> Søndag </th>
        </tr>;

        for (let i = 0; i < tasks.length; i++) {
            html += createHtmlRow (i);
        }
    `
    planTable.innerHTML = html;
}

//Controller