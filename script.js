 let input1 = document.querySelector(".questionOne");
let input2 = document.querySelector(".questionTwo");
let button = document.querySelector("button");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let pic = document.querySelector(".pic");



button.onclick = function () {
  console.log("button check");

  let answer1 = input1.value;
  console.log(answer1);

  let answer2 = input2.value;
  console.log(answer2);

  if (answer1 === "Funny" && answer2 === "Fish") {
    console.log("Darwin");
   document.getElementById("h2").innerHTML = "Darwin is your character";
    pic.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutMuDDZXX6GCAI1HekY_rhwrxSz5jmzSbQ9g4ZJtykW2saQaw:https://m.media-amazon.com/images/S/pv-target-images/6b2fd40127c8d48796c81a8860954bd449969559f8f36839cff91ddfbc889248._SX1080_FMjpg_.jpg&s";
  }

  if (answer1 === "Smart" && answer2 === "Rabbit") {
    console.log("Anais");
      document.getElementById("h2").innerHTML = "Anais is your character!";
    pic.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAshV5ULyKnUcHnU3bhXeK08GrHZGGfHmxplx6hzCOE-3w2ndc:https://www.superherodb.com/pictures2/portraits/10/050/24752.jpg%3Fv%3D1621678367&s";
  }

  if (answer1 === "Caring" && answer2 === "Cat") {
    console.log("quattro");
     document.getElementById("h2").innerHTML = "Nicole is your character!";
      
    pic.src =
"https://i.pinimg.com/736x/c4/54/9a/c4549a604a69da3f99d7c0957d037385.jpg";
  }

  if (answer1 === "Silly" && answer2 === "Rabbit") {
    console.log("Richard");
    document.getElementById("h2").innerHTML = "Richard is your character";
    pic.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvC3wCIoV8MAeCHFsl5LVKgrZV8azyeS25G0rebmJ0FSHw4eI:https://static.wikia.nocookie.net/warner-bros-entertainment/images/5/5a/Season_3_Richard.png/revision/latest%3Fcb%3D20171004232626&s";
  }
  if (answer1 === "Outgoing" && answer2 === "Cat") {
    console.log("Gumball");
           document.getElementById("h2").innerHTML = "Gumball is your character!";
    pic.src =
      "https://i.pinimg.com/736x/38/3b/ee/383beea690bbec590b2e02bbfd599c98.jpg";
  }

};