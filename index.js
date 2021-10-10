module.exports ={
  Count : Array.prototype.count = function(predicate = obj => true) {
    return this.filter(predicate).length;
  },

  // Lancer 1
  One : function lancerUn(rolls){
    return this.FunctionSimple(rolls, 1)
  },

  // Lancer 2
  Two : function lancerdeux(rolls) {
    return this.FunctionSimple(rolls, 2)
  },

  // Lancer 3
  Three : function lancertrois(rolls) {
    return this.FunctionSimple(rolls, 3)
  },

  // Lancer 4
  Four : function lancerquatre(rolls) {
    return this.FunctionSimple(rolls, 4)
  },

  //Lancer 5
  Five : function lancercinq(rolls) {
    return this.FunctionSimple(rolls, 5)
  },

  //Lancer 6
  Six : function lancersix(rolls) {
    return this.FunctionSimple(rolls, 6)
  },




  FunctionSimple : function calculateNumber(rolls, value){
    let test = rolls.count(dice => dice == value);
    return value * test;
  },
}
