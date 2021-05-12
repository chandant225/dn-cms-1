//for scroll to top function
var myButton = document.getElementById('scrollTo-btn');
window.onscroll = function () {
    showScrollBtn();
}
function showScrollBtn() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

    } else {
        myButton.style.display = "none";
    }
}

// js for wave animation...
window.addEventListener("scroll", () => {
    const wave1 = document.getElementById('wave1');
    const wave2 = document.getElementById('wave2');
    const wave3 = document.getElementById('wave3');
    const wave4 = document.getElementById('wave4');
    const value = window.scrollY;
    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
})