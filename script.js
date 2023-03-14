let k=22;
let emptyBox=document.createElement('div');
emptyBox.classList.add("box");
let w=(640-(2*k))/k;
let h=(640-(2*k))/k;

emptyBox.style.height=h+"px";

emptyBox.style.width=w+"px";

console.log(emptyBox.style.width);
for(let i=0;i<k*k;i++){
    const clone=emptyBox.cloneNode(true);
    container.appendChild(clone);
}

