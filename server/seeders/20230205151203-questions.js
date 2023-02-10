module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Questions", [
      {
        id: 1,
        text: "The largest whole number less than 1000 is",
        options: JSON.stringify([
          { id: 0, text: "99", isCorrect: false },
          { id: 1, text: "990", isCorrect: false },
          { id: 2, text: "999", isCorrect: true },
          { id: 3, text: "999.9", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        text: "148 + 149 + 150 + 151 + 152",
        options: JSON.stringify([
          { id: 0, text: "740", isCorrect: false },
          { id: 1, text: "750", isCorrect: true },
          { id: 2, text: "760", isCorrect: false },
          { id: 3, text: "770", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        text: "Which is equal to 3?",
        options: JSON.stringify([
          { id: 0, text: "$3/3$", isCorrect: false },
          { id: 1, text: "6/3", isCorrect: false },
          { id: 2, text: "9/3", isCorrect: true },
          { id: 3, text: "12/3", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        text: "5 x 4 x 3 x 2 x 1 x 0",
        options: JSON.stringify([
          { id: 0, text: "0", isCorrect: true },
          { id: 1, text: "15", isCorrect: false },
          { id: 2, text: "120", isCorrect: false },
          { id: 3, text: "1200", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        text: "A rectangle has a length of 8cm and a width of 5cm. Find the perimeter of the rectangle.",
        options: JSON.stringify([
          { id: 0, text: "13cm", isCorrect: false },
          { id: 1, text: "26cm", isCorrect: true },
          { id: 2, text: "40cm", isCorrect: false },
          { id: 3, text: "80cm", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        text: "A baseball team won 4 games and lost 20. What fraction of its games did the team win?",
        options: JSON.stringify([
          { id: 0, text: "1/5", isCorrect: false },
          { id: 1, text: "1/4", isCorrect: false },
          { id: 2, text: "4/5", isCorrect: false },
          { id: 3, text: "1/6", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        text: "(3 x 4 x 5 x 6 x 7) / (7 x 6 x 5 x 4 x 3)",
        options: JSON.stringify([
          { id: 0, text: "0", isCorrect: false },
          { id: 1, text: "0.2520", isCorrect: false },
          { id: 2, text: "1", isCorrect: true },
          { id: 3, text: "2520", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        text: "0/10",
        options: JSON.stringify([
          { id: 0, text: "0.10", isCorrect: false },
          { id: 1, text: "1", isCorrect: false },
          { id: 2, text: "0.11", isCorrect: false },
          { id: 3, text: "0", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        text: "10 x 100 x 1000",
        options: JSON.stringify([
          { id: 0, text: "1 000 000", isCorrect: true },
          { id: 1, text: "11 000 000", isCorrect: false },
          { id: 2, text: "1 000 000 000", isCorrect: false },
          { id: 3, text: "111 000 000", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        text: "6 x 1/2 x 1/3",
        options: JSON.stringify([
          { id: 0, text: "6 + 6", isCorrect: false },
          { id: 1, text: "6 - 6", isCorrect: false },
          { id: 2, text: "6 x 6", isCorrect: false },
          { id: 3, text: "6/6", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        text: "The perimeter of an equilateral triangle is 24cm. The length of one side of this triangle is",
        options: JSON.stringify([
          { id: 0, text: "8cm", isCorrect: true },
          { id: 1, text: "12cm", isCorrect: false },
          { id: 2, text: "16cm", isCorrect: false },
          { id: 3, text: "72cm", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        text: "32/48",
        options: JSON.stringify([
          { id: 0, text: "2/3", isCorrect: true },
          { id: 1, text: "3/4", isCorrect: false },
          { id: 2, text: "5/6", isCorrect: false },
          { id: 3, text: "11/12", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        text: "0.91 + 0.19",
        options: JSON.stringify([
          { id: 0, text: "1.9", isCorrect: false },
          { id: 1, text: "1.1", isCorrect: true },
          { id: 2, text: "1.01", isCorrect: false },
          { id: 3, text: "1", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        text: "Of the following, which is the largest ?",
        options: JSON.stringify([
          { id: 0, text: "2.2", isCorrect: true },
          { id: 1, text: "2.02", isCorrect: false },
          { id: 2, text: "2.002", isCorrect: false },
          { id: 3, text: "2.00", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        text: "How many hundreds are there in 1 000 000 ?",
        options: JSON.stringify([
          { id: 0, text: "1 million", isCorrect: false },
          { id: 1, text: "1 thousand", isCorrect: false },
          { id: 2, text: "10 thousand", isCorrect: true },
          { id: 3, text: "100 thousand", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        text: "1/10 + 2/10 + 3/10 + 4/10",
        options: JSON.stringify([
          { id: 0, text: "1/4", isCorrect: false },
          { id: 1, text: "1/2", isCorrect: false },
          { id: 2, text: "9/10", isCorrect: false },
          { id: 3, text: "1", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        text: "Find the missing number: 1000 x 968 = 10 x ?",
        options: JSON.stringify([
          { id: 0, text: "0.968", isCorrect: false },
          { id: 1, text: "9.68", isCorrect: false },
          { id: 2, text: "96 800", isCorrect: true },
          { id: 3, text: "968 000", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        text: "0.1 + 0.3 + 0.5 + 0.7 + 0.9 has the same value as",
        options: JSON.stringify([
          { id: 0, text: "6 x 0.6", isCorrect: false },
          { id: 1, text: "5 x 0.5", isCorrect: true },
          { id: 2, text: "4 x 0.4", isCorrect: false },
          { id: 3, text: "3 x 0.3", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        text: "33 1/3% 0f 90 is",
        options: JSON.stringify([
          { id: 0, text: "18", isCorrect: false },
          { id: 1, text: "27", isCorrect: false },
          { id: 2, text: "30", isCorrect: true },
          { id: 3, text: "45", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        text: "The scale of a map is: 3/4 of an inch = 10 miles. If the distance on the map between two towns is 12 inches, the actual distance between the towns is",
        options: JSON.stringify([
          { id: 0, text: "90 miles", isCorrect: false },
          { id: 1, text: "120 miles", isCorrect: false },
          { id: 2, text: "150 miles", isCorrect: false },
          { id: 3, text: "160 miles", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        text: "Which number leaves a remainder of 1 when divided by 5 and also when divided by 7?",
        options: JSON.stringify([
          { id: 0, text: "153", isCorrect: false },
          { id: 1, text: "315", isCorrect: false },
          { id: 2, text: "351", isCorrect: true },
          { id: 3, text: "531", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        text: "Which of the following numbers is divisible by 3 ?",
        options: JSON.stringify([
          { id: 0, text: "11111", isCorrect: false },
          { id: 1, text: "1111111", isCorrect: false },
          { id: 2, text: "11111111", isCorrect: false },
          { id: 3, text: "111111111", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        text: "Sue has an average of exactly 84 after taking two tests. On the third test she scored 96. Find her average for all three tests.",
        options: JSON.stringify([
          { id: 0, text: "88", isCorrect: true },
          { id: 1, text: "90", isCorrect: false },
          { id: 2, text: "91", isCorrect: false },
          { id: 3, text: "92", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        text: "Find the missing number: 20/32 = ?/24",
        options: JSON.stringify([
          { id: 0, text: "15", isCorrect: true },
          { id: 1, text: "16", isCorrect: false },
          { id: 2, text: "17", isCorrect: false },
          { id: 3, text: "18", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        text: "In the number 987654321000, what digit is in the ten millions' place ?",
        options: JSON.stringify([
          { id: 0, text: "4", isCorrect: false },
          { id: 1, text: "5", isCorrect: true },
          { id: 2, text: "6", isCorrect: false },
          { id: 3, text: "7", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        text: "How many prime numbers are there between 20 and 30 ?",
        options: JSON.stringify([
          { id: 0, text: "1", isCorrect: false },
          { id: 1, text: "2", isCorrect: true },
          { id: 2, text: "3", isCorrect: false },
          { id: 3, text: "4", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        text: "1/4 + 0.75",
        options: JSON.stringify([
          { id: 0, text: "0.775", isCorrect: false },
          { id: 1, text: "0.95", isCorrect: false },
          { id: 2, text: "0.975", isCorrect: false },
          { id: 3, text: "1", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        text: "There is a balance scale. On one side is put a full brick. On the other side is put both a half-brick and a 6 lb. weight. Both sides now weigh the same. Find the weight of the full brick.",
        options: JSON.stringify([
          { id: 0, text: "3 lbs.", isCorrect: false },
          { id: 1, text: "6 lbs.", isCorrect: false },
          { id: 2, text: "9 lbs.", isCorrect: false },
          { id: 3, text: "12 lbs.", isCorrect: true },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        text: "1/2 % =",
        options: JSON.stringify([
          { id: 0, text: "0.5", isCorrect: false },
          { id: 1, text: "0.05", isCorrect: false },
          { id: 2, text: "0.005", isCorrect: true },
          { id: 3, text: "0.0005", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        text: "How many whole numbers from 1 to 100 contain the digit 2 exactly once ?",
        options: JSON.stringify([
          { id: 0, text: "9", isCorrect: false },
          { id: 1, text: "18", isCorrect: true },
          { id: 2, text: "19", isCorrect: false },
          { id: 3, text: "20", isCorrect: false },
        ]),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Questions", null, {});
  },
};