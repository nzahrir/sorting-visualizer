export function getMergeSortAnimation(arr, n) {
  let animations = [];
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
      merge(arr, left_start, mid, right_end, animations);
    }
  }
  return animations;
}

/*
 * Function to merge the two haves arr[l..m] and arr[m+1..r] of array arr
 */
function merge(arr, l, m, r, animations) {
  console.log(
    "-----------------left " +
      l +
      " right " +
      r +
      " mid " +
      m +
      "----------------"
  );
  var i, j, k;
  var n1 = m - l + 1;
  var n2 = r - m;
  /* create temp arrays */
  var L = Array(n1).fill(0);
  var R = Array(n2).fill(0);

  /*
   * Copy data to temp arrays L and R
   */
  for (i = 0; i < n1; i++) {
    L[i] = arr[l + i];
    animations.push(l + i, l + i, 0);
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
    animations.push(m + 1 + j, m + 1 + j, 4);
  }

  /*
   * Merge the temp arrays back into arr[l..r]
   */
  i = 0;
  j = 0;
  k = l;
  console.log("left array " + L);
  console.log("right array " + R);
  console.log("original: " + arr);
  while (i < n1 && j < n2) {
    animations.push(l + i, m + 1 + j, 5);

    if (L[i] <= R[j]) {
      console.log("LEFT SWAP " + L[i] + " with " + arr[k]);
      // animations.push(k, l + i, 1);
      // swap(arr, k, l + i);

      // var temp = arr[k];
      arr[k] = L[i];
      // L[i] = temp;

      animations.push(k, arr[k], 6);
      animations.push(l + i, m + 1 + j, 3);

      i++;
    } else {
      console.log("RIGHT SWAP " + R[j] + " with " + arr[k]);

      // animations.push(k, m + 1 + j, 1);
      // swap(arr, k, m + 1 + j);
      // var temp = arr[k];
      arr[k] = R[j];
      // R[i] = temp;
      animations.push(k, arr[k], 6);
      animations.push(l + i, m + 1 + j, 3);

      j++;
    }

    k++;
    console.log("left index " + i + " right index " + j + " merge index " + k);
    console.log("ORIGINAL ARRAY " + arr);
  }

  //Remaining left half
  while (i < n1) {
    //
    console.log("left over " + L[i]);
    // swapBars(k, l + i);
    // swap(arr, k, l + i);
    arr[k] = L[i];
    animations.push(k, arr[k], 6);
    console.log("ORIGINAL ARRAY " + arr);

    i++;
    k++;
  }

  //Remaining right half
  while (j < n2) {
    //
    console.log("right over " + R[i]);

    // animations.push(k, m + 1 + j, 1);
    // swap(arr, k, m + 1 + j);
    arr[k] = R[j];
    animations.push(k, arr[k], 6);
    console.log("ORIGINAL ARRAY " + arr);

    // animations.push(k, m + 1 + j, 3);

    j++;
    k++;
  }
  console.log("after merge: " + arr);

  // for (i = 0; i < n1; i++) {
  //   animations.push(l + i, l + i, 2);
  // }
  // for (j = 0; j < n2; j++) {
  //   animations.push(m + 1 + j, m + 1 + j, 2);
  // }
}

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
