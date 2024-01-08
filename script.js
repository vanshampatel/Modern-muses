function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

var tl3 = gsap.timeline()
tl3.from(".text h1",{
    y:"100%",
    duration:1,
    stagger:.3,
})

gsap.from(".video-img>img",{
    repeat:-1,
    opacity:0,
    scale:6,
    duration:8,
    stagger:.5,
})
gsap.to(".round-img>img",{
    repeat:-1,
    rotate:"360",
    duration:50,
    pin:true,
})
var tl = gsap.timeline()
tl.to(".firstpopup",{
    scale:0.8,
    y:"10%",
    top:"-3%",
    left:"15%",
    rotate:10,
    scrollTrigger:{
        trigger:".popup",
        scroller:"#main",
        start:"top 50%",
        end:"top 55%",
        scrub:4,
        pin:true,
    }
})
tl.to(".secondpopup",{
    y:"10%",
    top:"-1%",
    left:"15%",
    rotate:-10,
    scale:0.8,
    scrollTrigger:{
        trigger:".popup",
        scroller:"#main",
        start:"top 30%",
        end:"top 60%",
        scrub:4,
        pin:true,
    }
})
tl.to(".thirdpopup",{
    y:"10%",
    top:"0%",
    left:"15%",
    scale:0.8,
    scrollTrigger:{
        trigger:".popup",
        scroller:"#main",
        start:"top 20%",
        end:"top 60%",
        scrub:4,
        pin:true,
    }
})
var tl2 = gsap.timeline()
tl2.from(".page5-mid h1, .page5-mid2 h1",{
    y:"100%",
    stagger:.4,
    duration:4,
    scrollTrigger:{
        trigger:".page5-mid, .page5-mid, .page5-mid2",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 100%",
        scrub:3,
        pin:true,
    }
})
gsap.to(".lines, .line1, .line2 ",{
    transform:"translateX(-120%)",
    duration:5,
    stagger:.5,
    scrollTrigger:{
      trigger:".lines",
      scroller:"#main",
    //   markers:true,
      start:"top 30%",
      end:"top -100%",
      scrub:5,
      pin:true,
    }
  })
gsap.to(".video-abso, .video-div",{
    y:"10%",
    scale:0.9,
    top:"10%",
    right:"25%",
    scrollTrigger:{
        trigger:".video-abso, .video-div",
        scroller:"#main",
        // markers:true,
        start:"top 10%",
        end:"top 60%",
        scrub:5,
        pin:true,
    }
})
var tl4 = gsap.timeline()
tl4.from(".boxes",{
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:".boxes",
        scroller:"#main",
        // markers:true,
        start:"top 30%",
        end:"top 80%",
        scrub:1,
        pin:true,
    }
})
tl4.from(".boxes-1",{
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:".boxes-1",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 60%",
        scrub:1,
        pin:true,
    }
})
tl4.from(".boxes-2",{
    opacity:0,
    scale:0.5,
    scrollTrigger:{
        trigger:".boxes-2",
        scroller:"#main",
        // markers:true,
        start:"top 40%",
        end:"top 70%",
        scrub:1,
        pin:true,
    }
})
gsap.to(".circle>img",{
    repeat:-1,
    rotate:"360",
    duration:50,
    pin:true,
})