// var tableau = [];

// for (var i = 1; i < 6; i++){
//   tableau.push(i);
// }


// console.log(tableau)


Array.prototype.count = function(predicate = obj => true) {
  return this.filter(predicate).length;
};

function firstLancerOne(rolls){
  // if(rolls == 1){
  //     return 1
  // }
  // return 0
  return calculateNumber(rolls, 1)
}


function calculateNumber(rolls, value){
  console.log(rolls)
  let test = rolls.count(dice => dice == value);
  return value * test;
}


// function calculerLesLancer(){
//   if()
// }

module.exports = firstLancerOne;