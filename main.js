const prompt = require('prompt-sync')({sigint: true});

// let userPrompt = prompt('Enter a string: ');
// console.log("User string: " + userPrompt);

// let userNumber = Number(prompt("Enter a number"));
// console.log(userNumber);

/*
fish {
    ...name: string,
    ...weight: number,
    ...value: number,
}
*/


//for our descriptive words
// const fish = generateRandomFish();
// pick randomly from fish descriptors/types arrays
//2 descriptors and 1 fish type (= newFish.name?? or "name"?)
//2 array of descriptors 
let desc1 = ['brown', 'cold', 'polluted','tame', 'tiny', 'distinct', 'ugly', 'fat', 'hostile', 'aggressive']; 
let desc2 = ['lousy', 'mundane', 'warm-blooded', 'coy', 'flaky', 'freshwater', 'succulent', 'primitive', 'savory', 'menacing'];
//1 array of fish types
let fishType = ['Sword Fish', 'Atlantic Cod', 'Mackerel', 'Trout', 'Atlantic Salmon', 'Tuna', 'Shark', 'Red Mullet', 'Mahi-Mahi', 'Haddock'];

//hourCtr - variable to keep track of time (6 hr limit)
//loop to simulate the passage of time
let hourCtr = 1;

//fishKeep.length = totalLength
//variable for total pounds
let weightCtr = 0;
//variable for total values
let valueCtr = 0;

let fishName = "";
let newFish = {};
let userInput = '';
let userRelease = '';
let fishKeep = [];


console.log("You've gone fishing! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.");

console.log("\n==========================================\n");

let randomFish = () => {
    let fish = Math.ceil(Math.random() * 10);

    fishName = `${desc1[fish]} ${desc2[fish]} ${fishType[fish]}`;
    return fishName;
}

let randomWeight = () => {
    let weight = Math.ceil((Math.random() * 1000) / 100);
    return Number(weight);
}

let randomValue = () => {
    let value = Math.ceil((Math.random() * 1000) / 100)
}

let createFish = (name, weight, value) => {

    // let newFish = {
    //     name: name,
    //     weight: weight,
    //     value: value,
    // };
    let newFish = {};
    newFish.name = name;
    newFish.weight = weight;
    newFish.value = value;

    return newFish;
}

while (hourCtr < 7 && weightCtr < 10) {
    console.log(`That was attempt #: ${hourCtr}`);

    console.log(`\nIt is ${hourCtr + 5} O'Clock. You have ${fishKeep.length} fish, with a total weight of ${weightCtr} lbs, and worth $${valueCtr}\n`);


    if (hourCtr > 1) {
        userRelease = prompt("Would you like to keep (y) or release (n) that last Fish? >");

    console.log("\n\n");

    if (userRelease === "y") {
        weightCtr -= newFish.weight;
        valueCtr -= newFish.value;
        fishKeep.pop();
        console.log("\nWe won't count that Fish!\n")
        } else if (userRelease === "n") {
        console.log("\nThat's a good One!\n")
        }
    }

    console.log("\nFish Again!\n");

    newFish = createFish(randomFish(), randomWeight(), randomValue());
    console.log(newFish);
    fishKeep.push(newFish);

    console.log(`You got a ${newFish.name} that weighs ${newFish.weight} and is worth $${newFish.value}\n`);

    weightCtr += newFishweight;
    valueCtr += newFish.value;

    userInput = prompt("Would you like to [c]atch or [r]elease this one? > ");

    if (userInput === "c" && weightCtr > 10) {
        console.log("\nYou've gone over your weight limit\n");
        weightCtr -= newFish.weight;
        valueCtr -= newFish.value;
        fishKeep.pop();
        hourCtr++;

    } else if (userInput === "c" && weightCtr < 10) {
    console.log("\nThat's a good choice!\n");
    hourCtr++;

    } else if (userInput === "r") {
    console.log("\nWe'll let that one go...\n");
    weightCtr -= newFish.weight;
    valueCtr -= newFish.value;
    fishKeep.pop(newFish);
    hourCtr++;
    }

    console.log("This is what you have so far");

    for (let i = 0; i < fishKeep.length; i++) {
    console.log(`${fishKeep[i].name}, ${fishKeep[i].weight} lbs, $${fishKeep[i].value}`);
    }
}

console.log("\nGame Over!\n");
console.log(`You've caught ${fishKeep.length} fish!`);

console.log("Here are your stats:");
console.log(`Total Weight: ${weightCtr}`)
console.log(`Total Value: $${valueCtr}`)

