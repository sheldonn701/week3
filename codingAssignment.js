/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. */
let ages =[3, 9, 23, 64, 2, 8, 28, 93,123];

/*Programmatically subtract the value of the first element in the array from the value in the last element of the array 
/* do not use numbers to reference the last element, find it programmatically, 
/*ages[7] – ages[0] is not allowed!*/
console.log(ages[ages.length-1] - ages[0]);
/*Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/
console.log(ages[ages.length-1] - ages[0])

/*Use a loop to iterate through the array and calculate the average age. */
let total = 0;
let avg = 0;
for(let i =0; i < ages.length; i++){
    total = total + ages[i];
}
avg = total/ages.length;
console.log(avg);




/*Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
/*Use a loop to iterate through the array and calculate the average number of letters per name.*/

let names =['Sam','Tommy','Tim','Sally','Buck','Bob'];
let namesTotal = 0;
let namesAvg = 0;
for(let i =0; i < names.length; i++){
    namesTotal = namesTotal + names[i].length;
}
namesAvg = namesTotal/names.length;
console.log(namesAvg);

/*Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. */
let result = "";

for(let i =0; i < names.length; i++){
    result = result + names[i] + " ";
}
console.log(result);

/*How do you access the last element of any array?*/
console.log(names[names.length - 1]);  // arr[arr.length -1]

/*How do you access the first element of any array?*/
// arr{[0]

/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.*/
let newNames = ['Mom','Dad','Nathan','Sheldon'];
let nameLengths = [];
for(let i = 0; i < newNames.length; i++){
    nameLengths.push(newNames[i].length);
}
console.log(nameLengths);

/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */
let sum = 0;
for( let x = nameLengths.length - 1; x >= 0; x--){
    sum += nameLengths[x];
}
console.log(sum);

/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/
function multiply(word, n){
    return word * n;
}
console.log (multiply('hello', 3));


/*Write a function that takes two parameters, firstName and lastName, and returns a full name.
/*The full name should be the first and the last name separated by a space.*/
function createFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
createFullName("sheldon", "nelson");


/*Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/
let numbers = [18, 51,99,1];
function sumA(a, b,c,d){
    if(a + b + c + d > 100);
    return 'true'
}

/*Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
function avgArr(a){
    let avg = (numbers / numbers.length)
    console.log(avg)
}
/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/
let num1 = [12,143,15];
let num2 =[11,15,17];
function twoArr(a){
    if((num1 / num1.length) > (num2 / num2.length))
    return "true";
}
/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === 0 + moneyInPocket >= 10.50)
    return true;  
    
}
/*Create a function of your own that solves a problem. 
/*In comments, write what the function does and why you created it.*/
// convert fahrenheit to celsius, made it because I wanted to know the differences between the two quickly// 
//(°F - 32) x 5/9
function convertToCelcius(f){
    return (f - 32) * (5/9);
}
console.log(convertToCelcius(70));



echo "# week3" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sheldonn701/week3.git
git push -u origin main