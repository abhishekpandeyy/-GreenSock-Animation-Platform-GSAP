var tl=gsap.timeline({
    scrollTrigger:{
        trigger:'.page2',
        scroller:'body',
        // markers:true,
        start:'top 60%',
        end:'top -35%',
        scrub:1,
        // pin:true,
    },
})

tl.from('.left',{
    x:-300,
    duration:1.5,
    rotate:'-90deg',
    opacity:0,
    
},"runAtSameTime")

tl.from('.right',{
    x:300,
    duration:1.5,
    rotate:'90deg',
    opacity:0,
},"runAtSameTime")

tl.to('.circle',{
    scale:15,
    duration:1,

})

var text=document.querySelector('.page1 h1').textContent
var splittedText=text.split("")


var clutter="";
splittedText.forEach(function(data){
    clutter+=`<span>${data}</span>`;
})
// console.log(clutter)
document.querySelector('.page1 h1').innerHTML=clutter;
// console.log(text)

// var anime=document.querySelector('span')

gsap.to('h1 span',{
    color:"black",
    duration:1,
    // opacity:1,
    stagger:.2,
    delay:2,
    y:-30,
})


var t=document.querySelector('.page3 h2').textContent
var sp=t.split("")
var clut="";
sp.forEach(function(data){
    clut+=`<span>${data}</span>`;
})
document.querySelector('.page3 h2').innerHTML=clut;


gsap.to('h2 span',{
    scrollTrigger:{
        scroller:'body',
        trigger:'.page3',
        // markers:true,
        start:'top 45%',
        end:'top -25%',
        scrub:1,
        // pin:true,
    },
    color:"black",
    duration:.4,
    stagger:.1,
    // delay:3,
})