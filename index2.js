const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(trainingData, {
  iterations: 2000
});

// const result = network.run('I fixed the power supply'); // prints hardware
const result = network.run('The code has some bugs'); // prints software

console.log(`Category: ${result}`);
