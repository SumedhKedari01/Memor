let gameSeq =[];
let userSeq=[];

let stared = false;
let level = 0;
let h2 =document.querySelector("h3");
let higest = 0;

let color = ["red","yellow","green","blue"];

document.addEventListener("keypress",function()
{
    if(stared == false)
    {
        h2.innerText = "game started";
        stared = true;
    }

    levelUp();
})

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");

    },250);
}

function userFlash(btn)
{

    btn.classList.add("userFlash");
    setTimeout(function()
    {
        btn.classList.remove("userFlash");

    },250);

}
function levelUp()
{
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

   // get remdom 

   let ram = Math.floor(Math.random()*4); // btwn 0 to 3
   let inxRam = color[ram]; // get color of that index form color array
   let className = document.querySelector(`.${inxRam}`); //select the class of the color name

   gameSeq.push(inxRam);
    gameFlash(className);

}

function checkAns(idx)
{
    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx])
    {
       if(userSeq.length == gameSeq.length)
       {
       setTimeout(levelUp,500);
       }
    }
    else{
        if(gameSeq.length > higest)
        {
            higest = gameSeq.length;
        }
        h2.innerHTML = `Game Over Your score was <b>${level}</b> <br>Press Any key to Start <br> the higest is ${higest} `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
      
        reset();
    }
}

function reset()
{
    stared = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function butPress()
{
  let btn = this;
  userFlash(btn);
  let btnColor = btn.getAttribute("id");
//   console.log(btnColor);
userSeq.push(btnColor);
 checkAns(userSeq.length-1);

    
}
let btns = document.querySelectorAll(".btn");
for(but of btns)
{
    but.addEventListener("click",butPress);
}