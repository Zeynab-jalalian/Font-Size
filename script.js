let txt=document.querySelector('p');
let btn=document.querySelectorAll('.btn');
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        txt.style.fontSize=btn[i].innerHTML;
    })
}