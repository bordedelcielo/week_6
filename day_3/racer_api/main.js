// form, getData, DOM_Elements, create_list, loadData

// Get Data
const getData = async (season, round) => {
    let response = await axios.get(
        `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`
    )
    console.log(response.data)
    return response.data
}

const driverTable = document.querySelector("driverTable")
let driverTableBody = document.querySelector("#driverTableBody")
console.log(driverTableBody)

function addDriverRow(pos, name, nation, sponsor, points, page, sponsorPage){
    let html = `<tr><td>${pos}</td>
    <td><a href=${page} target="_blank" rel="noopener noreferrer">${name}</a></td>
    <td>${nation}</td><td><a href=${sponsorPage} target="_blank" rel="noopener noreferrer">${sponsor}</td>
    <td>${points}</td></tr>`
    driverTableBody.innerHTML += html;
}

function hideDriverTable(){
    driverTable.getElementsByClassName.display = 'none'
    alert("Invalid Query")
}

const form = document.querySelector('#raceDataForm')

form.addEventListener('submit', async ( event ) => {
    event.preventDefault();
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    try{
        let f1data = await getData(season, round);
        console.log("retrieved:", f1data);
        console.log("test");
        top7drivers = f1data.MRData.StandingsTable.StandingsLists[0].DriverStandings.slice(0, 7)
        
            top7drivers.forEach( driver =>{
                addDriverRow(driver.position, `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                driver.Driver.nationality,
                driver.Constructors[0].name,
                driver.points,
                driver.Driver.url,
                driver.Constructors[0].url)
            })
    } catch{
        hideDriverTable();
    }
})


// Original code attempts:

// // Create Constants to hold DOM Elements
// const DOM_Elements = {
//     racers: ".racer-list"
// }

// // Creation of Racer List HTML
// const create_list = (position, familyName) => {
//     const html = `<a href = '#' class = list-group-item 
//     list-group-item-action list-group-item-light" id="${position}"> ${familyName}</a>`;

//     // Access Document to "paste" content
//     document
//     .querySelector(DOM_Elements.racers)
//     .insertAdjacentHTML("beforeend", html)
// }

// // Function to Load Data and Display HTML

// const loadData = async () => {
//     const racerList = await getData();

//     racerList.forEach((element) => 
//     create_list(element.MRData.StandingsTable.StandingsLists[0].
//         DriverStandings[0].position, element.MRData.StandingsTable.
//         StandingsLists[0].DriverStandings[0].Driver.givenName));
// }

// // const clearData = () => {
// //     document.querySelector(DOM_Elements.racers).innerHTML = "";
// // }

// // document.querySelector(DOM_Element.racers).innerHTML =''



// // // Creating variable for form
// // const form = document.querySelector('#testDataForm')
// // console.log(form)

// // // Adding Event Listener for Submission of Form
// // form.addEventListener('submit', ( event ) => {
// //     event.preventDefault();
// //     let query_year = document.querySelector('#year')
// //     let query_month = document.querySelector('#month')
// //     console.log(query_year)
// //     console.log(query_month)
// //     console.log(event)
// //     let query_year = event.path[0][0].value
// //     let query_month = event.path[0][1].value

// // })

// // // 0,7 with .slice when you getData