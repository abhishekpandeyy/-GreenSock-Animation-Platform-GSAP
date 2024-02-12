var time=gsap.timeline();
// var elems=document.querySelector('#window h1');
gsap.from("#window h1",{
    x:300,
    duration:1,
    stagger:1
})

gsap.to("#window h1",{
    x:300,
    duration:3,
    stagger:1,
    delay:5
})
