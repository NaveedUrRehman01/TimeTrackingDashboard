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

document.getElementById("weekly").addEventListener("click", displayWeeklyData);
document.getElementById('weekly').style.color = 'white';

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

    document.getElementById('weekly').style.color = 'white';
    document.getElementById('daily').style.color = 'gray';
    document.getElementById('monthly').style.color = 'gray';
})
}
document.getElementById("daily").addEventListener("click", displayDailyData);

function displayDailyData() {
 fetch("data.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    console.log(data[0].timeframes.daily.current)
    document.getElementById('status').innerHTML = data[0].title;
    document.getElementById('wh1').innerHTML = data[0].timeframes.daily.current + "hrs";
    document.getElementById('wp1').innerHTML = + data[0].timeframes.daily.previous + "hrs";
    document.getElementById('pstatus').innerHTML = data[1].title;
    document.getElementById('ph1').innerHTML = data[1].timeframes.daily.current + "hrs";
    document.getElementById('pp1').innerHTML = + data[1].timeframes.daily.previous + "hrs";
    document.getElementById('sstatus').innerHTML = data[2].title;
    document.getElementById('sh1').innerHTML = data[2].timeframes.daily.current + "hrs";
    document.getElementById('sp1').innerHTML = + data[2].timeframes.daily.previous + "hrs";
    document.getElementById('estatus').innerHTML = data[3].title;
    document.getElementById('eh1').innerHTML = data[3].timeframes.daily.current + "hrs";
    document.getElementById('ep1').innerHTML = + data[3].timeframes.daily.previous + "hrs";
    document.getElementById('sostatus').innerHTML = data[4].title;
    document.getElementById('soh1').innerHTML = data[4].timeframes.daily.current + "hrs";
    document.getElementById('sop1').innerHTML = + data[4].timeframes.daily.previous + "hrs";
    document.getElementById('scstatus').innerHTML = data[5].title;
    document.getElementById('sch1').innerHTML = data[5].timeframes.daily.current + "hrs";
    document.getElementById('scp1').innerHTML = + data[5].timeframes.daily.previous + "hrs";

    document.getElementById('daily').style.color = 'white';
    document.getElementById('weekly').style.color = 'gray';
    document.getElementById('monthly').style.color = 'gray';
})
}
document.getElementById("monthly").addEventListener("click", displayMonthlyData);

function displayMonthlyData() {
 fetch("data.json")
.then(response => response.json())
.then(data =>{
    console.log(data)
    console.log(data[0].timeframes.monthly.current)
    document.getElementById('status').innerHTML = data[0].title;
    document.getElementById('wh1').innerHTML = data[0].timeframes.monthly.current + "hrs";
    document.getElementById('wp1').innerHTML = + data[0].timeframes.monthly.previous + "hrs";
    document.getElementById('pstatus').innerHTML = data[1].title;
    document.getElementById('ph1').innerHTML = data[1].timeframes.monthly.current + "hrs";
    document.getElementById('pp1').innerHTML = + data[1].timeframes.monthly.previous + "hrs";
    document.getElementById('sstatus').innerHTML = data[2].title;
    document.getElementById('sh1').innerHTML = data[2].timeframes.monthly.current + "hrs";
    document.getElementById('sp1').innerHTML = + data[2].timeframes.monthly.previous + "hrs";
    document.getElementById('estatus').innerHTML = data[3].title;
    document.getElementById('eh1').innerHTML = data[3].timeframes.monthly.current + "hrs";
    document.getElementById('ep1').innerHTML = + data[3].timeframes.monthly.previous + "hrs";
    document.getElementById('sostatus').innerHTML = data[4].title;
    document.getElementById('soh1').innerHTML = data[4].timeframes.monthly.current + "hrs";
    document.getElementById('sop1').innerHTML = + data[4].timeframes.monthly.previous + "hrs";
    document.getElementById('scstatus').innerHTML = data[5].title;
    document.getElementById('sch1').innerHTML = data[5].timeframes.monthly.current + "hrs";
    document.getElementById('scp1').innerHTML = + data[5].timeframes.monthly.previous + "hrs";

    document.getElementById('daily').style.color = 'gray';
    document.getElementById('weekly').style.color = 'gray';
    document.getElementById('monthly').style.color = 'white';
})
}