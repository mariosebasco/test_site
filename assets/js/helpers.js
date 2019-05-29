
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

// **************************************************
// var chrt = document.getElementById("mycanvas").getContext("2d");
// var myarr = [65, 59, 80, 81, 56, 55, 40];
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"], //x-axis
//     datasets: [
//         {
//             label: "My First dataset", //optional
//             fillColor: "rgba(220,220,220,0.8)",
//             strokeColor: "rgba(220,220,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: [65, 59, 80, 81, 56, 55, 40] // y-axis
//         },
// 		{
//             label: "My Second dataset", //optional
//             fillColor: "rgba(220,120,220,0.8)",
//             strokeColor: "rgba(220,120,220,0.8)",
//             highlightFill: "rgba(220,220,220,0.75)",
//             highlightStroke: "rgba(220,220,220,1)",
//             data: myarr
//         }
//     ]
// };

// var myFirstChart = new Chart(chrt).Bar(data);
