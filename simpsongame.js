let gameseq=[];
let userseq=[];
let btns=["yellow","red","green","purple"]
let level=0;
let started=false;
let highScore=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
    
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300)

}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);
    gameseq.push(randColor)
    console.log(gameseq)


    gameflash(randBtn);
}

function checkAns(idx){
    // console.log("curr  level",level)
    // let idx = level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup ,1000)
            
        }
    }else{
        if (level > highScore) { // check and update high score
        highScore = level;
        }

        h2.innerHTML=`game is over ! your score is <b>${level}</b><br>Highest Score: <b>${highScore}</b><br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        restart();
}


}

function btnPress(){
    // console.log(this)
    let btn=this;
    userflash(btn)

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor)
    
    checkAns(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress)
}

function restart(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];

}