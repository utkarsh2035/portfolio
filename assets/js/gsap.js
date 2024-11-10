const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e)=>{
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration:.8,
        ease: "back.out"
    })
})
