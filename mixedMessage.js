// establish options to choose from
const days = ["Today", "Tomorrow", "Yesterday"];
const verb = ["is", "will be", "was"];
const adjective = ["great", "terrible", "mediocre"];
const hobbies = [
  "go for a run",
  "play soccer",
  "fly a kite",
  "practice coding",
  "dance",
  "try a new recipie",
];

// get random number for index
function getRandomNum(arr) {
  return Math.floor(Math.random() * arr.length);
}

//store random index
let d = getRandomNum(days);
let a = getRandomNum(adjective);
let h = getRandomNum(hobbies);

// create mixed message
function mixedMessage() {
  console.log(`${days[d]} ${verb[d]} a ${adjective[a]} day to ${hobbies[h]}.`);
}

// call mixed message
mixedMessage();
