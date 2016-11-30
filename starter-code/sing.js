var bottlesOfBeer = prompt("How many bottles of beer are on the wall?");
for (bottlesOfBeer; bottlesOfBeer >= 0; bottlesOfBeer--) {
  if (bottlesOfBeer > 2) {
    console.log(bottlesOfBeer + " bottles of beer on the wall," + '\n'
    + bottlesOfBeer + " bottles of beer!" + '\n'
    + "Take one down and pass it around," + '\n'
    + (bottlesOfBeer-1) + " bottles of beer on the wall!");
  } else if (bottlesOfBeer === 2){
    console.log(bottlesOfBeer + " bottles of beer on the wall," + '\n'
    + bottlesOfBeer + " bottles of beer!" + '\n'
    + "Take one down and pass it around," + '\n'
    + (bottlesOfBeer-1) + " bottle of beer on the wall!");
  } else if (bottlesOfBeer === 1) {
    console.log(bottlesOfBeer + " bottle of beer on the wall," + '\n'
    + bottlesOfBeer + " bottle of beer!" + '\n'
    + "Take one down and pass it around," + '\n'
    + "No more bottles of beer on the wall!");
  }
}
