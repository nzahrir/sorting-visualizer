import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
} from "../../HelperFunctions.js";

const animations = []; // { comparingELement1, comparingElement2, doSwap, sortedTill }

// Push animation for sorting first element.
//animations.push(0, 0, false, 0);

function partition(arr, low, high) {
  let temp;
  let pivot = arr[high];
  //animations.push(high, high, 2);
  changeBackgroundColor(high, "rgba(255, 48, 79, 1)");

  // index of smaller element
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than or equal to pivot
    if (arr[j] <= pivot) {
      i++;

      // swap arr[i] and arr[j]
      animations.push(i, j, 1);
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    if (i == -1) animations.push(j, j, 1);
    else animations.push(i, j, 0);
  }

  // swap arr[i+1] and arr[high]
  // (or pivot)
  animations.push(i + 1, high, 1);

  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

/* A[] --> Array to be sorted,
    l --> Starting index,
    h --> Ending index */
export function quickSortIterative(arr, l, h) {
  // Create an auxiliary stack
  let stack = new Array(h - l + 1);
  stack.fill(0);

  // initialize top of stack
  let top = -1;

  // push initial values of l and h to
  // stack
  stack[++top] = l;
  stack[++top] = h;

  // Keep popping from stack while
  // is not empty
  while (top >= 0) {
    // Pop h and l
    h = stack[top--];
    l = stack[top--];

    // Set pivot element at its
    // correct position in
    // sorted array
    let p = partition(arr, l, h);

    // If there are elements on
    // left side of pivot, then
    // push left side to stack
    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    // If there are elements on
    // right side of pivot, then
    // push right side to stack
    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
  return animations;
}

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
