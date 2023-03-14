let k=3;
let emptyBox=document.createElement('div');
let container=document.getElementById('container'); //kontejner za boxes
console.log(container);

emptyBox.classList.add("box");
let w=(640-(2*k))/k;
let h=(640-(2*k))/k;

emptyBox.style.height=h+"px";
emptyBox.style.width=w+"px";




for(let i=0;i<k*k;i++){
    const clone=emptyBox.cloneNode(true);
    clone.addEventListener('mouseover',function(e){
        this.style.backgroundColor="black";
    
    });
    container.appendChild(clone);
}

function setSize(){
    k=prompt("Enter a size below 64");
    container.innerHTML=" ";
    let w=(640-(2*k))/k;
let h=(640-(2*k))/k;

emptyBox.style.height=h+"px";
emptyBox.style.width=w+"px";




for(let i=0;i<k*k;i++){
    const clone=emptyBox.cloneNode(true);
    clone.addEventListener('mouseover',function(e){
        this.style.backgroundColor="black";
    
    });
    container.appendChild(clone);
}
}
