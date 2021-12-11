const statisticUrl = "https://covid-193.p.rapidapi.com/statistics";
const countriesUrl = "https://covid-193.p.rapidapi.com/countries";
const historyUrl = "https://covid-193.p.rapidapi.com/history?";
const urlPokemon = "";
const setting = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "76f2a08c48msh9205779de23a327p1e8e22jsnf8ff0d78c340",
  },
};

fetch(statisticUrl, setting)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    insertData();
    // insertBox();
    // console.log(data);
    const dataLength = data.response.length;
    const dataArr = data.response;
    const worldData = dataArr[189];
    const thaiData = dataArr[38];
    const thaiCases = thaiData.cases;
    const worldCases = worldData.cases;
    console.log(dataArr[38]);

    //Graph information
    const name = document.getElementById("name");
    name.innerHTML = "Thailand Information <br><br> ";
    const total = document.getElementById("total");
    total.innerHTML =
      "Total : " +
      new Intl.NumberFormat().format(thaiCases.total) +
      " confirmed.";
    const newCases = document.getElementById("newCases");
    newCases.innerHTML =
      "New : " + new Intl.NumberFormat().format(thaiCases.new) + " cases.";
    const active = document.getElementById("active");
    active.innerHTML =
      "Active : " +
      new Intl.NumberFormat().format(thaiCases.active) +
      " confirmed.";
    const recovered = document.getElementById("recovered");
    recovered.innerHTML =
      "Recovered : " +
      new Intl.NumberFormat().format(thaiCases.recovered) +
      " recovered.";
    const death = document.getElementById("death");
    death.innerHTML =
      "Death : " +
      new Intl.NumberFormat().format(thaiData.deaths.total) +
      " deaths.";

    insertGraph(worldData);
    //World-wide Tracking
    const worldTotal = document.getElementById("world_total");
    worldTotal.innerHTML =
      "Total : " +
      new Intl.NumberFormat().format(worldCases.total) +
      " confirmed.";
    const worldNew = document.getElementById("world_new");
    worldNew.innerHTML =
      "New : " + new Intl.NumberFormat().format(worldCases.new) + " cases.";
    const worldActive = document.getElementById("world_active");
    worldActive.innerHTML =
      "Active : " +
      new Intl.NumberFormat().format(worldCases.active) +
      " confirmed.";
    const worldRecovered = document.getElementById("world_recovered");
    worldRecovered.innerHTML =
      "Recovered : " +
      new Intl.NumberFormat().format(worldCases.recovered) +
      " recovered.";
    const worldDeath = document.getElementById("world_death");
    worldDeath.innerHTML =
      "Death : " +
      new Intl.NumberFormat().format(worldData.deaths.total) +
      " deaths.";
    //Top 6 data
    const usaData = dataArr[3];
    const box1 = document.querySelector("#box1");
    box1.innerHTML =
      "1. USA <br><br> Total : " +
      new Intl.NumberFormat().format(usaData.cases.total) +
      " confirmed. <br>" +
      " <br> New : " +
      new Intl.NumberFormat().format(usaData.cases.new) +
      " cases. <br>" +
      " <br> Active : " +
      new Intl.NumberFormat().format(usaData.cases.active) +
      " confirmed. <br>" +
      " <br> Recovered : " +
      new Intl.NumberFormat().format(usaData.cases.recovered) +
      " recovered. <br>" +
      " <br> Death : " +
      new Intl.NumberFormat().format(usaData.deaths.total) +
      " deaths. ";

    const spainData = dataArr[2];
    const box2 = document.querySelector("#box2");
    box2.innerHTML =
      "2. Spain <br><br> Total : " +
      new Intl.NumberFormat().format(spainData.cases.total) +
      " confirmed. <br>" +
      " <br> New : " +
      new Intl.NumberFormat().format(spainData.cases.new) +
      " cases. <br>" +
      " <br> Active : " +
      new Intl.NumberFormat().format(spainData.cases.active) +
      " confirmed. <br>" +
      " <br> Recovered : " +
      new Intl.NumberFormat().format(spainData.cases.recovered) +
      " recovered. <br>" +
      " <br> Death : " +
      new Intl.NumberFormat().format(spainData.deaths.total) +
      " deaths. ";

    const italyData = dataArr[1];
    const box3 = document.querySelector("#box3");
    box3.innerHTML =
      "3. Italy <br><br> Total : " +
      new Intl.NumberFormat().format(italyData.cases.total) +
      " confirmed. <br>" +
      " <br> New : " +
      new Intl.NumberFormat().format(italyData.cases.new) +
      " cases. <br>" +
      " <br> Active : " +
      new Intl.NumberFormat().format(italyData.cases.active) +
      " confirmed. <br>" +
      " <br> Recovered : " +
      new Intl.NumberFormat().format(italyData.cases.recovered) +
      " recovered. <br>" +
      " <br> Death : " +
      new Intl.NumberFormat().format(italyData.deaths.total) +
      " deaths. ";

    const franceData = dataArr[6];
    const box4 = document.querySelector("#box4");
    box4.innerHTML =
      "4. France <br><br> Total : " +
      new Intl.NumberFormat().format(franceData.cases.total) +
      " confirmed. <br>" +
      " <br> New : " +
      new Intl.NumberFormat().format(franceData.cases.new) +
      " cases. <br>" +
      " <br> Active : " +
      new Intl.NumberFormat().format(franceData.cases.active) +
      " confirmed. <br>" +
      " <br> Recovered : " +
      new Intl.NumberFormat().format(franceData.cases.recovered) +
      " recovered. <br>" +
      " <br> Death : " +
      new Intl.NumberFormat().format(franceData.deaths.total) +
      " deaths. ";

    const germanData = dataArr[4];
    const box5 = document.querySelector("#box5");
    box5.innerHTML =
      "5. German <br><br> Total : " +
      new Intl.NumberFormat().format(germanData.cases.total) +
      " confirmed. <br>" +
      " <br> New : " +
      new Intl.NumberFormat().format(germanData.cases.new) +
      " cases. <br>" +
      " <br> Active : " +
      new Intl.NumberFormat().format(germanData.cases.active) +
      " confirmed. <br>" +
      " <br> Recovered : " +
      new Intl.NumberFormat().format(germanData.cases.recovered) +
      " recovered. <br>" +
      " <br> Death : " +
      new Intl.NumberFormat().format(germanData.deaths.total) +
      " deaths. ";

    const ukData = dataArr[9];
    const box6 = document.querySelector("#box6");
    box6.innerHTML =
      "6. UK <br><br> Total : " +
      new Intl.NumberFormat().format(ukData.cases.total) +
      " confirmed. <br>" +
      " <br> New : " +
      new Intl.NumberFormat().format(ukData.cases.new) +
      " cases. <br>" +
      " <br> Active : " +
      new Intl.NumberFormat().format(ukData.cases.active) +
      " confirmed. <br>" +
      " <br> Recovered : " +
      new Intl.NumberFormat().format(ukData.cases.recovered) +
      " recovered. <br>" +
      " <br> Death : " +
      new Intl.NumberFormat().format(ukData.deaths.total) +
      " deaths. ";
  })
  .catch((e) => {
    console.log(e);
  });

function insertGraph(worldData) {
  const worldCases = worldData.cases;
  const ctx = document.getElementById("my_graph");
  const chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Total", "New", "Active", "Recovered", "Deaths"],
      datasets: [
        {
          label: "statistics",
          data: [
            worldCases.total,
            worldCases.new,
            worldCases.active,
            worldCases.recovered,
            worldData.deaths.total,
          ],
          backgroundColor: [
            "rgb(230, 111, 0)",
            "rgb(218, 165, 32)",
            "rgb(26, 124, 221)",
            "rgb(60, 179, 113)",
            "rgb(255, 0, 0)",
          ],
          hoverBackgroundColor: [
            "rgb(230, 111, 0, 0.7)",
            "rgb(218, 165, 32, 0.7)",
            "rgb(26, 124, 221, 0.7)",
            "rgb(60, 179, 113, 0.7)",
            "rgb(255, 0, 0, 0.7)",
          ],
          borderColor: [
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
}

function insertData() {}

function insertBox() {}

fetch(countriesUrl, setting)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    const dropdown = document.getElementById("dropdown");
    const country = data.response;
    const countryLength = data.response.length;

    // console.log(countryLength);
    for (i in country) {
      // console.log(i);
      const optionList = document.createElement("option");
      optionList.setAttribute("value", country[i]);
      optionList.innerHTML = country[i];
      dropdown.appendChild(optionList);
    }
    // console.log(dropdown[200].value);
    const select = document.getElementById("dropdown");
    select.addEventListener("change", getDropDownVal());
    // console.log(dropdownEle);

    selectChange();
  })
  .catch((e) => {
    console.log(e);
  });

function getDropDownVal() {
  const dropdownVal = document.getElementById("dropdown");
  console.log("testfunction");
}

function selectChange() {
  if (dropdown[0].value !== "opDefault") {
    console.log("test");
  }
}

let dateInput = new Date();
isoDate = dateInput.toISOString();
date = isoDate.slice(0, 10);
// date = '2020-04-05'
country = "usa";
fetchHistory(date, country);
// console.log(date);
function fetchHistory(date, country) {
  // console.log("test");
  const url = historyUrl + "day=" + date + "&country=" + country;
  fetch(url, setting)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      if (country == "") {
      }
      for (let i = 0; i < 7; i++) {
        // console.log(i);
        // console.log("testloop");
      }
    })
    .catch((e) => {
      console.log(e);
    });
}
