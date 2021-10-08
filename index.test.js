// describe('Mon super toto', function()  
// {  
// 	const cas1 = [1, 2, 3, 4 ,5]

//     it("Il y a le chiffre 1", function()   
//      {       	
//         expect(fb.printNumbers()).toEqual(1);  
//     });
// });


   
// const firstLancerTwo = require("./index");
const firstLancerOne = require("./index")

const dataOne = [
    {
        rolls: [1, 2, 3, 4, 5],
        result : 1,
    },
    {
        rolls: [2, 2, 3, 4, 5],
        result: 0,
    },
    {
        rolls: [1, 2, 1, 4, 5],
        result: 2,
    }
  ];

  describe.each(dataOne)(`nombre de un `, (one) => {
    it(`le résultat ${one.rolls} correspond à ${one.result}`, () => {
      const result = firstLancerOne(one.rolls);
      // const result = firstLancerOne([1,2,3,4,5]);
      const toto = 
      expect(result).toBe(one.result);
    });
  });