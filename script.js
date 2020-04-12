

let jsonStuff = [
  {
    "name" : "Bulbasaur",
    "picture_url" : "data/Bulbasaur.png",
    "type" : "Grass, Poison",
    "info" : ["Seed Pokemon", "2\' 04\"", "15.2 lbs"]
  },
  {
    "name" : "Charmander",
    "picture_url" : "data/Charmander.png",
    "type" : "Fire",
    "info" : ["Lizard Pokemon", "2\' 00\"", "18.7 lbs"]
  },
  {
    "name" : "Squirtle",
    "picture_url" : "data/Squirtle.png",
    "type" : "Water",
    "info" : ["Tiny Turtle Pokemon", "1\' 08\"", "19.8 lbs"]
  },
  {
    "name" : "Chikorita",
    "picture_url" : "data/Chikorita.png",
    "type" : "Grass",
    "info" : ["Leaf Pokemon", "2\' 11\"", "14.1 lbs"]
  },
  {
    "name" : "Cyndaquil",
    "picture_url" : "data/Cyndaquil.png",
    "type" : "Fire",
    "info" : ["Fire Mouse Pokemon", "1\' 08\"", "17.4 lbs"]
  },
  {
    "name" : "Totodile",
    "picture_url" : "data/Totodile.png",
    "type" : "Water",
    "info" : ["Big Jaw Pokemon", "2\' 00\"", "20.9 lbs"]
  },
  {
    "name" : "Treecko",
    "picture_url" : "data/Treecko.png",
    "type" : "Grass",
    "info" : ["Wood Gecko Pokemon", "1\' 08\"", "11.0 lbs"]
  },
  {
    "name" : "Torchic",
    "picture_url" : "data/Torchic.png",
    "type" : "Fire",
    "info" : ["Chick Pokemon", "1\' 04\"", "5.5 lbs"]
  },
  {
    "name" : "Mudkip",
    "picture_url" : "data/Mudkip.png",
    "type" : "Water",
    "info" : ["Mud Fish Pokemon", "1\' 04\"", "16.8 lbs"]
  }

]

printAllToPage(); //This is all that runs


function printAllToPage() {
  //New div to hold the stuff
  for (var i = 0; i < jsonStuff.length; i++) {
    var currId = "block" + (i+1); //Creating id name for div

    var newDiv = document.createElement("DIV"); //Create new <div> element
    newDiv.id = currId; //give id to div
    newDiv.style.backgroundColor = "white"; //give bg color to div
    newDiv.style.padding = "10px";
    newDiv.style.borderRadius = "15px"
    document.getElementById("contentGrid").appendChild(newDiv); //add to contentGrid

    //Name
    var header = document.createElement("H1");  //Create an <h1> element
    header.innerHTML = jsonStuff[i]['name']; //Insert name
    document.getElementById(currId).appendChild(header);     // Append Header to our div

    //Image
    var image = document.createElement("IMG");   //Create an <img> element
    image.src = jsonStuff[i]['picture_url'];      // Insert text
    image.style.height = "40vh";
    document.getElementById(currId).appendChild(image);     // Append Image to our div

    //Name
    var typeName = document.createElement("H2");  //Create an <h2> element
    typeName.innerHTML = jsonStuff[i]['type']; //Insert type
    document.getElementById(currId).appendChild(typeName);  // Append typeName

    //Info
    for (var j = 0; j < jsonStuff[i]['info'].length; j++) { //For loop to run through array
      var para = document.createElement("P"); //Create a <p> element
      para.innerHTML = jsonStuff[i]['info'][j]; //Insert text
      document.getElementById(currId).appendChild(para); //Apend to block
    }
  }
}
