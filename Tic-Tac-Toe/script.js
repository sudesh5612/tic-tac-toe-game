let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgame=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;// player x, player O

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    ];

    const restGame=()=>{
        turnO=true;
        enabledboxes(); 
        msgcontainer.classList.add("hide");
    };
    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            console.log("box was clicked");
            if(turnO){
               box.innerText="O" ;
               turnO=false;
            }else{
                box.innerText="X";
                turnO=true;
             }
             box.disabled=true;
             checkwinner();
        });
     } );
     const enabledboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText=" ";
        }
       }

       const disabledboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
       }
     const showwinner=(winner)=>{
            msg.innerText=`congratulations, winner is ${winner}`;
            msgcontainer.classList.remove("hide");
            disabledboxes();
     }
      let checkwinner=()=>{
        for(let pattern of winpatterns){
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
            if(pos1val!=""&&pos2val!=""&&pos3val!=""){
                if(pos1val===pos2val&&pos2val===pos3val){
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                    
                }
            }
        }
      }
      newgame.addEventListener("click",restGame);
      resetBtn.addEventListener("click",restGame);
      
      