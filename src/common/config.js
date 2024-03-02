import { getScreenWidth } from "./helper";
import { BubbleSort } from "../sortFunctions/BubbleSort";
import { SelectionSort } from "../sortFunctions/SelectionSort";
import { InsertionSort } from "../sortFunctions/InsertionSort";
import { QuickSort } from "../sortFunctions/QuickSort";
import { HeapSort } from "../sortFunctions/HeapSort.js";
import { MergeSort } from "../sortFunctions/MergeSort";
import { LinearSearch } from "../searchFunctions/LinearSearch"
import { BinarySearch } from "../searchFunctions/BinarySearch"

// colors setting
export const comparisionColor = "pink";
export const swapColor = "yellow";
export const sortedColor = "springgreen";
export const pivotColor = "sandybrown";

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// init array
export let sortingArray = initArrayForScreenSize();

export let searchingElement = 0;

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "BubbleSort" },
  { component: SelectionSort, title: "Selection", name: "SelectionSort" },
  { component: InsertionSort, title: "Insertion", name: "InsertionSort" },
  { component: HeapSort, title: "Heap", name: "HeapSort" },
  { component: MergeSort, title: "Merge", name: "MergeSort" },
  { component: QuickSort, title: "Quick", name: "QuickSort" },
];

export const searchingAlgorithms = [
  { component: LinearSearch, title: "Linear Search", name: "LinearSearch" },
  { component: BinarySearch, title: "Binary Search", name: "BinarySearch" },
];

export const dataStructures = [
  { title: "Array", name: "Array" },
  { title: "Linked List", name: "Linked List" },
  { title: "Stack", name: "Stack" },
  { title: "Queue", name: "Queue" },
  { title: "Tree", name: "Tree" },
];

export const others = [
  { title: "BFS", name: "BFS" },
  { title: "DFS", name: "DFS" },
  { title: "Dijkstra", name: "Dijkstra" },
  { title: "Kruskal", name: "Kruskal" },
  { title: "Primms", name: "Primms" },
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  if (screenSize < 460) return [4, 3, 2, 1];
  else if (screenSize < 720) return [8, 7, 6, 5, 4, 3, 2, 1];
  return [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}
