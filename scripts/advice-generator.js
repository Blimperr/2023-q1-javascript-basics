let btn = document.getElementById("advice-button");
let output = document.getElementById("advice");

let advisors = [
"A wise man once told me",
"Mother always says",
"my uncle quandale dingle once said",
];

let howOften = [
"never",
"always",
"as often as you can",
"never ever",
"'who put a pipe bomb in my salad?' Anyways, always",
];

let verbs = [
    "run with",
    "swim with",
    "eat",
    "climb",
    "dance with",
];

let adjectives = [
    "spikey",
    "furry",
    "funny",
    "spicy",
    "loud",
    "scary",

];

let nouns = [
    "elephants",
    "humans",
    "nuclear bombs",
    "chainsaws",
    "computers",
    "video games",
    "rotating polsars",
];

let getRandomWord = function (a) {
    return a[getRandomIndex(a)];
};



let getRandomIndex = function (a) {
    let rand = Math.random() * a.length;
    return Math.floor(rand);
};

let generateAdvice = function(a,h,v, adj, n) {
    console.log(
        getRandomWord(a), 
        getRandomWord(h), 
        getRandomWord(v), 
        getRandomWord(adj), 
        getRandomWord(n)
    );
};

generateAdvice(advisors, howOften, verbs, adjectives, nouns)

let rand = Math.floor ( Math.random() * advisors.length);

let randAdvisor = advisors[rand];

rand = Math.floor ( Math.random() * howOften.length);
let randHowOften = howOften[rand];

rand = Math.floor ( Math.random() * verbs.length);
let randVerbs = verbs[rand];

rand = Math.floor ( Math.random() * adjectives.length);
let randAdjectives = adjectives[rand];

rand = Math.floor ( Math.random() * nouns.length);
let randNouns = nouns[rand];

console.log(randAdvisor, randHowOften, randVerbs, randAdjectives, randNouns);
btn.addEventListener("click", function () {
    // console.log("clicked!");
    generateAdvice(advisors, howOften, verbs, adjectives, nouns);
});