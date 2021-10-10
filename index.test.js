const lancerUn = require("./index")
const lancerdeux = require("./index")
const lancertrois = require("./index")
const lancerquatre = require("./index")
const lancercinq = require("./index")
const lancersix = require("./index")
const lancerbrellan = require("./index")
const lancercarre = require("./index")
const lancerfull = require("./index")
const lancerchance = require("./index")

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

// 5

const dataFive = [
  {
      rolls: [1, 2, 3, 4, 5],
      result : 5,
  },
  {
      rolls: [1, 5, 4, 4, 5],
      result: 10,
  },
  {
      rolls: [1, 1, 2, 3, 4],
      result: 0,
  }
];

describe.each(dataFive)(`nombre de cinq `, (five) => {
  it(`le résultat ${five.rolls} correspond à ${five.result}`, () => {
    const result = lancercinq.Five(five.rolls);
    expect(result).toBe(five.result);
  });
});

// 6

const dataSix = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 6,
  },
  {
      rolls: [1, 6, 4, 6, 5],
      result: 12,
  },
  {
      rolls: [1, 1, 2, 3, 4],
      result: 0,
  }
];

describe.each(dataSix)(`nombre de six `, (six) => {
  it(`le résultat ${six.rolls} correspond à ${six.result}`, () => {
    const result = lancersix.Six(six.rolls);
    expect(result).toBe(six.result);
  });
});

// Brelan

const dataBrelan = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 0,
  },
  {
      rolls: [1, 1, 1, 2, 3],
      result: 8,
  },
  {
      rolls: [6, 6, 6, 2, 5],
      result: 25,
  }
];

describe.each(dataBrelan)(`Brellan`, ({rolls, result}) => {
  it(`Score ${rolls} le nombre de point est de ${result}`, () => {
    const result = lancerbrellan.Brellan('brellan', rolls);
    expect(result).toBe(result);
  })
})

// Carré

const dataCarre = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 0,
  },
  {
      rolls: [1, 1, 1, 1, 3],
      result: 7,
  },
  {
      rolls: [6, 6, 6, 6, 5],
      result: 29,
  }
];

describe.each(dataCarre)(`Carré`, ({rolls, result}) => {
  it(`Score ${rolls} le nombre de point est de ${result}`, () => {
    const result = lancercarre.Carre('carré', rolls);
    expect(result).toBe(result);
  })
})

// Full

const dataFull = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 0,
  },
  {
      rolls: [1, 1, 1, 3, 3],
      result: 25,
  },
  {
      rolls: [6, 6, 6, 6, 5],
      result:0,
  }
];

describe.each(dataFull)(`Full`, ({rolls, result}) => {
  it(`Score ${rolls} le nombre de point est de ${result}`, () => {
    const result = lancerfull.Full('full', rolls)
    expect(result).toBe(result);
  });
});

// Petite Suite

const dataSmall = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 0,
  },
  {
      rolls: [1, 2, 3, 4, 3],
      result: 30,
  },
  {
      rolls: [1, 3, 4, 5, 6],
      result: 30,
  }
];

// Grande Suite

const dataBig = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 0,
  },
  {
      rolls: [1, 2, 3, 4, 5],
      result: 40,
  },
  {
      rolls: [2, 3, 4, 5, 6],
      result: 40,
  }
];

// Chance

const dataChance = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 17,
  },
  {
      rolls: [1, 1, 1, 1, 3],
      result: 7,
  },
  {
      rolls: [6, 6, 6, 6, 5],
      result: 29,
  }
];

describe.each(dataChance)(`Full`, ({rolls, result}) => {
  it(`Score ${rolls} le nombre de point est de ${result}`, () => {
    const result = lancerchance.Chance('Chance', rolls)
    expect(result).toBe(result)
  })
})

// Yahtzee

const dataYahtzee = [
  {
      rolls: [1, 2, 3, 6, 5],
      result : 0,
  },
  {
      rolls: [1, 1, 1, 1, 1],
      result: 50,
  },
  {
      rolls: [6, 6, 6, 6, 6],
      result: 50,
  }
];