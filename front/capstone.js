async function getWeeklyTimetable(from, to) {
  const response = await fetch('http://localhost:8080/weekly-timetable?after=' + from + '&before=' + to);

  var data = await response.json();
  showWeeklyTimetable(data); 
}

function showWeeklyTimetable(data) {
    let s1t2 = '';
    let s1t3 = '';
    let s1t4 = '';
    let s1t5 = '';
    let s1t6 = '';
    let s1t7 = '';
    let s1t8 = '';
    let s2t2 = '';
    let s2t3 = '';
    let s2t4 = '';
    let s2t5 = '';
    let s2t6 = '';
    let s2t7 = '';
    let s2t8 = '';
  for(let r of data) {
    var dayOfWeek = new Date(r.dayOfWeek);
    var d = dayOfWeek.getDay();
    
    if(d == 1 && r.slot === 'slot 1') {
      s1t2 += `${r.username} <br />`;
    } else if(d == 1 && r.slot === 'slot 2') {
      s2t2 += `${r.username} <br />`;
    } else if(d == 2 && r.slot === 'slot 1') {
      s1t3 += `${r.username} <br />`;
    } else if(d == 2 && r.slot === 'slot 2') {
      s2t3 += `${r.username} <br />`;
    } else if(d == 3 && r.slot === 'slot 1') {
      s1t4 += `${r.username} <br />`;
    } else if(d == 3 && r.slot === 'slot 2') {
      s2t4 += `${r.username} <br />`;
    } else if(d == 4 && r.slot === 'slot 1') {
      s1t5 += `${r.username} <br />`;
    } else if(d == 4 && r.slot === 'slot 2') {
      s2t5 += `${r.username} <br />`;
    } else if(d == 5 && r.slot === 'slot 1') {
      s1t6 += `${r.username} <br />`;
    } else if(d == 5 && r.slot === 'slot 2') {
      s2t6 += `${r.username} <br />`;
    } else if(d == 6 && r.slot === 'slot 1') {
      s1t7 += `${r.username} <br />`;
    } else if(d == 6 && r.slot === 'slot 2') {
      s2t7 += `${r.username} <br />`;
    } else if(d == 0 && r.slot === 'slot 1') {
      s1t8 += `${r.username} <br />`;
    } else if(d == 0 && r.slot === 'slot 2') {
      s2t8 += `${r.username} <br />`;
    }
  }
  document.getElementById('s1t2').innerHTML = s1t2;
  document.getElementById('s1t3').innerHTML = s1t3;
  document.getElementById('s1t4').innerHTML = s1t4;
  document.getElementById('s1t5').innerHTML = s1t5;
  document.getElementById('s1t6').innerHTML = s1t6;
  document.getElementById('s1t7').innerHTML = s1t7;
  document.getElementById('s1t8').innerHTML = s1t8;
  document.getElementById('s2t2').innerHTML = s2t2;
  document.getElementById('s2t3').innerHTML = s2t3;
  document.getElementById('s2t4').innerHTML = s2t4;
  document.getElementById('s2t5').innerHTML = s2t5;
  document.getElementById('s2t6').innerHTML = s2t6;
  document.getElementById('s2t7').innerHTML = s2t7;
  document.getElementById('s2t8').innerHTML = s2t8;
}
// -----------------------------------------------------------------------------------
async function getWeek() {
  const response = await fetch('http://localhost:8080/week');
  var data = await response.json();
  showWeek(data); 
}

//display week in combobox
function showWeek(data) {
  let tab = '';
  for(let r of data) {
    var from = r.from.split('-');
    var fromD = from[2] + '/' + from[1] + '/' + from[0];

    var to = r.to.split('-');
    var toD = to[2] + '/' + to[1] + '/' + to[0];

    tab += 
    `
      <option value='${r.from}/${r.to}'>${fromD} - ${toD}</option>
    `;
  }
  document.getElementById('week').innerHTML = tab;
}
getWeek();

//get select on change
function getSelected() {
  var selectedValue = document.getElementById('week').value;
  console.log(selectedValue);
  var splitDate = selectedValue.split('/');
  var from = splitDate[0];
  var to = splitDate[1];
  console.log(from);
  console.log(to);
  getWeeklyTimetable(from, to);
  //getWeekFromTo(from, to);
}

//format Date
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

//loop foreach week
// async function getWeekFromTo(from, to) {
//   const response = await fetch('http://localhost:8080/list-week?from=' + from + '&to=' + to);
//   var data = await response.json();
//   return data;
// }

// ----------------------------------------------------------------------------------------
