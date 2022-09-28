import {
  changeBackgroundColor,
  changeBoxShadow,
  swapBars,
  resetBarStyleDefault,
  disableButtons,
  enableButtons,
  playCompletedSoundEffect,
  changeBackgroundColorArrayIndex,
} from "../../HelperFunctions.js";
var arrays = [];
var colors = [];
const getMergeSortAnimation = (arr, n) => {
  var curr_size;

  var left_start;

  for (curr_size = 1; curr_size <= n - 1; curr_size = 2 * curr_size) {
    // Pick starting point of different
    // subarrays of current size
    for (left_start = 0; left_start < n - 1; left_start += 2 * curr_size) {
      // Find ending point of left
      // subarray. mid+1 is starting
      // point of right
      var mid = Math.min(left_start + curr_size - 1, n - 1);

      var right_end = Math.min(left_start + 2 * curr_size - 1, n - 1);

      // Merge Subarrays arr[left_start...mid]
      // & arr[mid+1...right_end]
      console.log(arr);
      merge(arr, left_start, mid, right_end);
    }
  }
  console.log("arrays:" + arrays);
  console.log("colors: " + colors);
  return [arrays, colors];
};

/*
 * Function to merge the two haves arr[l..m] and arr[m+1..r] of array arr
 */
function merge(arr, l, m, r) {
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;

  arrays.push(arr.slice(l, r));
  colors.push("rgba(255,165,0, 0.9)");
  /* create temp arrays */
  var L = Array(n1).fill(0);
  var R = Array(n2).fill(0);

  /*
   * Copy data to temp arrays L and R
   */
  for (i = 0; i < n1; i++) L[i] = arr[l + i];
  for (j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  /*
   * Merge the temp arrays back into arr[l..r]
   */
  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      swapBars(k, l + i);
      var temp = arr[k];
      arr[k] = L[i];
      L[i] = temp;

      i++;
    } else {
      swapBars(k, m + 1 + j);
      var temp = arr[k];
      arr[k] = R[j];
      R[i] = temp;

      j++;
    }
    k++;
  }

  //Remaining left half
  while (i < n1) {
    //
    swapBars(k, l + i);

    arr[k] = L[i];

    i++;
    k++;
  }

  //Remaining right half
  while (j < n2) {
    //
    swapBars(k, m + 1 + j);

    arr[k] = R[j];

    j++;
    k++;
  }

  arrays.push(arr.slice(l, r));
  colors.push("rgba(144,238,144, 0.9)");
}

export default getMergeSortAnimation;
