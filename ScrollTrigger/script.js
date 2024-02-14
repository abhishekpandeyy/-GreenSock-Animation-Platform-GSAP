// alert("hey")

gsap.to(".page2",{
    scrollTrigger:{
        start:"top 90%",
        trigger:'img',
        scroller:"body",
        markers:true,
        scrub:true,
        // pin:true,
        width:100,
    },
})