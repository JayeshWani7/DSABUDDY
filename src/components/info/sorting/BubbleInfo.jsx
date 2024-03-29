import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useData } from "../../../common/store";
import shallow from "zustand/shallow";

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  column-gap: 10px;
  row-gap: 10px;

  & > div {
    max-width: 100%;
    min-width: 375px;
  }
`;

const Container = styled(Card)`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  height: 20rem;
  overflow: scroll !important;
`;

const flexCenter = { display: "flex", justifyContent: "center" };

const comment = { color: "rgb(255, 221, 190)" };
const func = { color: "rgb(97, 174, 238)" };
const keyW = { color: "rgb(198, 120, 221)" };

function TabPanel(props) {
  const { children, value, index, tabValue, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ maxWidth: "100%", width: "100%" }}
    >
      {value === index && children}
    </div>
  );
}

export function BubbleInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sortingArray, algorithm, searchingAlgorithm, tabTitle] = useData(
    (state) => [
      state.sortingArray,
      state.algorithm,
      state.searchingAlgorithm,
      state.tabTitle,
    ],
    shallow
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <Container>
          <h2>Bubble sort:</h2>
          <p>
            Bubble sort is a sorting algorithm that compares two adjacent
            elements and swaps them until they are in the intended order. Just
            like the movement of air bubbles in the water that rise up to the
            surface, each element of the array move to the end in each
            iteration. Therefore, it is called a bubble sort.
          </p>
          <h4> Working of Bubble Sort:</h4>
          <p>
            1. First Iteration (Compare and Swap)
            <br />
            <br />• Starting from the first index, compare the first and the
            second elements.
            <br />• If the first element is greater than the second element,
            they are swapped.
            <br />• Now, compare the second and the third elements. Swap them if
            they are not in order.
            <br />• The above process goes on until the last element.
          </p>
          <p>
            2. Remaining Iteration
            <br />
            <br />• The same process goes on for the remaining iterations.
            <br />• After each iteration, the largest element among the unsorted
            elements is placed at the end.
            <br />• In each iteration, the comparison takes place up to the last
            unsorted element.
            <br />• The array is sorted when all the unsorted elements are
            placed at their correct positions.
          </p>
        </Container>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Container>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
            >
              <Tab label="Python" {...0} />
              <Tab label="C" {...1} />
              <Tab label="C++" {...2} />
              <Tab label="Java" {...3} />
            </Tabs>
          </Box>
          <TabPanel
            value={value}
            index={0}
            style={{
              backgroundClip: "border-box",
              backgroundColor: "rgb(56,59,64)",
            }}
          >
            <div
              style={{
                backgroundClip: "border-box",
                backgroundColor: "rgb(56,59,64)",
                color: " rgb(211, 211, 211)",
                padding: "10px",
              }}
            >
              <pre>
                {`
# Python program for implementation of Bubble Sort
def bubbleSort(arr):
n = len(arr)
 
# Traverse through all array elements
for i in range(n):
 
    # Last i elements are already in place
    for j in range(0, n-i-1):
 
        # traverse the array from 0 to n-i-1
        # Swap if the element found is greater
        # than the next element
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
 
# Driver code to test above
if __name__ == "__main__":
  arr = [64, 34, 25, 12, 22, 11, 90]
 
  bubbleSort(arr)
                `}
              </pre>
            </div>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            style={{
              backgroundClip: "border-box",
              backgroundColor: "rgb(56,59,64)",
            }}
          >
            <div
              style={{
                backgroundClip: "border-box",
                backgroundColor: "rgb(56,59,64)",
                color: " rgb(211, 211, 211)",
                padding: "10px",
              }}
            >
              <pre>
                {
`// C program for implementation of Bubble sort
#include <stdio.h>

void swap(int* xp, int* yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(&arr[j], &arr[j + 1]);
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

// Driver program to test above functions
int main()
{
	int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
	int n = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, n);
	printf("Sorted array: \n");
	printArray(arr, n);
	return 0;
}
`
                }
              </pre>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div
              style={{
                backgroundClip: "border-box",
                backgroundColor: "rgb(56,59,64)",
                color: " rgb(211, 211, 211)",
                padding: "10px",
              }}
            >
                <pre>
                    {
`
// C++ program for implementation
// of Bubble sort
#include <bits/stdc++.h>
using namespace std;

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already
		// in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(arr[j], arr[j + 1]);
}

// Function to print an array
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver code
int main()
{
	int arr[] = { 5, 1, 4, 2, 8};
	int N = sizeof(arr) / sizeof(arr[0]);
	bubbleSort(arr, N);
	cout << "Sorted array: \n";
	printArray(arr, N);
	return 0;
}
`
                    }
                </pre>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <div
              style={{
                backgroundClip: "border-box",
                backgroundColor: "rgb(56,59,64)",
                color: " rgb(211, 211, 211)",
                padding: "10px",
              }}
            >
                <pre>
                    {
`
// Java program for implementation of Bubble Sort
class BubbleSort {
	void bubbleSort(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n - 1; i++)
			for (int j = 0; j < n - i - 1; j++)
				if (arr[j] > arr[j + 1]) {
					// swap arr[j+1] and arr[j]
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
	}

	/* Prints the array */
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");
		System.out.println();
	}

	// Driver method to test above
	public static void main(String args[])
	{
		BubbleSort ob = new BubbleSort();
		int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
		ob.bubbleSort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}
`
                    }
                </pre>
            </div>
          </TabPanel>
        </Container>
      </Grid>
    </Grid>
  );
}
