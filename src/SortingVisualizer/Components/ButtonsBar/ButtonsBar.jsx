import "./ButtonsBar.css";

const ButtonsBar = ({
  generateNewArray,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
}) => {
  return (
    <div className="buttons-bar">
      <button onClick={() => generateNewArray()} id="reset">
        Generate New Array
      </button>
      <button
        id="quickSortButton"
        onClick={() => quickSort()}
        className="buttonStyle1"
      >
        Quicksort
      </button>
      <button
        id="mergeSortButton"
        onClick={() => mergeSort()}
        className="buttonStyle1"
      >
        Merge Sort
      </button>
      <button
        id="selectionSortButton"
        onClick={() => selectionSort()}
        className="buttonStyle2"
      >
        Selection Sort
      </button>
      <button
        id="insertionSortButton"
        onClick={() => insertionSort()}
        className="buttonStyle1"
      >
        Insertion Sort
      </button>
      <button
        id="bubbleSortButton"
        onClick={() => bubbleSort()}
        className="buttonStyle1"
      >
        Bubble Sort
      </button>
    </div>
  );
};

export default ButtonsBar;
