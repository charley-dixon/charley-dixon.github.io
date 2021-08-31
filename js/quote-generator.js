let quotes = {
  "Muriel Rukeyser": ["The universe is made of stories, not of atoms."],
  "Frank Herbert": ["The mystery of life isn't a problem to solve, but a reality to experience."],
  "Voltaire": ["Perfect is the enemy of good."],
  "Napoleon Hill": ["Both success and failure are largely the results of HABIT!"],
  "Marcus Aurelius": ["You have power over your mind - not outside events. Realize this, and you will find strength."]
}

function newQuote() {
  let people = Object.keys(quotes);
  // generate a number to grab a random person
  let randomPersonNumber = Math.floor(Math.random() * people.length);
  let person = people[randomPersonNumber];
  // generate a number to grab a quote from that person
  let randomQuoteNumber = Math.floor(Math.random() * quotes[person].length);
  let quote = quotes[person][randomQuoteNumber];
  document.getElementById('quote-display').innerHTML = `"${quote}"`;
  document.getElementById('person-display').innerHTML = `— ${person}`;
}

document.getElementById("quote-generator").addEventListener("click", newQuote);
