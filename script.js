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

    document.addEventListener("mousemove", function (e) {
        const glowTrail = document.createElement("div");
        glowTrail.style.position = "absolute";
        glowTrail.style.left = e.pageX + "px";
        glowTrail.style.top = e.pageY + "px";
        glowTrail.classList.add("mouse-glow");

        // Append the glow trail to the trail
        mouseTrail.appendChild(glowTrail);

        // Remove glow trail after the animation duration
        setTimeout(() => {
            glowTrail.remove();
        }, 500); // Adjusted the timeout to 500ms
    });
});






