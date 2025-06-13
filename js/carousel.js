gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: '.horizontal',
    start: 'center center',
    end: '+=3000px',
    pinSpacing: false,
    pin: '#horizontal-scoll',
    scrub: 0.5,
    invalidateOnRefresh: true
    
  }
  
});

