// ---------------------------------------Start game-----------------------------
document.querySelector('.start-game span').onclick = function(){
    let youname = prompt('enter your name');
    blockarr.forEach((e)=>{  // flipped blocks for 2 sec for the user to save it      
        e.classList.add('is-flipped');
        setTimeout(() => {
            e.classList.remove('is-flipped');
        
        }, 2000);
            

    });
    if(youname == null || youname ==''){ // check the user enters her name or not
        document.querySelector('.info-container .name span').innerHTML = 'Uknown';
    }
    else{
        document.querySelector('.info-container .name span').innerHTML = youname;

    }
    document.querySelector('.start-game').remove();
    
}
// ----------------------------------------Game play---------------------------------
let deuration = 1000;
let gameblockcont = document.querySelector('.game-blocks');
let gameBlocks = document.querySelectorAll('.game-block');
let blockarr = Array.from(gameBlocks);
let orderRaneg = [...blockarr.keys()];
shuffel(orderRaneg);
// -----------------loop on all blocks 
blockarr.forEach((block ,i)=>{ 
    block.style.order = orderRaneg[i];
    block.addEventListener('click',()=>{
        flipped(block);
        
        

    });
    
    
});
// ---------------------------------------shuffel function

function shuffel(arr){
    let temp, 
    current = arr.length , 
    randume;
    while(current>0){
        current--;
        randume = Math.floor(Math.random() * current);        
        temp = arr[current];
        arr[current] = arr[randume];
        arr[randume] = temp;
        
        }
    return arr;

        

        
    }
// -------------------------------------flipped function------------------------
function flipped(slectblock){
    slectblock.classList.add('is-flipped');
    let allflippedblocks = blockarr.filter(flippedblock => flippedblock.classList.contains('is-flipped'));
    if(allflippedblocks.length === 2){
        
        
        stopclickin();
        matchblock(allflippedblocks[0],allflippedblocks[1]);
    }

}
// function to stop when player open 2 block
function stopclickin(){    
    gameblockcont.classList.add('no-clicking');
    setTimeout(()=>{

        gameblockcont.classList.remove('no-clicking');
    },deuration)
    


}
// function to match 2 block
function matchblock(block1,block2){
    let tries = document.querySelector('.tries span');
    if(block1.dataset.devices === block2.dataset.devices){
        

    }
    else{           
        tries.innerHTML = parseInt(tries.innerHTML) + 1;        
        
        setTimeout(()=>{
            let erro = alert(' حمرا ركز ياعلق');
            block1.classList.remove('is-flipped');
            block2.classList.remove('is-flipped');
        },deuration)
    }
}

