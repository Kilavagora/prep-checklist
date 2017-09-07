		
var cpTeam = {};
var clientList = {};
var currentClient = {};
var cpTeam = {};
var currentInput = "";
var colorList = {};
var googleFonts = {}
var clientFonts = [];


function toJSON(form){
	var array = jQuery(form).serializeArray();
	var json = {};
	
	jQuery.each(array, function() {
		json[this.name] = this.value || '';
	});
	
	return json;
}

function submitForm() {
	let currentId = $('#id').val();
	if (parseInt(currentId) > 0) {
		updateClient(currentId);
		alert("Client was updated!")
	}
	else {
		saveClient(toJSON($('#handoffForm')));
	}	
}
	
	
function saveClient(clientData) {
	let newClient = clientData;
	let oReq = new XMLHttpRequest();
	oReq.open("POST", "api/clients");
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		let clientsArray = JSON.parse(this.responseText);
		alert('Your record has been saved.')
		currentClient = newClient;
	}
	let payload = JSON.stringify(newClient);
	oReq.send(payload);
}
		
function loadClients() {
	let oReq = new XMLHttpRequest();
	oReq.open("GET", "/api/clients");
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		let clientsArray = JSON.parse(this.responseText);
		$('#clients').html("<tr><th onclick='sortTable(0)'>Client</th><th onclick='sortTable(0)'>Last Updated</th><th onclick='sortTable(0)'>ID</th></tr>");
		for (let i=0; i<clientsArray.length; i++) {
			listClients(clientsArray[i]);
		clientList = clientsArray;
		}	
	}
	oReq.send();
	
}

function listClients(c) {
	date = new Date(c.createDate);
	year = date.getFullYear();
	month = date.getMonth()+1;
	dt = date.getDate();
	
	if (dt < 10) {
	  dt = '0' + dt;
	}
	if (month < 10) {
	  month = '0' + month;
	}
	
	let dateCreated = (month + '-' + dt + '-' + year);
				
	
	$('#clients').append("<tr><td>" + c.clientName + "</td>" + "<td>" + c.lastUpdated + "</td>" + "<td class='id'>" + c._id + "</td></tr>");
}
		
function loadClient() {
	let id = $('#clients tr.active td.id')[0].innerHTML;
	loadClientForm(id);
}

function loadClientForm(e) {
	let oReq = new XMLHttpRequest();
	oReq.open("GET", "/api/clients/"+e);
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		let clientsArray = JSON.parse(this.responseText);
		for(var id in clientsArray) {
			$('input#' + id).val( clientsArray[id] );
			$('textarea#' + id).val( clientsArray[id] );
			$('input[type=checkbox]#' + id).attr( "checked", clientsArray[id]);
			$('select#' + id).val(clientsArray[id] );
			$('#id').val(clientsArray._id);
		}
		clientFonts = [];
		if (clientsArray.font1 != "Choose...") {clientFonts.push(clientsArray.font1);WebFont.load({google: {families: [clientsArray.font1]}});}
		if (clientsArray.font2 != "Choose...") {clientFonts.push(clientsArray.font2);WebFont.load({google: {families: [clientsArray.font2]}});}
		if (clientsArray.font3 != "Choose...") {clientFonts.push(clientsArray.font3);WebFont.load({google: {families: [clientsArray.font3]}});}
		if (clientsArray.font4 != "Choose...") {clientFonts.push(clientsArray.font4);WebFont.load({google: {families: [clientsArray.font4]}});}
		if (clientsArray.font5 != "Choose...") {clientFonts.push(clientsArray.font5);WebFont.load({google: {families: [clientsArray.font5]}});}
		if (clientsArray.font6 != "Choose...") {clientFonts.push(clientsArray.font6);WebFont.load({google: {families: [clientsArray.font6]}});}
		currentClient = clientsArray;
	}
   oReq.send();
}

function updateClient(id) {
            let oReq = new XMLHttpRequest();
            oReq.open("PUT", "/api/clients/"+id);
            oReq.setRequestHeader("Content-Type","application/json");
            oReq.onload = function() {}
          let clientUpdate = toJSON($('#handoffForm'));
          let payload = JSON.stringify(clientUpdate);
          oReq.send(payload);
        }

function deleteClient() {
	if (confirm("Are you sure you want to delete this record? This action cannot be undone.") == true) {
	let id = $('#clients tr.active td.id')[0].innerHTML;
	let oReq = new XMLHttpRequest();
		oReq.open("DELETE", "/api/clients/"+ id);
		oReq.setRequestHeader("Content-Type","application/json");
		oReq.onload = function() {
	}
	oReq.send();
	loadClients();
	}
}

function loadTeam() {
	let oReq = new XMLHttpRequest();
	oReq.open("GET", "/api/team");
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		let teamArray = JSON.parse(this.responseText);
		$('#team').html("<tr><th onclick='sortTable(0)'>Name</th><th onclick='sortTable(0)'>Role</th><th onclick='sortTable(0)'>E-mail</th><th onclick='sortTable(0)'>ID</th></tr>");
		for (let i=0; i<teamArray.length; i++) {
			listTeam(teamArray[i]);
			cpTeam = teamArray;
		}
		
	}
	oReq.send();
}

function listTeam(c) {
	date = new Date(c.createDate);
	year = date.getFullYear();
	month = date.getMonth()+1;
	dt = date.getDate();
	
	if (dt < 10) {
	  dt = '0' + dt;
	}
	if (month < 10) {
	  month = '0' + month;
	}
	let dateCreated = (month + '-' + dt + '-' + year);
	$('#team').append("<tr><td class='name'>" + c.name + "</td>" + "<td>" + c.role + "</td>" + "<td class='email'>" + c.email + "</td><td class='id'>" + c._id + "</td></tr>");
}

function addTeam(clientData) {
	let newMemberName = prompt("Full name: ");
	let newMemberRole = prompt("Team role:");
	let newMemberEmail = prompt("CivicPlus E-mail Address: ");
	
	let oReq = new XMLHttpRequest();
	oReq.open("POST", "api/team");
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		loadTeam();
	}
	let teamMember = {name: newMemberName, role:newMemberRole, email:newMemberEmail};
	let payload = JSON.stringify(teamMember);
	oReq.send(payload);
}

function chooseTeam(e) {
	let name = $('#team tr.active td.name')[0].innerHTML;
	let email = $('#team tr.active td.email')[0].innerHTML;
	currentInput.value = name + ' <' + email + '>';
}
		
function deleteTeam() {
	if (confirm("Are you sure you want to delete this team member? This action cannot be undone.") == true) {
	let id = $('#team tr.active td.id')[0].innerHTML;
	let oReq = new XMLHttpRequest();
		oReq.open("DELETE", "/api/team/"+ id);
		oReq.setRequestHeader("Content-Type","application/json");
		oReq.onload = function() {
	}
	oReq.send();
	loadTeam();
	}
}

function saveClientPDF() {
			$('body').append("<script src='js/jspdf.min.js'></script>");
			
            var imgData = 'data:image/png;base64,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';
            
            //create new PDF object
            var doc = new jsPDF({
                        orientation: 'portrait',
                        unit: 'in',
                        format: [8, 11]
            });
            
            //Load client fonts
			for (let i = 0;  i<clientFonts.length; i++) {
			doc.addFont(clientFonts[i],clientFonts[i],"normal");
			}
			
			
            //Assemble PDF
            doc.addImage(imgData, 'PNG', 1, 1, .25, .195);
			doc.setFont("Helvetica");
            doc.setFontSize(16);
            doc.text(String(currentClient.clientName), 1.4, 1.14);
			//doc.text("St-City", 3, 1.14);
            doc.setFontSize(8);
			doc.setFont(clientFonts[0]);
            doc.text("Font 1:" + String(clientFonts[0]), 1, 4.2);
			doc.text("Site Design: " + String(currentClient.compDesigner), 1, 1.4);
			doc.setFont(String(currentClient.font3))
			doc.text("Site Prep: " + String(currentClient.prepDesigner), 1, 1.6);
			doc.setFont(String(currentClient.font4))
			doc.text("Art Director: " + String(currentClient.artDirector), 1, 1.8);
			doc.setFont(String(currentClient.font5))
			doc.text("Project Manager: " + String(currentClient.projectManager), 1, 2.0);
            //doc.setFontSize(10);
            
            //for(i=0; i< colorArray.length ;i++) {
            //            if (i == 13) {doc.text("Headline " + ": " + colorArray[i],1.8, (2.15+(i/2.25)));}
            //            else if (i == 14) {doc.text("Subhead 1 " +  ": " + colorArray[i],1.8, (2.15+(i/2.25)));}
            //            else if (i == 15) {doc.text("Subhead 2 " + ": " + colorArray[i],1.8, (2.15+(i/2.25)));}
            //            else if (i == 16) {doc.text("Content Text " + ": " + colorArray[i],1.8, (2.15+(i/2.25)));}
            //            else if (i == 17) {doc.text("Hyperlink " + ": " + colorArray[i],1.8, (2.15+(i/2.25)));}
            //            else if (i == 18) {doc.text("Subtext " + ": " + colorArray[i],1.8, (2.15+(i/2.25)));}
            //            else{
            //            doc.text("Color " + (i + 1) + ": " + colorArray[i],1.8, (2.15+(i/2.25)));
            //            }
            //            
            //            let fillColor = document.getElementById("color" + (i+1)).value;
            //            
            //            function hexToRgb(hex) {
            //                        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            //                        return result ? {
            //                            r: parseInt(result[1], 16),
            //                            g: parseInt(result[2], 16),
            //                            b: parseInt(result[3], 16)
            //                        } : null;
            //                    }
            //            let rgbColor = hexToRgb(fillColor);
            //            doc.setDrawColor(0,0,0);
            //            doc.setLineWidth(.0125);
            //            doc.setFillColor(rgbColor.r,rgbColor.g,rgbColor.b);
            //            doc.rect(.95, (1.89+(i/2.25)), .75, .4, 'FD');
            //            
            //            //doc.fromHTML($('body').get(0), .1, .1, {
            //            //'width': 170
            //            //});
            //}
			
            doc.save(currentClient.clientName + '-ClientPDF.pdf');
}

$('#font1').on("change", function() { loadFont(event); } );
$('#font2').on("change", function() { loadFont(event); } );
$('#font3').on("change", function() { loadFont(event); } );
$('#font4').on("change", function() { loadFont(event); } );
$('#font5').on("change", function() { loadFont(event); } );
$('#font6').on("change", function() { loadFont(event); } );

function loadFonts() {
	let oReq = new XMLHttpRequest();
	oReq.open("GET", "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyABZt_6AWO56SxCHFjlUc05-5mUjGq4V-s");
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		let fontObj = JSON.parse(this.responseText);
		for (let i = 0; i < fontObj.items.length; i++) {
			let option=$('<option></option>').text(fontObj.items[i].family);
			$('#font1').append(option.clone());
			$('#font2').append(option.clone());
			$('#font3').append(option.clone());
			$('#font4').append(option.clone());
			$('#font5').append(option.clone());
			$('#font6').append(option.clone());
			googleFonts = fontObj;
		}
	}
		oReq.send();
}

function Font(name, files) {
    this.name = name,
    this.files = files;
}


function loadFont(e) {
	let i = e.target.selectedOptions[0].index - 1;
	let myFont = new Font(googleFonts.items[i].family, googleFonts.items[i].files);
	clientFonts.push(myFont);
	$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=' + myFont.name + '">');
	$(e.target).css("font-family", myFont.name);
}
		
		
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$(document).on('click','input',function(){ this.select(); });
	//Table sorting script
	function sortTable(n) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById("clients");
	  switching = true;
	  //Set the sorting direction to ascending:
	  dir = "asc"; 
	  /*Make a loop that will continue until
	  no switching has been done:*/
	  while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.getElementsByTagName("tr");
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
		  //start by saying there should be no switching:
		  shouldSwitch = false;
		  /*Get the two elements you want to compare,
		  one from current row and one from the next:*/
		  x = rows[i].getElementsByTagName("td")[n];
		  y = rows[i + 1].getElementsByTagName("td")[n];
		  /*check if the two rows should switch place,
		  based on the direction, asc or desc:*/
		  if (dir == "asc") {
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
			  //if so, mark as a switch and break the loop:
			  shouldSwitch= true;
			  break;
			}
		  } else if (dir == "desc") {
			if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
			  //if so, mark as a switch and break the loop:
			  shouldSwitch= true;
			  break;
			}
		  }
		}
		if (shouldSwitch) {
		  /*If a switch has been marked, make the switch
		  and mark that a switch has been done:*/
		  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		  switching = true;
		  //Each time a switch is done, increase this count by 1:
		  switchcount ++; 
		} else {
		  /*If no switching has been done AND the direction is "asc",
		  set the direction to "desc" and run the while loop again.*/
		  if (switchcount == 0 && dir == "asc") {
			dir = "desc";
			switching = true;
		  }
		}
	  }
	}
	
	$('#id').focus(function() {
		this.blur();
	});
	
	$('#lastUpdated').focus(function() {
		this.blur();
	});
	
	loadFonts();
	loadClients();
	
});

function sendMail() {
	if ($.isEmptyObject(currentClient)) {
		alert("You must load a client record.");
	}
	else {
	//$.post('api/mail', payload);
	let oReq = new XMLHttpRequest();
	oReq.open("POST", "api/mail");
	oReq.setRequestHeader("Content-Type","application/json");
	oReq.onload = function() {
		let response = JSON.parse(this.responseText);
		alert('Your message has been sent to the project team.');
	}
	let newClient = currentClient;
	let payload = JSON.stringify(newClient);
	oReq.send(payload);
	}
}
     
