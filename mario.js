printPyramid(5);
// TODO #2
//let height = prompt("Enter the height of the pyramid");


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {

  
let numBricks = 0;
let numSpaces = 0;
//start by declaring an empty string outside the loop
let str = '';

for(let row = 0; row < height; row++){  //outer loop
  str = "";
  numBricks = row + 1;
  numSpaces = (height - row - 1);

 for (let i = 0; i < numSpaces; i++){
   str += ".";
 }
 for(j=0; j <= numBricks; j++){//inner loop
    str += "#"; //this adds a # to the end of the string.
  }
  console.log(str); //once a row is done we print it out
  //create a paragraph element
  let para = document.createElement("p"); 
  //create text
  let node = document.createTextNode(str);
  //create a variable to refernce the div element
  let element = document.getElementById("pyramid"); //add the text to the paragraph Element
  para.appendChild(node); 
  element.appendChild(para); 
}  

}