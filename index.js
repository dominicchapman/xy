const gender = require('gender');
const fs = require('fs');

fetchNames = () => {
  return fs.readFileSync('names.txt').toString().split('\n');
}

const names = fetchNames();

genders = () => {
  let female = 0;
  let male = 0;

  names.forEach(name => {
    if (gender.guess(name).gender === 'male') {
      male++;
    } else if (gender.guess(name).gender === 'female') {
      female++;
    } else {
      return;
    }
  })

  const total = female + male;
  const fPercent = ((female / total) * 100).toFixed(2);
  const mPercent = ((male / total) * 100).toFixed(2);

  console.log('female: ', fPercent, '%');
  console.log('male: ', mPercent, '%');
}

genders();