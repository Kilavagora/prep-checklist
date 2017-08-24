
			$('body').fadeIn();
			
			$('#prepGuide').load("prepGuide.html");
			//$('#prepColor').load("../color-palette");
			$('#prepHandoff').load("prepHandoff.html");
			
			$('#prepGuide').hide();
			$('#prepHandoff').hide();
			$('#prepColor').hide();
			
			$('#guide').click(function(){
				$('#prepSplash').slideUp();
				$('#prepHandoff').slideUp();
				$('#prepColor').slideUp();
				$('#prepGuide').slideDown();
			});
			
			$('#prep').click(function(){
				$('#prepSplash').slideUp();
				$('#prepGuide').slideUp();
				$('#prepColor').slideUp();
				$('#prepHandoff').slideDown();
			});
			
			$('#color').click(function(){
				$('#prepSplash').slideDown();
				$('#prepHandoff').slideUp();
				$('#prepGuide').slideUp();
				$('#prepColor').slideUp();
				window.open('http://adamelliott.com/color-palette');
			});
			
			$('#guide2').click(function(){
				$('#prepSplash').slideUp();
				$('#prepHandoff').slideUp();
				$('#prepColor').slideUp();
				$('#prepGuide').slideDown();
				
			});
			
			$('#prep2').click(function(){
				$('#prepSplash').slideUp();
				$('#prepGuide').slideUp();
				$('#prepColor').slideUp();
				$('#prepHandoff').slideDown();
			});
			
			$('#color2').click(function(){
				$('#prepSplash').slideDown();
				$('#prepHandoff').slideUp();
				$('#prepGuide').slideUp();
				$('#prepColor').slideUp();
				window.open('http://adamelliott.com/color-palette');
			});
			
			//$('#prepSumbit').click(function(event){
			//	event.preventDefault();
			//	savePDF();
			//});
		
			
		function toJSON(form){
			var array = jQuery(form).serializeArray();
			var json = {};
			
			jQuery.each(array, function() {
				json[this.name] = this.value || '';
			});
			
			return json;
		}
		
		function submitForm() {
			saveClient(toJSON($('form')));
			
		}
			
			
		function saveClient(clientData) {
			let newClient = clientData;
			console.log(newClient);
			let oReq = new XMLHttpRequest();
			oReq.open("POST", "api/clients");
			oReq.setRequestHeader("Content-Type","application/json");
			oReq.onload = function() {
				$('form')[0].reset();
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
			$('#clients').html("<tr><th onclick='sortTable(0)'>Client</th><th onclick='sortTable(0)'>ID</th><th onclick='sortTable(0)'>Date</th></tr>");
            for (let i=0; i<clientsArray.length; i++) {
              listClients(clientsArray[i]);
            }
          }
          oReq.send();
		}
		
		function listClients(c) {
			$('#clients').append("<tr><td>" + c.clientName + "</td>" + "<td>" + c._id + "</td>" + "<td>" + c.createDate + "</td></tr>");
		}
		
		function reloadClient() {
			let oReq = new XMLHttpRequest();
			oReq.open("GET", "/api/clients");
			oReq.setRequestHeader("Content-Type","application/json");
			oReq.onload = function() {
  
			  
				let clientsArray = JSON.parse(this.responseText);
				//$('input[name="clientName"]')[0].value = clientsArray[0].clientName;
				
				for(var id in clientsArray[0]) {
					console.log(clientsArray[0][id]);
					$('input#' + id).val( clientsArray[0][id] );
					$('textarea#' + id).val( clientsArray[0][id] );
					$('input[type=checkbox]#' + id).attr( "checked", clientsArray[0][id]);
					$('select#' + id).val(clientsArray[0][id] );
					
					
					
					//$('#font' + id).attr( "checked", clientsArray[0][id]);
					//console.log(id);
					//console.log(clientsArray[0][id]);
				}
				
			}
		   oReq.send();
		}
		
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
			
		}
	}
		oReq.send();
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
	loadFonts();
	loadClients();
	$('#clients').on('click', "tr:not(:first-child)", function(){
		if ( $(this).hasClass('active') ) {
		   $(this).toggleClass('active');
	   }
	   else {
	   $('#clients tr').removeClass('active');
	   $(this).toggleClass('active');
	   }
	});
});

