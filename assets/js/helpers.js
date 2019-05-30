
var day_global = 0;
var week_global = 0;
function handleDay(week, day) {
    day_global = day;
    week_global = week;
    
    var modal_body = document.getElementById("modal_id");
    modal_body.innerHTML = "<p>Monday text</p>";
    modal_body.innerHTML += "<p>- yup, still a monday</p>";
}

function handleWorkoutSuccess() {
    console.log(document.getElementById("description_body").children[week_global - 1].children[day_global].children[0].children[0].style.opacity="1.0");
}

function handleWorkoutFail() {
    console.log(document.getElementById("description_body").children[week_global - 1].children[day_global].children[0].children[0].style.opacity="0.1");
}

function handleFoodHTML() {
    handleGetUser("Food");
}

function handleCountriesToDo() {
    // var table = document.getElementById("description_table");
    // var row = table.insertRow(0);
    // row.className = "info";
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // cell1.innerHTML = "Dish".bold();
    // cell2.innerHTML = "description";

    handleGetUser("countriesToDo");
}

function handleCountriesInProgress() {
    handleGetUser("countriesInProgress");
}

function handleCountriesDone() {
    handleGetUser("countriesDone");
}


function handleGetUser(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    switch(url) {
    case "countriesToDo":
		xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		var response = xhr.responseText;

		var parsed = response.split("\n");
		var table = document.getElementById("to_do_table");
		var table_body = document.getElementById("to_do_table_body");

		var count = 1;
		
		for(i = 0; i < parsed.length; i++) {
		    if(parsed[i] == "") continue;
		    if(typeof table_body.children[i] == "undefined") {
			table_body.insertRow(i);
		    }

		    table_body.children[i].innerHTML = "<td>" + count +  "</td><td><button class=\"btn-link\">" + parsed[i] + "</button></td>";
		    
		    // var row = table_body.insertRow(i);
		    // var cell_1 = row.insertCell(0);
		    // var cell_2 = row.insertCell(1);
		    
		    // var btn = document.createElement("BUTTON");
 		    //var text = document.createTextNode(parsed[i]);
		    // btn.appendChild(text);
		    // btn.className = "btn-link";
		    
		    // btn.addEventListener("click", function() {
		    // 	handlePostUser("set_map", this.innerHTML);
		    // });
		    
		    // map_name.appendChild(btn);
		    // cell_1.innerHTML = count;
		    // cell_2.innerHTML = parsed[i];
		    count ++;
		}
	    }
	};	
	break;
    case "countriesInProgress":
		xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		var response = xhr.responseText;

		var parsed = response.split("\n");
		var table = document.getElementById("in_progress_table");
		//var table_body = document.createElement('tbody');
		var table_body = document.getElementById("in_progress_table_body");

		var count = 1;

		for(i = 0; i < parsed.length; i++) {
		    if(parsed[i] == "") continue;
		    if(typeof table_body.children[i] == "undefined") {
			table_body.insertRow(i);
		    }

		    table_body.children[i].innerHTML = "<td>" + count +  "</td><td><button class=\"btn-link\" onclick=\"handleCountry()\">" + parsed[i] + "</button></td>";
		    
		    // var cell_1 = row.insertCell(0);
		    // var cell_2 = row.insertCell(1);
		    
		    // var btn = document.createElement("BUTTON");
 		    // var text = document.createTextNode(parsed[i]);
		    // btn.appendChild(text);
		    // btn.className = "btn-link";
		    
		    // btn.addEventListener("click", function() {
		    // 	handlePostUser("set_map", this.innerHTML);
		    // });
		    
		    // cell_2.appendChild(btn);
		    // cell_1.innerHTML = count;
		    count ++;
		}
	    }
	};	
	break;	
    case "countriesDone":
	xhr.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
		var response = xhr.responseText;

		var parsed = response.split("\n");
		var table = document.getElementById("done_table");
		var table_body = document.getElementById("done_table_body");

		var count = 1;
		
		for(i = 0; i < parsed.length; i++) {
		    if(parsed[i] == "") continue;
		    if(typeof table_body.children[i] == "undefined") {
			table_body.insertRow(i);
		    }

		    table_body.children[i].innerHTML = "<td>" + count +  "</td><td><button class=\"btn-link\">" + parsed[i] + "</button></td>";
		    
		    // var row = table_body.insertRow(i);
		    // var cell_1 = row.insertCell(0);
		    // var cell_2 = row.insertCell(1);
		    
		    // var btn = document.createElement("BUTTON");
 		    // var text = document.createTextNode(parsed[i]);
		    // btn.appendChild(text);
		    // btn.className = "btn-link";
		    
		    // btn.addEventListener("click", function() {
		    // 	handlePostUser("set_map", this.innerHTML);
		    // });
		    
		    // cell_2.appendChild(btn);
		    // cell_1.innerHTML = count;
		    count ++;
		}
	    }
	};	
	break;

    default:
	break;
    }
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [{
            label: 'Ex 1',
	    lineTension: 0,
            backgroundColor: 'rgba(50, 255, 103, 0.3)',
            borderColor: 'rgb(0, 0, 0)',
            data: [225, 225, 230, 245, 245, 255]
        }, {
            label: 'Ex 2',
	    lineTension: 0,
            backgroundColor: 'rgba(255, 50, 103, 0.3)',
            borderColor: 'rgb(0, 0, 0)',
            data: [225, 234, 230, 265, 276, 276]
	}, {
            label: 'Ex 3',
	    lineTension: 0,
            backgroundColor: 'rgba(50, 100, 255, 0.3)',
            borderColor: 'rgb(0, 0, 0)',
            data: [100, 115, 120, 120, 122, 130]
	}]
    },

    // Configuration options go here
    options: {
	title: {
	    display: true,
	    text: 'Chart Title',
	    fontSize: 24
	}
    }
});


function addData(chart_in, label, data) {
    chart_in.data.labels.push(label);
    for(i = 0; i < data.length; i++) {
	chart_in.data.datasets[i].data.push(data[i]);
    }
    chart_in.update();
}

addData(chart, 'Week 7', [120, 110, 100]);
