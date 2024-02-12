

var tl=gsap.timeline();

// tl.from('img',{
//     opacity:0,
//     duration:2,
//     y:600,
//     scale:.3
// })

tl.to('img',{
    y:400,
    duration:2,
    // delay:5,  ab is ka kaam stagger krega re baba
    scale:1.1,
    stagger:.3,
    repeat:-1,
    yoyo:true, // ye ussi same cheez ko pehle seedhe chalta h phir reverse dir me
})

