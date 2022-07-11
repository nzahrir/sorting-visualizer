import getQuickSortAnimation from "./getQuickSortAnimation";
import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";
import { quickSortIterative } from "./getQuickSortAnimation";

const QuickSort = (array, low, high, animationSpeed) => {
  // Disabling the buttons so that the animation cannot be interrupted.
  disableButtons();

  // Getting the animations which has been generated in the "getInsertionSortAnimations" function.
  const animations = quickSortIterative(array, 0, 9);

  for (let i = 0; i < animations.length; i += 3) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      doSwap = animations[i + 2];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of comparing elements.
        changeBackgroundColor(comparingElement1, "rgba(255,165,0, 0.9)");
        changeBackgroundColor(comparingElement2, "rgba(255,165,0, 0.9)");

        if (doSwap === 1) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          changeBackgroundColor(comparingElement2, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
          swapBars(comparingElement1, comparingElement2);
        } else if (doSwap === 2) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(comparingElement1, "rgba(0,0,0, 0.9)");
        }
      }, i * animationSpeed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

    promise1.then(console.log(animations)).then(enableButtons);

    // Promise.all([promise1])
    //   .then(playCompletedSoundEffect)
    //   // Enabling the buttons when both the promises have been resolved.
    //   .then(enableButtons);
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 4) * animationSpeed);
};

export default QuickSort;
