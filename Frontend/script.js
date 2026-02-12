const mouseFollower=document.querySelector(".mouse-follower")
let x=0, y=0;
addEventListener("mousemove", (e) => {
    const {clientX, clientY}=e
    // mouseFollower.style.left=clientX+"px"
    // mouseFollower.style.top=clientY+"px"

    x=clientX
    y=clientY
    

})

function far(){
mouseFollower.style.transform=`translate(${x}px, ${y}px)`
requestAnimationFrame(far)
}
far()