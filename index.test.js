const lancerUn = require("./index")
const lancerdeux = require("./index")
const lancertrois = require("./index")
const lancerquatre = require("./index")

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
      const result = lancerUn.One(one.rolls);
      expect(result).toBe(one.result);
    });
  });

// 2 

const dataTwo = [
  {
      rolls: [1, 2, 3, 4, 5],
      result : 2,
  },
  {
      rolls: [1, 3, 3, 4, 5],
      result: 0,
  },
  {
      rolls: [1, 2, 2, 4, 5],
      result: 4,
  }
];

describe.each(dataTwo)(`nombre de deux `, (two) => {
  it(`le résultat ${two.rolls} correspond à ${two.result}`, () => {
    const result = lancerdeux.Two(two.rolls);
    expect(result).toBe(two.result);
  });
});

// 3

const dataThree = [
  {
      rolls: [1, 2, 3, 4, 5],
      result : 3,
  },
  {
      rolls: [1, 3, 3, 4, 5],
      result: 6,
  },
  {
      rolls: [1, 2, 2, 4, 5],
      result: 0,
  }
];

describe.each(dataThree)(`nombre de trois `, (three) => {
  it(`le résultat ${three.rolls} correspond à ${three.result}`, () => {
    const result = lancertrois.Three(three.rolls);
    expect(result).toBe(three.result);
  });
});

// 4

const dataFour = [
  {
      rolls: [1, 2, 3, 4, 5],
      result : 4,
  },
  {
      rolls: [1, 3, 4, 4, 5],
      result: 8,
  },
  {
      rolls: [1, 1, 2, 3, 5],
      result: 0,
  }
];

describe.each(dataFour)(`nombre de quatre `, (four) => {
  it(`le résultat ${four.rolls} correspond à ${four.result}`, () => {
    const result = lancerquatre.Four(four.rolls);
    expect(result).toBe(four.result);
  });
});