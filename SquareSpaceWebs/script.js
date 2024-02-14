var fS=gsap.timeline();

fS.from('.navi',{
    y:-90,
    stagger:.3,
    duration:.8,
    // scrub:true,
    // yoyo:true,
    // repeat:-1,
})

fS.from('.m',{
    opacity:0,
    y:70,
    stagger:.5,
    duration:.99,
    // scrub:true,
})

fS.from('.midBTN',{
    scale:.8,
    // stagger:.5,
    duration:.99,
    // scrub:true,
})



