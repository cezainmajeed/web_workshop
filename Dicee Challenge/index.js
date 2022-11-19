//alert("hello")
let a=Math.floor(Math.random()*6+1);
let b=Math.floor(Math.random()*6+1);

let img1 = "images/dice"+a+".png";
// images/dice5.png
let img2 = "images/dice"+b+".png";

let heading=document.getElementById("change");

document.getElementById("image1").setAttribute("src",img1);
document.getElementById("image2").setAttribute("src",img2);

if(a>b)
{
  heading.innerHTML="Player1 Win";
}
else if(a<b)
{
  heading.innerHTML="Player2 Win";
}
else{
  heading.innerHTML="Draw";

}
