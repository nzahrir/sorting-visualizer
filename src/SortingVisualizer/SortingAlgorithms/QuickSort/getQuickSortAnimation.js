function partition(arr, low, high, animations) {
  let pivot = arr[high];

  // changes the background of the pivot to Red
  animations.push(high, high, 2);

  // index of smaller element
  let i = low - 1;
  for (let j = low; j < high; j++) {
    // This expands the groups of elements SMALLER than the pivot
    if (arr[j] <= pivot) {
      //Turn element to be added to group SMALLER than the pivot pink
      console.log("comparing j arr " + arr[j] + " to the pivot " + pivot);
      i++;

      console.log("i is : " + i + " j is: " + j);
      console.log(arr[i]);
      // swap arr[i] and arr[j]

      // Add the smaller element into the group of Smaller Elements
      animations.push(i, j, 0);
      swap(arr, i, j);
      animations.push(i, i, 5);
      if (i !== j) {
        animations.push(j, j, 3);
      }

      // This expands the groups of elements LARGER than the pivot
    } else {
      animations.push(j, j, 3);
    }
  }

  // swap arr[i+1] and arr[high]
  // (or pivot)
  //Changes one element to green
  //Put the pivot into its place
  i++;
  animations.push(i, high, 0);
  swap(arr, i, high);
  animations.push(i, i, 1);
  //Swaps elements. does not change colors
  //Set pivot to the correct color
  if (i !== high) {
    animations.push(high, high, 4);
  }

  //changes elements to blue

  for (let k = low; k < i; k++) {
    animations.push(k, k, 4);
  }
  for (let k = i + 1; k < high; k++) {
    animations.push(k, k, 4);
  }
  return i;
}

/* A[] --> Array to be sorted,
    l --> Starting index,
    h --> Ending index */
export function quickSortIterative(arr, l, h) {
  // Create an auxiliary stack
  const animations = [];
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
    let p = partition(arr, l, h, animations);
    // If there are elements on
    // left side of pivot, then
    // push left side to stack
    if (p - 1 >= l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    // If there are elements on
    // right side of pivot, then
    // push right side to stack
    if (p + 1 <= h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
  return animations;
}

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
