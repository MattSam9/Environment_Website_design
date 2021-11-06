const clouds = gsap.timeline();

clouds.from(".moving-cloud-1", {y:"-30%", x: "40%",
    scrollTrigger:{
    trigger: "#locations",
    start: "top-=300 center",
    end: "top enter",
    scrub:true
    },ease: "power1.inOut"}).fromTo(".moving-cloud-2", {y:"-10%", x: "10%",
    scrollTrigger:{
    trigger: "#locations",
    start: "top center",
    end: "center center",
    scrub: true,
    }, ease: "power1.inOut"},
    {y: "30%",x:"o", scrollTrigger:{
        trigger: "#locations",
        start: "top center",
        end: "center center",
        scrub: true,
        }, ease: "power1.inOut"
    }
);