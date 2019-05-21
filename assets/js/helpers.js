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
