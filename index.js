// fetch("data.json")
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
//     console.log(data[0].timeframes.weekly.current)
//     document.getElementById('status').innerHTML = data[0].title;
//     document.getElementById('wh1').innerHTML = data[0].timeframes.weekly.current + "hrs";
//     document.getElementById('wp1').innerHTML = + data[0].timeframes.weekly.previous + "hrs";
//     document.getElementById('pstatus').innerHTML = data[1].title;
//     document.getElementById('ph1').innerHTML = data[1].timeframes.weekly.current + "hrs";
//     document.getElementById('pp1').innerHTML = + data[1].timeframes.weekly.previous + "hrs";
//     document.getElementById('sstatus').innerHTML = data[2].title;
//     document.getElementById('sh1').innerHTML = data[2].timeframes.weekly.current + "hrs";
//     document.getElementById('sp1').innerHTML = + data[2].timeframes.weekly.previous + "hrs";
//     document.getElementById('estatus').innerHTML = data[3].title;
//     document.getElementById('eh1').innerHTML = data[3].timeframes.weekly.current + "hrs";
//     document.getElementById('ep1').innerHTML = + data[3].timeframes.weekly.previous + "hrs";
//     document.getElementById('sostatus').innerHTML = data[4].title;
//     document.getElementById('soh1').innerHTML = data[4].timeframes.weekly.current + "hrs";
//     document.getElementById('sop1').innerHTML = + data[4].timeframes.weekly.previous + "hrs";
//     document.getElementById('scstatus').innerHTML = data[5].title;
//     document.getElementById('sch1').innerHTML = data[5].timeframes.weekly.current + "hrs";
//     document.getElementById('scp1').innerHTML = + data[5].timeframes.weekly.previous + "hrs";
// })

document.getElementById("weekly").addEventListener("click", displayWeeklyData);

function displayWeeklyData() {
 fetch("data.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    console.log(data[0].timeframes.weekly.current)
    document.getElementById('status').innerHTML = data[0].title;
    document.getElementById('wh1').innerHTML = data[0].timeframes.weekly.current + "hrs";
    document.getElementById('wp1').innerHTML = + data[0].timeframes.weekly.previous + "hrs";
    document.getElementById('pstatus').innerHTML = data[1].title;
    document.getElementById('ph1').innerHTML = data[1].timeframes.weekly.current + "hrs";
    document.getElementById('pp1').innerHTML = + data[1].timeframes.weekly.previous + "hrs";
    document.getElementById('sstatus').innerHTML = data[2].title;
    document.getElementById('sh1').innerHTML = data[2].timeframes.weekly.current + "hrs";
    document.getElementById('sp1').innerHTML = + data[2].timeframes.weekly.previous + "hrs";
    document.getElementById('estatus').innerHTML = data[3].title;
    document.getElementById('eh1').innerHTML = data[3].timeframes.weekly.current + "hrs";
    document.getElementById('ep1').innerHTML = + data[3].timeframes.weekly.previous + "hrs";
    document.getElementById('sostatus').innerHTML = data[4].title;
    document.getElementById('soh1').innerHTML = data[4].timeframes.weekly.current + "hrs";
    document.getElementById('sop1').innerHTML = + data[4].timeframes.weekly.previous + "hrs";
    document.getElementById('scstatus').innerHTML = data[5].title;
    document.getElementById('sch1').innerHTML = data[5].timeframes.weekly.current + "hrs";
    document.getElementById('scp1').innerHTML = + data[5].timeframes.weekly.previous + "hrs";
})
}