/**
 * Function that return the cell letter for a given index
 * Limit 18252 Columns
 * 
 * @autor : Paulo Leite
 * @param {int} index    : Index value of the column
 * @param {bool} verbose : When true turn verbose mode active
 * 
 */

//Config constants
const verbose = true

//Alphabet array
var letters      = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function convertIndexToLetter(idx) {

  //Get the last letter from cell                  
  var finalValue   = ""
  
  //check if the index is less than the alphabet
  if(idx <= letters.length)  {
    finalValue = letters[idx-1]
  }else if (idx <= (Math.pow(letters.length,2)+letters.length)){
    //idx 26 to 702 (2 letters column, from AA to ZZ)
    var firstLetter  = letters[(Math.floor((idx - 1) / 26) - 1)];
    var secondLetter = letters[((idx - 1) % 26)];
    finalValue = firstLetter+secondLetter
  }else{
    //idx 703 to 18252 (3 letters column, from AAA to ZYZ)
    var firstLetter  = letters[(Math.floor((idx - 1) / (26 * 26)) - 1)];
    var secondLetter = letters[(Math.floor((idx - 1) / 26) % 26)  - 1];
    var thirdLetter  = letters[((idx - 1) % 26)];
    finalValue = firstLetter+secondLetter+thirdLetter
  }
  printInfo(finalValue)
  return finalValue
}

function printInfo(info){
  if (verbose) Logger.log(info)
}