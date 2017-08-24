// Declare global variables
var cp1 = document.getElementById("cp1");
var cp2 = document.getElementById("cp2");
var cp3 = document.getElementById("cp3");
var cp3 = document.getElementById("cp4");
var cp5 = document.getElementById("cp5");
var cp6  = document.getElementById("cp6");
var cp7  = document.getElementById("cp7");
var cp8 = document.getElementById("cp8");
var cp9 = document.getElementById("cp9");
var cp10 = document.getElementById("cp10");
var cp12 = document.getElementById("cp11");
var cp12 = document.getElementById("cp12");
var cp13 = document.getElementById("cp13");
var cp14 = document.getElementById("cp14");
var cp15 = document.getElementById("cp15");
var cp16 = document.getElementById("cp16");
var cp17 = document.getElementById("cp17");
var cp18 = document.getElementById("cp18");
var cp19 = document.getElementById("cp19");

var ct1 = document.getElementById("color1");
var ct2 = document.getElementById("color2");
var ct3 = document.getElementById("color3");
var ct4 = document.getElementById("color4");
var ct5 = document.getElementById("color5");
var ct6  = document.getElementById("color6");
var ct7  = document.getElementById("color7");
var ct8 = document.getElementById("color8");
var ct9 = document.getElementById("color9");
var ct10 = document.getElementById("color10");
var ct11 = document.getElementById("color11");
var ct12 = document.getElementById("color12");
var ct13 = document.getElementById("color13");
var ct14 = document.getElementById("color14");
var ct15 = document.getElementById("color15");
var ct16 = document.getElementById("color16");
var ct17 = document.getElementById("color17");
var ct18 = document.getElementById("color18");
var ct19 = document.getElementById("color19");

var c1 = "";
var c2 = "";
var c3 = "";
var c4 = "";
var c5 = "";
var c6 = "";
var c7 = "";
var c8 = "";
var c9 = "";
var c10 = "";
var c11 = "";
var c12 = "";
var c13 = "";
var c14 = "";
var c15 = "";
var c16 = "";
var c17 = "";
var c18 = "";
var c19 = "";

//Color 1
var cp1 = document.getElementById("cp1");
var defaultColor = "#0000ff";

window.addEventListener("load", color1, false);
window.addEventListener("load", colorText1, false);

function color1() {
            cp1.addEventListener("input", updateColor1, false);
            cp1.addEventListener("change", updateColor1, false);
            cp1.select();
          }

function updateColor1(event) {
            $("#interface4").css("background-color", cp1.value);
            $('#examples table.table tr:nth-child(1)').css("background-color", cp1.value);
            $('#examples table.table tr:nth-child(3)').css("background-color", cp1.value);
            exportCPcolor();
            document.getElementById("color1").value = cp1.value;
            document.getElementById("color4").value = cp1.value;
            cp4.value = cp1.value;
            //color4();
}

function colorText1() {
            //ct1.addEventListener("input", updateColorText1, false);
            ct1.addEventListener("change", updateColorText1, false);
            cp1.select();
}

function updateColorText1() {
            if (ct1.value[0] == "#" ){
            cp1.value = ct1.value;
            cp4.value = ct1.value;}
            else if (ct1.value[0] != "#" ){
            ct1.value = "#" + ct1.value;
            cp1.value = ct1.value;
            cp4.value = ct1.value;
            }
            
            updateColor1();
            
            //cp1.value = ct1.value;
}

//Color 2
window.addEventListener("load", color2, false);
window.addEventListener("load", colorText2, false);

function color2() {
            cp2 = document.querySelector("#cp2");
            cp2.addEventListener("input", updateColor2, false);
            cp2.addEventListener("change", updateColor2, false);
            cp2.select();
          }

function updateColor2(event) {
          $("#interface5").css("background-color", cp2.value);
          $('#examples table.table tr:nth-child(2)').css("background-color", cp2.value);
          $('#examples table.table tr:nth-child(4)').css("background-color", cp2.value);
          document.getElementById("color2").value = cp1.value;
            document.getElementById("color5").value = cp1.value;
          cp5.value = cp2.value;
}


function colorText2() {
            //ct2.addEventListener("input", updateColorText2, false);
            ct2.addEventListener("change", updateColorText2, false);
            cp2.select();
}

function updateColorText2() {
            if (ct2.value[0] == "#" ){
            cp2.value = ct2.value;
            cp5.value = ct2.value;}
            else if (ct2.value[0] != "#" ){
            ct2.value = "#" + ct2.value;
            cp2.value = ct2.value;
            cp5.value = ct2.value;
            }
            
            updateColor2();
            
            //cp2.value = ct2.value;
}


//Color 3
window.addEventListener("load", color3, false);
window.addEventListener("load", colorText3, false);

function color3() {
            cp3 = document.querySelector("#cp3");
            cp3.addEventListener("input", updateColor3, false);
            cp3.addEventListener("change", updateColor3, false);
            cp3.select();
          }

function updateColor3(event) {
          $('#examples table.table th').css("background-color", cp3.value);
          document.getElementById("color3").value = cp3.value;
}


function colorText3() {
            //ct3.addEventListener("input", updateColorText3, false);
            ct3.addEventListener("change", updateColorText3, false);
            cp3.select();
}

function updateColorText3() {
            if (ct3.value[0] == "#" ){
            cp3.value = ct3.value;}
            else if (ct3.value[0] != "#" ){
            ct3.value = "#" + ct3.value;
            cp3.value = ct3.value;
            }
            
            updateColor3();
            
            //cp3.value = ct3.value;
}


//Color 4
window.addEventListener("load", color4, false);
window.addEventListener("load", colorText4, false);

function color4() {
            cp4 = document.querySelector("#cp4");
            cp4.addEventListener("input", updateColor4, false);
            cp4.addEventListener("change", updateColor4, false);
            cp4.select();
          }

function updateColor4(event) {
          $("#interface4").css("background-color", cp4.value);
          document.getElementById("color4").value = cp4.value;
          document.getElementById("color1").value = cp4.value;
          cp1.value = cp4.value;
}

function colorText4() {
            //ct4.addEventListener("input", updateColorText4, false);
            ct4.addEventListener("change", updateColorText4, false);
            cp4.select();
}

function updateColorText4() {
            if (ct4.value[0] == "#" ){
            cp4.value = ct4.value;
            cp1.value = ct4.value;}
            else if (ct4.value[0] != "#" ){
            ct4.value = "#" + ct4.value;
            cp4.value = ct4.value;
            cp1.value = ct4.value;
            }
            
            updateColor4();
            
            //cp4.value = ct4.value;
}


//Color 5
window.addEventListener("load", color5, false);
window.addEventListener("load", colorText5, false);

function color5() {
            cp5 = document.querySelector("#cp5");
            cp5.addEventListener("input", updateColor5, false);
            cp5.addEventListener("change", updateColor5, false);
            cp5.select();
          }

function updateColor5(event) {
          $("#interface4").css("background-color", cp5.value);
          document.getElementById("color5").value = cp5.value;
          document.getElementById("color2").value = cp5.value;
          cp2.value = cp5.value;
}

function colorText5() {
            //ct5.addEventListener("input", updateColorText5, false);
            ct5.addEventListener("change", updateColorText5, false);
            cp5.select();
}

function updateColorText5() {
            if (ct5.value[0] == "#" ){
            cp5.value = ct5.value;
            cp2.value = ct5.value;}
            else if (ct5.value[0] != "#" ){
            ct5.value = "#" + ct5.value;
            cp5.value = ct5.value;
            cp2.value = ct5.value;
            }
            
            updateColor5();
            
            //cp5.value = ct5.value;
}

//Color 6
window.addEventListener("load", color6, false);
window.addEventListener("load", colorText6, false);

function color6() {
            cp6 = document.querySelector("#cp6");
            cp6.addEventListener("input", updateColor6, false);
            cp6.addEventListener("change", updateColor6, false);
            cp6.select();
          }

function updateColor6(event) {
          $("#interface6").css("background-color", cp6.value);
}

function colorText6() {
            //ct6.addEventListener("input", updateColorText6, false);
            ct6.addEventListener("change", updateColorText6, false);
            cp6.select();
}

function updateColorText6() {
            if (ct6.value[0] == "#" ){
            cp6.value = ct6.value;}
            else if (ct6.value[0] != "#" ){
            ct6.value = "#" + ct6.value;
            cp6.value = ct6.value;
            }
            
            updateColor6();
}

//Color 7
window.addEventListener("load", color7, false);
window.addEventListener("load", colorText7, false);

function color7() {
            cp7 = document.querySelector("#cp7");
            cp7.addEventListener("input", updateColor7, false);
            cp7.addEventListener("change", updateColor7, false);
            cp7.select();
          }

function updateColor7(event) {
          $("#interface4").css("background-color", cp7.value);
}

function colorText7() {
            //ct7.addEventListener("input", updateColorText7, false);
            ct7.addEventListener("change", updateColorText7, false);
            cp7.select();
}

function updateColorText7() {
            if (ct7.value[0] == "#" ){
            cp7.value = ct7.value;}
            else if (ct7.value[0] != "#" ){
            ct7.value = "#" + ct7.value;
            cp7.value = ct7.value;
            }
            
            updateColor7();
}

//Color 8
window.addEventListener("load", color8, false);
window.addEventListener("load", colorText8, false);

function color8() {
            cp8 = document.querySelector("#cp8");
            cp8.addEventListener("input", updateColor8, false);
            cp8.addEventListener("change", updateColor8, false);
            cp8.select();
          }

function updateColor8(event) {
          $("#interface4").css("background-color", cp8.value);
}

function colorText8() {
            //ct8.addEventListener("input", updateColorText8, false);
            ct8.addEventListener("change", updateColorText8, false);
            cp8.select();
}

function updateColorText8() {
            if (ct8.value[0] == "#" ){
            cp8.value = ct8.value;}
            else if (ct8.value[0] != "#" ){
            ct8.value = "#" + ct8.value;
            cp8.value = ct8.value;
            }
            
            updateColor8();
}


//Color 9
window.addEventListener("load", color9, false);
window.addEventListener("load", colorText9, false);

function color9() {
            cp9 = document.querySelector("#cp9");
            cp9.addEventListener("input", updateColor9, false);
            cp9.addEventListener("change", updateColor9, false);
            cp9.select();
          }

function updateColor9(event) {
          $("#interface9").css("color", cp9.value);
}


function colorText9() {
            //ct9.addEventListener("input", updateColorText9, false);
            ct9.addEventListener("change", updateColorText9, false);
            cp9.select();
}

function updateColorText9() {
            if (ct9.value[0] == "#" ){
            cp9.value = ct9.value;}
            else if (ct9.value[0] != "#" ){
            ct9.value = "#" + ct9.value;
            cp9.value = ct9.value;
            }
            
            updateColor9();
}


//Color 10
window.addEventListener("load", color10, false);
window.addEventListener("load", colorText10, false);

function color10() {
            cp10 = document.querySelector("#cp10");
            cp10.addEventListener("input", updateColor10, false);
            cp10.addEventListener("change", updateColor10, false);
            cp10.select();
          }

function updateColor10(event) {
          $("#interface4").css("background-color", cp10.value);
}

function colorText10() {
            //ct10.addEventListener("input", updateColorText10, false);
            ct10.addEventListener("change", updateColorText10, false);
            cp10.select();
}

function updateColorText10() {
            if (ct10.value[0] == "#" ){
            cp10.value = ct10.value;}
            else if (ct10.value[0] != "#" ){
            ct10.value = "#" + ct10.value;
            cp10.value = ct10.value;
            }
            
            updateColor10();
}

//Color 11
window.addEventListener("load", color11, false);
window.addEventListener("load", colorText11, false);

function color11() {
            cp11 = document.querySelector("#cp11");
            cp11.addEventListener("input", updateColor11, false);
            cp11.addEventListener("change", updateColor11, false);
            cp11.select();
          }

function updateColor11(event) {
          $("#interface4").css("background-color", cp11.value);
}


function colorText11() {
            //ct11.addEventListener("input", updateColorText11, false);
            ct11.addEventListener("change", updateColorText11, false);
            cp11.select();
}

function updateColorText11() {
            if (ct11.value[0] == "#" ){
            cp11.value = ct11.value;}
            else if (ct11.value[0] != "#" ){
            ct11.value = "#" + ct11.value;
            cp11.value = ct11.value;
            }
            
            updateColor11();
}


//Color 12
window.addEventListener("load", color12, false);
window.addEventListener("load", colorText12, false);

function color12() {
            cp12 = document.querySelector("#cp12");
            cp12.addEventListener("input", updateColor12, false);
            cp12.addEventListener("change", updateColor12, false);
            cp12.select();
          }

function updateColor12(event) {
          $("#interface4").css("background-color", cp12.value);
}

function colorText12() {
            //ct12.addEventListener("input", updateColorText12, false);
            ct12.addEventListener("change", updateColorText12, false);
            cp12.select();
}

function updateColorText12() {
            if (ct12.value[0] == "#" ){
            cp12.value = ct12.value;}
            else if (ct12.value[0] != "#" ){
            ct12.value = "#" + ct12.value;
            cp12.value = ct12.value;
            }
            
            updateColor12();
}

//Color 13
window.addEventListener("load", color13, false);
window.addEventListener("load", colorText13, false);

function color13() {
            cp13 = document.querySelector("#cp13");
            cp13.addEventListener("input", updateColor13, false);
            cp13.addEventListener("change", updateColor13, false);
            cp13.select();
          }

function updateColor13(event) {
          $("#interface4").css("background-color", cp13.value);
}

function colorText13() {
            //ct13.addEventListener("input", updateColorText13, false);
            ct13.addEventListener("change", updateColorText13, false);
            cp13.select();
}

function updateColorText13() {
            if (ct13.value[0] == "#" ){
            cp13.value = ct13.value;}
            else if (ct13.value[0] != "#" ){
            ct13.value = "#" + ct13.value;
            cp13.value = ct13.value;
            }
            
            updateColor13();
}

//Color 14
window.addEventListener("load", color14, false);
window.addEventListener("load", colorText14, false);

function color14() {
            cp14 = document.querySelector("#cp14");
            cp14.addEventListener("input", updateColor14, false);
            cp14.addEventListener("change", updateColor14, false);
            cp14.select();
          }

function updateColor14(event) {
          $("#textInterface h1").css("color", cp14.value);
}


function colorText14() {
            //ct14.addEventListener("input", updateColorText14, false);
            ct14.addEventListener("change", updateColorText14, false);
            cp14.select();
}

function updateColorText14() {
            if (ct14.value[0] == "#" ){
            cp14.value = ct14.value;}
            else if (ct14.value[0] != "#" ){
            ct14.value = "#" + ct14.value;
            cp14.value = ct14.value;
            }
            
            updateColor14();
}


//Color 15
window.addEventListener("load", color15, false);
window.addEventListener("load", colorText15, false);

function color15() {
            cp15 = document.querySelector("#cp15");
            cp15.addEventListener("input", updateColor15, false);
            cp15.addEventListener("change", updateColor15, false);
            cp15.select();
          }

function updateColor15(event) {
          $("#textInterface h2.sub1").css("color", cp15.value);
}


function colorText15() {
            //ct15.addEventListener("input", updateColorText15, false);
            ct15.addEventListener("change", updateColorText15, false);
            cp15.select();
}

function updateColorText15() {
            if (ct15.value[0] == "#" ){
            cp15.value = ct15.value;}
            else if (ct15.value[0] != "#" ){
            ct15.value = "#" + ct15.value;
            cp15.value = ct15.value;
            }
            
            updateColor15();
}


//Color 16
window.addEventListener("load", color16, false);
window.addEventListener("load", colorText16, false);

function color16() {
            cp16 = document.querySelector("#cp16");
            cp16.addEventListener("input", updateColor16, false);
            cp16.addEventListener("change", updateColor16, false);
            cp16.select();
          }

function updateColor16(event) {
          $("#textInterface h2.sub2").css("color", cp16.value);
}


function colorText16() {
            //ct16.addEventListener("input", updateColorText16, false);
            ct16.addEventListener("change", updateColorText16, false);
            cp16.select();
}

function updateColorText16() {
            if (ct16.value[0] == "#" ){
            cp16.value = ct16.value;}
            else if (ct16.value[0] != "#" ){
            ct16.value = "#" + ct16.value;
            cp16.value = ct16.value;
            }
            
            updateColor16();
}


//Color 17
window.addEventListener("load", color17, false);
window.addEventListener("load", colorText17, false);

function color17() {
            cp17 = document.querySelector("#cp17");
            cp17.addEventListener("input", updateColor17, false);
            cp17.addEventListener("change", updateColor17, false);
            cp17.select();
          }

function updateColor17(event) {
          $("#textInterface p").css("color", cp17.value);
}

function colorText17() {
            //ct17.addEventListener("input", updateColorText17, false);
            ct17.addEventListener("change", updateColorText17, false);
            cp17.select();
}

function updateColorText17() {
            if (ct17.value[0] == "#" ){
            cp17.value = ct17.value;}
            else if (ct17.value[0] != "#" ){
            ct17.value = "#" + ct17.value;
            cp17.value = ct17.value;
            }
            
            updateColor17();
}

//Color 18
window.addEventListener("load", color18, false);
window.addEventListener("load", colorText18, false);

function color18() {
            cp18 = document.querySelector("#cp18");
            cp18.addEventListener("input", updateColor18, false);
            cp18.addEventListener("change", updateColor18, false);
            cp18.select();
          }

function updateColor18(event) {
          $("#textInterface a").css("color", cp18.value);
}

function colorText18() {
            //ct18.addEventListener("input", updateColorText18, false);
            ct18.addEventListener("change", updateColorText18, false);
            cp18.select();
}

function updateColorText18() {
            if (ct18.value[0] == "#" ){
            cp18.value = ct18.value;}
            else if (ct18.value[0] != "#" ){
            ct18.value = "#" + ct18.value;
            cp18.value = ct18.value;
            }
            
            updateColor18();
}

//Color 19
window.addEventListener("load", color19, false);
window.addEventListener("load", colorText19, false);

function color19() {
            cp19 = document.querySelector("#cp19");
            cp19.addEventListener("input", updateColor19, false);
            cp19.addEventListener("change", updateColor19, false);
            cp19.select();
          }

function updateColor19(event) {
          $("#textInterface .subtext").css("color", cp19.value);
}


function colorText19() {
            //ct19.addEventListener("input", updateColorText19, false);
            ct19.addEventListener("change", updateColorText19, false);
            cp19.select();
}

function updateColorText19() {
            if (ct19.value[0] == "#" ){
            cp19.value = ct19.value;}
            else if (ct19.value[0] != "#" ){
            ct19.value = "#" + ct19.value;
            cp19.value = ct19.value;
            }
            
            updateColor19();
}



function applyColor1(color) {
            //pass in color
            //set example elements to color that color.
}




function makeUL(){
            color = "";
            colorList = "";
            for (var i = 0; color = colorArray[i]; i++) {
                        if (i == 13) {colorList +=  "<li>" + "H1: " + color + "</li>";}
                                    else if (i == 14) {colorList +=  "<li>" + "H2-1: " + color + "</li>";}
                                                else if (i == 15) {colorList +=  "<li>" + "H2-2: " + color + "</li>";}
                                                            else if (i == 16) {colorList +=  "<li>" + "P: " + color + "</li>";}
                                                                        else if (i == 17) {colorList +=  "<li>" + "A: " + color + "</li>";}
                                                                                    else if (i == 18) {colorList +=  "<li>" + "Sub: "  + color + "</li>";}
                                    else{colorList +=  "<li>" + (i + 1) + " : " + color + "</li>";}
                        }
            document.getElementById('colorList').innerHTML = "";
            document.getElementById('colorList').innerHTML = colorList;
}

let colorArray = [];

function exportCPcolor() {		
            colorArray = [];
            for (i=1; i<20; i++) {
                        colorArray.push(document.getElementById("color"+i).value);
                        }
            makeUL(colorArray);
}
            


function colorReset() {
            location.reload();
}

function savePDF() {
            exportCPcolor();
            var imgData = 'data:image/png;base64,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';
            
            //create new PDF object
            var doc = new jsPDF({
                        orientation: 'portrait',
                        unit: 'in',
                        format: [8, 11]
            });
            
            //Double check client name
            if($("#stCity").val() == "ST-City") {
                        $("#stCity").val(prompt("Please enter the client in this format: ST-City"));	
            }
            var stCity = $("#stCity").val();
            console.log(stCity);

            //Add designers name
            var prep = $("#prepName").val();
            
            //Assemble PDF
            doc.addImage(imgData, 'PNG', 1, 1, .25, .195);
            doc.setFontSize(16);
            doc.text(stCity, 1.35, 1.14);
            doc.setFontSize(8);
            doc.text("Site prep by: " + prep, 1, 1.4);
            doc.setFontSize(10);
            
            for(i=0; i< colorArray.length ;i++) {
                        if (i == 13) {doc.text("Headline " + ": " + colorArray[i],1.2, 2+(i/2.25));}
                        else if (i == 14) {doc.text("Subhead 1 " +  ": " + colorArray[i],1.2, 2+(i/2.25));}
                        else if (i == 15) {doc.text("Subhead 2 " + ": " + colorArray[i],1.2, 2+(i/2.25));}
                        else if (i == 16) {doc.text("Content Text " + ": " + colorArray[i],1.2, 2+(i/2.25));}
                        else if (i == 17) {doc.text("Hyperlink " + ": " + colorArray[i],1.2, 2+(i/2.25));}
                        else if (i == 18) {doc.text("Subtext " + ": " + colorArray[i],1.2, 2+(i/2.25));}
                        else{
                        doc.text("Color " + (i + 1) + ": " + colorArray[i],1.2, 2+(i/2.25));
                        }
                        
                        let fillColor = document.getElementById("color" + (i+1)).value;
                        
                        function hexToRgb(hex) {
                                    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                                    return result ? {
                                        r: parseInt(result[1], 16),
                                        g: parseInt(result[2], 16),
                                        b: parseInt(result[3], 16)
                                    } : null;
                                }
                        let rgbColor = hexToRgb(fillColor);
                        doc.setDrawColor(rgbColor.r,rgbColor.g,rgbColor.b);
                        doc.rect(.75, (1.89+(i/2.25)), .125, .125, 'D');
                        
                        //doc.fromHTML($('body').get(0), .1, .1, {
                        //'width': 170
                        //});
            }
            doc.save(stCity + '-ColorPalette.pdf');
}



function jsonExport() {
                        exportCPcolor();        
                        let stCitySQL = $("#stCity").val();
                        console.log(stCitySQL);
                        let prepNameSQL = $("#prepName").val();
                        
                                                
                        $.post( "colorData.php", {stCity: stCitySQL, prepName: prepNameSQL, colorData: JSON.stringify(colorArray)} );
                        //$("#tableBox").load("loadColorList.php");
                        $('#myModal').modal('show');
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("clientListTable");
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

function loadClientList() {
            //$("#tableBox").load("loadColorList.php");
            //sortTable();
            $('#clientList').slideToggle();
}

function loadClientPalette() {
            var clientPalette = [];
            $("#clientList table tr.active").each(function() {
                //var arrayOfThisRow = [];
                var tableData = $(this).find('td');
                if (tableData.length > 0) {
                    tableData.each(function() { clientPalette.push($(this).text()); });
                }
            });
            
            //console.log(clientPalette);
            
            
            //var a = ['zero', 'one', 'two', 'three'];
            //var sliced = a.slice(1, 3);
            //
            //console.log(a);      // ['zero', 'one', 'two', 'three']
            //console.log(sliced); // ['one', 'two']
            
            
            //var clientName = clientPalette.slice(1,2).toString();
            //var designerName = clientPalette.slice(2,3).toString();
            //var clientColor = clientPalette.splice(4, 1);
            
            let clientId = clientPalette.shift();
            let clientName = clientPalette.shift();
            let designerName = clientPalette.shift();
            let clientColor = clientPalette.shift();
            
            
            //console.log(clientId); 
            //console.log(clientName);
            //console.log(designerName);
            //console.log(clientColor);
            
            //clientColor = clientColor.replace(/['"]+/g, '');
            //clientColor = clientColor.replace(/[\[\]']+/g, '');
            //console.log(clientColor); //
            
            let clientColorArray = JSON.parse(clientColor);
            //console.log(clientColorArray);
            
            $("#stCity").val(clientName);
            $("#prepName").val(designerName);
            
            
            //for (let i=0; i<clientColorArray.length; i++){
            //            let clientColor = clientColorArray[i];
            //            let currentColor = "ct"+(i+1);
            //            //console.log(currentColor);
            //            currentColor.toString.value = clientColor;
            //            console.log(clientColor);
            //}
            
            
            ct1.value = clientColorArray[1];
            ct2.value = clientColorArray[1];
            ct3.value = clientColorArray[2];
            ct4.value = clientColorArray[3];
            ct5.value = clientColorArray[4];
            ct6.value = clientColorArray[5];
            ct7.value = clientColorArray[6];
            ct8.value = clientColorArray[7];
            ct9.value = clientColorArray[8];
            ct10.value = clientColorArray[9];
            ct11.value = clientColorArray[10];
            ct12.value = clientColorArray[11];
            ct13.value = clientColorArray[12];
            ct14.value = clientColorArray[13];
            ct15.value = clientColorArray[14];
            ct16.value = clientColorArray[15];
            ct17.value = clientColorArray[16];
            ct18.value = clientColorArray[17];
            ct19.value = clientColorArray[18];
            
            setColor();
            
            $('#clientList').slideToggle();
            
            
            
            //let clientColor1 = clientColor.split();
            //console.log(clientColor1);
            //for (let i=0; i<20; i++) {
            //            $('#cp' + i).colorpicker('setValue','#000');
            //}
}

//other functions
function setColor() {
            updateColorText1();
            updateColorText2();
            updateColorText3();
            updateColorText4();
            updateColorText5();
            updateColorText6();
            updateColorText7();
            updateColorText8();
            updateColorText9();
            updateColorText10();
            updateColorText11();
            updateColorText12();
            updateColorText13();
            updateColorText14();
            updateColorText15();
            updateColorText16();
            updateColorText17();
            updateColorText18();
            updateColorText19();
}


function deletePalette(){
            let deadPalette = $("#clientList table tr.active td:first-child").text();
            //deadPalette = deadPalette.replace(/[^A-Z0-9]/ig, "");
            //deadPalette = deadPalette.replace(/i/ig, "");
            //deadPalette = deadPalette.replace(/d/ig, "");
            //parseInt(deadPalette);
            console.log(deadPalette);
            $.post( "deletePalette.php", {deadRow: deadPalette} );
            $("#tableBox").load('loadColorList.php');
            //$("#tableBox").load("loadColorList.php");
}

function firstLoadColor() {
            updateColorText1();
            updateColorText2();
            updateColorText3();
            updateColorText4();
            updateColorText5();
            updateColorText6();
            updateColorText7();
            updateColorText8();
            updateColorText9();
            updateColorText10();
            updateColorText11();
            updateColorText12();
            updateColorText13();
            updateColorText14();
            updateColorText15();
            updateColorText16();
            updateColorText17();
            updateColorText18();
            updateColorText19();
            exportCPcolor();
}

$(document).ready(function(){			
            // $('#tableBox table tr:not(:first-child)').click(function() {
            //            if ( $(this).hasClass('active') ) {
            //            	$(this).toggleClass('active');
            //            }
            //            else {
            //            $('#clientList table tr').removeClass('active');
            //            $(this).toggleClass('active');
            //            }
            //});
            // 
             
             $('#tableBox').on('click', "tr:not(:first-child)", function(){
                         if ( $(this).hasClass('active') ) {
                        	$(this).toggleClass('active');
                        }
                        else {
                        $('#clientList table tr').removeClass('active');
                        $(this).toggleClass('active');
                        }
            });
             
             setInterval(function() {
                        $("#tableBox").load('loadColorList.php');
             }, 300000);
             //

            //$(document).click(function(e) 
            //           {
            //               var container = $("#clientList");
            //           
            //               // if the target of the click isn't the container nor a descendant of the container
            //               if (!container.is(":visible") && container.has(e.target).length === 0) 
            //               {
            //                   container.slideToggle();
            //               }
            //});
            
            

});
