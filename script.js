document.oncontextmenu = () => {
    alert("The codes are simple enough to be hidden :)")
    return false
}

document.onkeydown = e => {
    // Prevent F12 key
    if (e.key == "F12") {
        alert("The codes are simple enough to be hidden :)");
        return false;
    }

    // Prevent showing page source by ctrl U
    if (e.ctrlKey && e.key == "u") {
        alert("The codes are simple enough to be hidden :)");
        return false;
    }

    // Prevent copying from the page
    if (e.ctrlKey && e.key == "c") {
        alert("Hello, there's nothing to copy here :)");
        return false;
    }

    // Prevent pasting on the page
    if (e.ctrlKey && e.key == "v") {
        alert("Hello, there's no where you can paste it here :)");
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const mouseTrail = document.getElementById("mouse-trail");

    function addGlowTrail(e) {
        const glowTrail = document.createElement("div");
        glowTrail.style.position = "absolute";
        glowTrail.style.left = (e.pageX || e.touches[0].pageX) + "px";
        glowTrail.style.top = (e.pageY || e.touches[0].pageY) + "px";
        glowTrail.classList.add("mouse-glow");

        // Append the glow trail to the trail
        mouseTrail.appendChild(glowTrail);

        // Remove glow trail after the animation duration
        setTimeout(() => {
            glowTrail.remove();
        }, 500); // Adjusted the timeout to 500ms
    }

    document.addEventListener("mousemove", addGlowTrail);
    document.addEventListener("touchmove", function (e) {
        addGlowTrail(e.touches[0]);
    });
});


//For ALPHA animation
document.addEventListener("DOMContentLoaded", function () {
    const alphaAnimation = document.getElementById("alphaAnimation");
    const word = "ALPHA";
    let counter = 0;
    let scramble = setInterval(() => {
        let randomText = Math.random().toString(36).substring(7).toUpperCase();
        alphaAnimation.textContent = word.substring(0, counter) + randomText.substring(0, word.length - counter);
    }, 50);

    let reveal = setInterval(() => {
        if (counter < word.length) {
            counter++;
        } else {
            clearInterval(scramble);
            clearInterval(reveal);
        }
    }, 400);
});


  






