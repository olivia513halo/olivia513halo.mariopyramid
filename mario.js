printPyramid(5);
// TODO #2
// Take in user input for the height


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
  

let rows = 5;
//start by declaring an empty string outside the loop
let str = '';

//you will need to use a for loop nested inside another for loop.
for(let i=0; i<=rows; i++){  //outer loop
  str = "";
  for(let b=0; b<=i; b++){
    str += " ";
  }
  for(let j=0; j<=(i+1); j++){//inner loop
    str += "#"; //this adds a # to the end of the string.

  }
  console.log(str); //once a row is done we print it out
}  
}