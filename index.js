module.exports ={
  Count : Array.prototype.count = function(predicate = obj => true) {
    return this.filter(predicate).length;
  },

  // Lancer 1
  One : function lancerUn(rolls){
    return calculateNumber(rolls, 1)
  },

  // Lancer 2
  Two : function lancerdeux(rolls) {
    return calculateNumber(rolls, 2)
  },




  FunctionPrincipale : function calculateNumber(rolls, value){
    let test = rolls.count(dice => dice == value);
    return value * test;
  },
}
