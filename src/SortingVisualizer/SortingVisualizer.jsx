// .. COMPONENTS .. //
import Header from "./Components/Header/Header.jsx";
import ButtonsBar from "./Components/ButtonsBar/ButtonsBar.jsx";
import ArrayBar from "./Components/ArrayBar/ArrayBar.jsx";
import RangeSlider from "./Components/RangeSliders/RangeSlider.jsx";
// .. HELPER FUNCTIONS .. //
import { randomIntFromInterval, playAudio } from "./HelperFunctions.js";
// .. ALGORITHMS .. //
import BubbleSort from "./SortingAlgorithms/BubbleSort/BubbleSort.js";
import SelectionSort from "./SortingAlgorithms/SelectionSort/SelectionSort.js";
import InsertionSort from "./SortingAlgorithms/InsertionSort/InsertionSort.js";
import MergeSortAnimation from "./SortingAlgorithms/MergeSort/getMergeSortAnimation.js";
import QuickSort from "./SortingAlgorithms/QuickSort/QuickSort.js";
import { quickSortIterative } from "./SortingAlgorithms/QuickSort/getQuickSortAnimation.js";

// .. STYLE .. //
import "./SortingVisualizer.css";
// .. SOUNDS .. //
import ResetEffect from "./sounds/ResetEffect.mp3";
import { useEffect, useState } from "react";

const SortingVisualizer = () => {
  const [state, setState] = useState({
    array: [],
    animationSpeed: 50,
    numberOfArrayBars: 10,
  });

  //This function generates the array before the page is rendered
  useEffect(() => {
    generateNewArray();
  }, []);

  //generates new random array of size "numberOfArrayBars"
  const generateNewArray = (numberOfBars = state.numberOfArrayBars) => {
    const array = [];
    for (let i = 0; i < numberOfBars; i++) {
      //Generates an element between 5 and 70
      console.log(i);
      array.push(randomIntFromInterval(5, 70));
    }
    playAudio(ResetEffect);
    setState({ ...state, array: array, numberOfArrayBars: numberOfBars });
  };

  // ******************************************************************************* //

  //Handles if the "Array Size" slider is changed
  const onChangeArrayBarRangeSlider = (event, value) => {
    generateNewArray(value);
  };

  // ## Handles if the "Animation Speed" slider is changed. ## //
  const onChangeAnimationSpeedRangeSlider = (event, value) => {
    setState({ ...state, animationSpeed: value });
  };

  // ******************************************************************************* //

  // ## Calls the BubbleSort component/function. ## //
  const bubbleSort = () => {
    BubbleSort(state.array, state.animationSpeed);
  };

  // ## Calls the SelectionSort component/function. ## //
  const selectionSort = () => {
    SelectionSort(state.array, state.animationSpeed);
  };

  // ## Calls the InsertionSort component/function. ## //
  const insertionSort = () => {
    InsertionSort(state.array, state.animationSpeed);
  };

  const mergeSort = () => {
    MergeSortAnimation(state.array, state.array.length);
  };

  const quickSort = () => {
    QuickSort(state.array, 0, state.array.length - 1, state.animationSpeed);
  };

  // ******************************************************************************* //

  return (
    <div className="main-container">
      {/* --------------------- HEADER : 8% Height --------------------- */}
      <Header />

      {/* --------------------- BUTTONS : 10% Height --------------------- */}
      <ButtonsBar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
        mergeSort={mergeSort}
        quickSort={quickSort}
      />

      {/* --------------------- BARS : 74% Height --------------------- */}
      <ArrayBar array={state.array} />

      {/* --------------------- SLIDERS : 8% Height --------------------- */}
      <RangeSlider
        numberOfArrayBars={state.numberOfArrayBars}
        animationSpeed={state.animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
    </div>
  );
};

export default SortingVisualizer;
