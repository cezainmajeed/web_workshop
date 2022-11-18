//day 1
let a=2;
let b=5;
console.log(a+b);
console.log(a-b);



let a=2;
let b=5;
console.log(a+b);
console.log(a-b);



let a=2;
let b=5;
console.log(a+b);
console.log(a-b);


// const car1 = {
//   color:"Red",
//   price:10000,
//   manufacturer:"Volvo"
// };

//name roll branch

const student={
  name:"Ram",
  rollNuber :77,
  branch:"ee",
  isInrolled:true
}

console.log(student.name);
console.log(student.rollNuber);
console.log(student.branch);

// console.log(car1.color);



if(condition)
{
  //body
} else{

}



for(initialization;condition;increment/decrement)
{
  //body
}

while(condition)
{
  //body
  increment/decrement;
}


for(let a=1;a<=10;a++)
  {
    console.log(a);
  }

let b=1;
while(b<=10)
  {
    console.log(b);
    b++;
  }


  function sumOfFirstNNumbers(n){
    let sum = 0;
    for(let i=1;i<=n;i++)
      {
        sum+=i;
      }
    console.log(sum);
  }

  sumOfFirstNNumbers(5);
  sumOfFirstNNumbers(10);
  sumOfFirstNNumbers(15);


  console.log(Math.floor(Math.random()*5)+1);


  /*
Generate a random number between 1 to 100.
A user has 100 chances to guess that random number.
if user guessed correct number print "Congratulations".
if user guessed greater number print "guess lesser".
if user guessed lesser number print "guess greater".
also print remaing no of chances.
*/

let num = Math.floor(Math.random()*100+1);
let chances = 0;
let a =-1;

while(a!=num && chances<100)
  {
    a = prompt("Enter your number");
    chances++;

    if(a==num)
    {
      console.log("Congratulations!");
    }
    else if(a>num)
    {
      console.log("Guess smaller no");
      console.log("You have "+(100-chances)+" chances left");
    }
    else{
      console.log("Guess greater no");
      console.log("You have "+(100-chances)+" chances left");
    }
  }

if(chances==100)
  console.log("Game Over");
