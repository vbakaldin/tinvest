function etTimeToMsc(time){
	console.log(time)
if(time=='BMO'){
	return 'до открытия';
}
if(time=='AMC'){
	return 'после открытия';
}
var hours = Number(time.match(/^(\d+)/)[1]);
var minutes = Number(time.match(/:(\d+)/)[1]);
var AMPM = time.match(/\s(.*)$/)[1];
if(AMPM == "PM" && hours<12) hours = hours+12;
if(AMPM == "AM" && hours==12) hours = hours-12;
hours=hours+7
var sHours = hours.toString();
var sMinutes = minutes.toString();
if(hours<10) sHours = "0" + sHours;
if(minutes<10) sMinutes = "0" + sMinutes;
return sHours + ":" + sMinutes+" МСК";
}




function updateTime(){
	document.querySelectorAll("div.time:not(.updated)").forEach(function(element, index){
	element.classList.add('updated')
element.textContent=element.textContent+"("+etTimeToMsc(element.textContent)+")"
})

}

window.onload=function(){
	document.body.insertAdjacentHTML("afterbegin","<style>@media only screen and (min-width: 62em) {.listview .estimate {left: 425px;} .listview .time {left: 285px;}}</style>")
	updateTime()
	
}