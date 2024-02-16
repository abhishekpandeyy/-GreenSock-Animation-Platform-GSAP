var h1=document.querySelector('.page2 h1').textContent;
// console.log(h1);
var arrOfWords=h1.split('')

var spanAdder=''
arrOfWords.forEach((elem)=>{
    spanAdder+=`<span>${elem}</span>`
})
document.querySelector('.page2 h1').innerHTML=spanAdder

// console.log(h1);
gsap.to('span',{
    scrollTrigger:{
        trigger:'.page2',
        pin:true,
        scrub:true,
    },
    stagger:.2,
    duration:1,
    color:'black',
})