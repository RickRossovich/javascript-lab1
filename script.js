let name = "Andre Jackson";
let age = 33;
let birthday = "February 23";
let detroitGC = true;
let lifeEvents = [
  "I was born in Detroit.",
  "I graduated from Wayne State.",
  "I bought a drum kit at 26.",
  "I played trumpet in Jazz band, in high school."
];

if (detroitGC === true) {
  console.log(
    `"My name is ${name}, and I am a student at Grand Circus, in Detroit, Michigan. I am currently ${age}, and my birthday is on ${birthday}"`
  );
} else {
  console.log(
    `"My name is ${name}, and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age}, and my birthday is on ${birthday}"`
  );
}

for (let lifeEvent of lifeEvents) {
  console.log(lifeEvent);
}

let randomNumber = Math.floor(Math.random() * 10 + 1);

while (true) {
  if (randomNumber !== 5) {
    console.log("randomNumber !== 5");
    break;
  } else {
    console.log(
      "5 === 5. it took 4 iterations to randomly generate the number 5"
    );
  }
}
