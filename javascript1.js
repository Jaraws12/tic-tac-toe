let x=prompt("Enter the plyer with o");
let y=prompt("Enter the player with x");
let p1=document.querySelector("#p1");
let p2=document.querySelector("#p2");
p1.innerText=x;
p2.innerText=y;
let table=document.querySelector(".table");
let boxes=document.querySelectorAll(".box");
let resrtbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newgame");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let turn0 =true;
//table.appendChild(p1);
//table.appendChild(p2);
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]; 
let cnt1=0;
let cnt2=0;
const showtable=(cnt1,cnt2)=>{
    p1.innerText=x+ cnt1;
    p2.innerText=y+ cnt2;
};
const enableboxes=()=>{
   // turn0=true;
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
   // enable();
};
const enable=()=>{
    turn0=true;
    enableboxes();
    msgcont.classList.add("hide");
    
};
const diableboxes =()=>{
    for(let b of boxes){
        b.disabled=true;
    }
};
const showwinner=(winner)=>{
    msg.innerText='congratulation, the winner is  '+winner;
    msgcont.classList.remove("hide");
    diableboxes();
};
const checkwinner=()=>{

for(let patterns of winpatterns){
    let pos1=boxes[patterns[0]].innerText;
    let pos2=boxes[patterns[1]].innerText;
    let pos3=boxes[patterns[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            if(pos1==="o"){
                cnt1++;
            showwinner(x);}
        else{
        cnt2++;
        showwinner(y);
        }
       
       
        }
        showtable(cnt1,cnt2);
    }
}
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="o";
            turn0=false;
        }
        else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
});

resrtbtn.addEventListener("click",enable);
newbtn.addEventListener("click",enable);
