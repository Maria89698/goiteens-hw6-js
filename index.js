// #1
const hello1 = function () {
    return 'Привіт JavaScript';
}

console.log(hello1());

// #2
const hello2 = function (name) {
    console.log('Привіт,' + $(name));
}

hello2("Василь");

// #3
const nul = function (m, n) {
    console.log(m + n);
    console.log(m * n);
    console.log(m - n);
}

// #4
const myNewArrowFunction = (...rest) => {
    console.log(rest);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// #5

const myAverageScore = (...args) => {
    let score = 0;
    for (const element of args) {
        console.log(element);
        score += element
    }
    score = score / args.length;
    if (score <= 100 && score >=91){
        return "My average score A";
    } else if (score <= 90 && score >=81){
        return "My average score B";
    } else if (score <= 80 && score >=71){
        return "My average score C";
    } else if (score <= 70) {
        return "My average score D";
    }
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));