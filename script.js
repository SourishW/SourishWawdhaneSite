function createDescribeInner(sourishName, describe) {
  return `${sourishName}<wbr><span class="red">${describe}</span>`;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("load", function () {
  const introduce = document.getElementById("sourishDescribeIntroduce");
  const introduceTextName = "Sourish";
  const introduceKeywordInner = ".introduce();";

  let introduceSourishIncomplete = "";
  let dotIntroduceIncomplete = "";

  let i = 0;
  let j = 0;

  function updateIntroduce() {
    if (i < introduceTextName.length) {
      introduceSourishIncomplete = introduceTextName.substring(0, i + 1);
      i++;
    } else if (j < introduceKeywordInner.length) {
      dotIntroduceIncomplete = introduceKeywordInner.substring(0, j + 1);
      j++;
    } else {
      clearInterval(intervalId); // Stop the animation when done
      sleep(300).then(() => {
        Array.from(document.getElementsByClassName("initiallyHide")).forEach(
          (element) => {
            element.style.visibility = "visible";
          }
        );
        introduce.innerHTML = createDescribeInner(
          introduceSourishIncomplete,
          dotIntroduceIncomplete
        );
      });

      return;
    }
    introduce.innerHTML = createDescribeInner(
      introduceSourishIncomplete,
      dotIntroduceIncomplete + "|"
    );
    console.log("still here");
    // Update the interval to a new random value
    clearInterval(intervalId);
    const newInterval = 100 * Math.random();
    intervalId = setInterval(updateIntroduce, newInterval);
  }

  // Initialize the interval with a random delay
  let intervalId = setInterval(updateIntroduce, 30 + 50 * Math.random());
});
