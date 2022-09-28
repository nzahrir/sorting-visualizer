import {
  changeBackgroundColor,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  resetSingleBarStyleDefault,
} from "../../HelperFunctions.js";
import { quickSortIterative } from "./getQuickSortAnimation";

const QuickSort = (array, low, high, animationSpeed) => {
  // Disabling the buttons so that the animation cannot be interrupted.
  disableButtons();

  // Getting the animations which has been generated in the "getInsertionSortAnimations" function.
  console.log(array);
  const animations = quickSortIterative(array, low, high);

  for (let i = 0; i < animations.length; i += 3) {
    const comparingElement1 = animations[i],
      comparingElement2 = animations[i + 1],
      doSwap = animations[i + 2];

    // Here, promise has been used to know when to Enable Buttons again after the setTimeout ends.
    const promise1 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        // Changing the color-bar of comparing elements.
        if (doSwap === 0) {
          swapBars(comparingElement1, comparingElement2);
        } else if (doSwap === 1) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(comparingElement1, "rgba(144,238,144, 0.9)");
          // Actually swapping the elements (heights).
        } else if (doSwap === 2) {
          // Changing the color-bar of elements which has to be swapped.
          changeBackgroundColor(comparingElement1, "rgba(255, 48, 79, 1)");
        } else if (doSwap === 3) {
          // Changing the color-bar of elements
          changeBackgroundColor(comparingElement1, "rgba(102, 51, 153, 1)");
          changeBackgroundColor(comparingElement2, "rgba(102, 51, 153, 1)");
        } else if (doSwap === 4) {
          resetSingleBarStyleDefault(comparingElement1);
        } else if (doSwap === 5) {
          // (207, 47, 116)
          changeBackgroundColor(comparingElement2, "rgba(207, 47, 116, 0.6)");
        }
      }, i * animationSpeed);

      // Resolving the promise after the setTimeout ends.
      resolve();
    });

    promise1.then(enableButtons);

    // Promise.all([promise1])
    //   .then(playCompletedSoundEffect)
    //   // Enabling the buttons when both the promises have been resolved.
    //   .then(enableButtons);
  }

  // Resetting the color-bar style to default after the animations end.
  resetBarStyleDefault(array, (animations.length + 4) * animationSpeed);
};

export default QuickSort;
