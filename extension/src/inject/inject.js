function etTimeToMsc(time){
	if(time=='BMO'){
		return 'до открытия';
	}
	if(time=='AMC'){
		return 'после открытия';
	}
	var hours = Number(time.match(/^(\d+)/)[1]);
	var minutes = Number(time.match(/:(\d+)/)[1]);
	var AMPM = time.match(/\s(.*)\s/)[1];
	if(AMPM == "PM" && hours<12) hours = hours+12;
	if(AMPM == "AM" && hours==12) hours = hours-12;
	hours=(hours+7)%24
	var sHours = hours.toString();
	var sMinutes = minutes.toString();
	if(hours<10) sHours = "0" + sHours;
	if(minutes<10) sMinutes = "0" + sMinutes;
	return sHours + ":" + sMinutes+" МСК";
}

function updateTime(){
	setTimeout(function(){
	document.querySelectorAll("div.time:not(.updated), div#earningstime:not(.updated)").forEach(function(element, index){
		element.classList.add('updated')
		element.textContent=element.textContent+" ("+etTimeToMsc(element.textContent)+")"
	})
	updateTime();
	}, 500);
}

function getGraphUrl(ticker){
	return "https://finviz.com/chart.ashx?t="+ticker+"&ty=c&ta=1&p=d&s=l";
}

style_arr=[
	'@media only screen and (min-width: 62em) {.listview .estimate {left: 425px;} .listview .time {left: 285px;}}',
	'@media only screen and (min-width: 48em) {.listview .estimate {left: 400px;} .listview .time {left: 270px;}}',
	'div#graph_block {position:fixed;border: 3px solid black;top: 554px;left: 204px;z-index: 1;}',
	'.unselectedoptions { width: auto !important}'
];

window.onload=function(){
	style_arr.forEach(function(style){
		document.body.insertAdjacentHTML("afterbegin","<style>"+style+"</style>")	
	})
	
	updateTime();

	document.body.insertAdjacentHTML("afterbegin","<div id='graph_block' style='display: none'><img src></div>");
	graph_block=document.querySelector("div#graph_block")
	img_block=document.querySelector("div#graph_block img")

	document.onmouseover=function(e){
		var e = e || window.event, el = e.target || el.srcElement;
		if(el.tagName=='DIV' && el.classList[0]=='ticker'){
			url=getGraphUrl(el.textContent)
			img_block.src=url
			graph_block.style.display='block'
			graph_block.style.top=(e.screenY-100)+"px"
			graph_block.style.left=(e.screenX+50)+"px"
		}
	};

	document.onmouseout=function(e){
		var e = e || window.event, el = e.target || el.srcElement;
		graph_block.style.display='none'
	};


}


