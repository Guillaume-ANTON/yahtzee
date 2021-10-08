// describe('Mon super toto', function()  
// {  
// 	const cas1 = [1, 2, 3, 4 ,5]

//     it("Il y a le chiffre 1", function()   
//      {       	
//         expect(fb.printNumbers()).toEqual(1);  
//     });
// });

const firstLancerOne = require("./index.js")

const data = [
    {
        sides: [1, 2, 3, 4, 5],
        result : 1,
    },
    {
        sides: [2, 2, 3, 4, 5],
        result: 0,
    },
    {
        type: 'result2',
        sides: [1, 2, 1, 4, 5],
    },
  ];

  describe.each(data)(`nombre de un `, (one) => {
    it(`le résultat ${one.sides} correspond à ${one.result}`, () => {
      const result = firstLancerOne(...one.sides);

      expect(result).toBe(one.result);
    });
  });