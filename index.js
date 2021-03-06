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

  // Brellan
  Brellan : function lancerbrellan(rolls) {
    return (data) => this.AllCalcule(rolls)(data) ? somme(data) : 0
  },

  // Carré
  Carre : function lancercarre(rolls) {
    return (data) => this.AllCalcule(rolls)(data) ? somme(data) : 0
  },

  // Full
  Full : function lacerfull() {
    return (this.FunctionComplexe(d => d.count === 3) && (this.FunctionComplexe(d => d.count === 2)) ? 25 : 0)
  },

  // Petite suite



  // Grande suite



  // Chance

Chance : function lancerchance(){
  return this.FunctionComplexe((current, previous) => previous+current,0)
},

  // Yahtzee

Yahtzee : function lanceryahtzee() {
  return this.FunctionComplexe(d => d.count === 5) ? 50 : 0
},

  FunctionSimple : function calculateNumber(rolls, value){
    let test = rolls.count(dice => dice == value);
    return value * test;
  },

  FunctionComplexe : function complexe(rolls, value) {
    return (data) => AllCalcule(data).somme(x => x.count >= rolls);
  },

  AllCalcule : function calcule(data) {
    const array = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
    data.forEach(indexDice => array[indexDice]++)
    return Object.keys(array).map(val => {return {value: val, count: array[val]}})
  }

}
