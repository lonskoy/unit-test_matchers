const healthAll = require('./sort.test');

const test = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];

const result = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}
  ];

test('Test Sort Health', () => {
 const testData = healthAll(test);
 expect(testData).toEqual(result);
});