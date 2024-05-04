document.oncontextmenu = () => {
  //alert("The codes are simple enough to be hidden :)");
  return false;
};

document.onkeydown = (e) => {
  // Prevent F12 key
  if (e.key == "F12") {
    //alert("The codes are simple enough to be hidden :)");
    return false;
  }

  // Prevent showing page source by ctrl U
  if (e.ctrlKey && e.key == "u") {
    //alert("The codes are simple enough to be hidden :)");
    return false;
  }

  // Prevent copying from the page
  if (e.ctrlKey && e.key == "c") {
    //alert("Hello, there's nothing to copy here :)");
    return false;
  }

  // Prevent pasting on the page
  if (e.ctrlKey && e.key == "v") {
    //alert("Hello, there's no where you can paste it here :)");
    return false;
  }
};

//For ALPHA animation
document.addEventListener("DOMContentLoaded", function () {
  const alphaAnimation = document.getElementById("alphaAnimation");
  const word = "Release Preview";
  let counter = 0;
  let scramble = setInterval(() => {
    let randomText = Math.random().toString(36).substring(7).toUpperCase();
    alphaAnimation.textContent =
      word.substring(0, counter) +
      randomText.substring(0, word.length - counter);
  }, 50);

  let reveal = setInterval(() => {
    if (counter < word.length) {
      counter++;
    } else {
      clearInterval(scramble);
      clearInterval(reveal);
    }
  }, 70);
});
