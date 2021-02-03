printPyramid(10);
// TODO #2
let height = prompt("Enter the height of the pyramid");


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
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
  
let numBricks = 0;
let numSpaces = 0;
//start by declaring an empty string outside the loop
let str = '';

//you will need to use a for loop nested inside another for loop.
for(let row = 0; row < height; row++){  //outer loop
  str = "";
  numBricks = row + 1;
  numSpaces = (height - row - 1);

 for (let i = 0; i < numSpaces; i++){
   str += " ";
 }
 for(j=0; j <= numBricks; j++){//inner loop
    str += "#"; //this adds a # to the end of the string.
  }
  console.log(str); //once a row is done we print it out
}  
}