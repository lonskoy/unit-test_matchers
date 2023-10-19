import healthAll from "../matchers";

test('Test Sort Health', () => {

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

 const testData = healthAll(test);

for (let i = 0; i < testData.length; i++) {
    expect(testData[i].health).toEqual(result[i].health);
  }
});