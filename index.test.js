const lancerUn = require("./index")

// 1
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
      const result = lancerUn(one.rolls);
      expect(result).toBe(one.result);
    });
  });

// 2 

// const dataTwo = [
//   {
//       rolls: [1, 2, 3, 4, 5],
//       result : 2,
//   },
//   {
//       rolls: [1, 3, 3, 4, 5],
//       result: 0,
//   },
//   {
//       rolls: [1, 2, 2, 4, 5],
//       result: 4,
//   }
// ];

// describe.each(dataTwo)(`nombre de deux `, (one) => {
//   it(`le résultat ${one.rolls} correspond à ${one.result}`, () => {
//     const result = firstLancerTwo(two.rolls);
//     expect(result).toBe(two.result);
//   });
// });