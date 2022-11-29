//Model 

let tasks = [
    {description: 'Handle til middag', isDone: false},
    {description: 'Lage middag', isDone: false},
    {description: 'Spise middag', isDone: false},
];

let taskDescriptionInput = document.getElementById('taskDescription');

//View

let planTable = document.getElementById('app');
updateView();

function updateView(){
    let html= /*HTML*/ `
        <h3> Family Planner </h3>
        <h1> Lopes-Garberg </h1>

        <tr>
            <th style = "visbility: collapse"></th>
            <th> Mandag </th>
            <th> Tirsdag </th>
            <th> Onsdag </th>
            <th> Torsdag </th>
            <th> Fredag </th>
            <th> Lørdag </th>
            <th> Søndag </th>
        </tr>
        <tr>
            <th> Arnstein </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th> Camilla </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th> Olivia </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th> Marve </th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <br/>
            
            
            <div>
                <p> Ting som må gjøres i løpet av uka: </p>
                <input id = "taskDescription" type = "text" />
                <button onclick = "addTask()"> Legg til oppgave </button>
            </div>

            <div>
                <p> Viktige datoer: </p>
                <input id = "importantDate" type = "text" />
                <button onclick = "addDate()"> Legg til dato </button>
            </div>
            `;

    planTable.innerHTML = html;
}

//Controller
