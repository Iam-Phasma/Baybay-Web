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