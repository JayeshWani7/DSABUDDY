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

const comment = { color: 'rgb(255, 221, 190)', };
const func = { color: 'rgb(97, 174, 238)', };
const keyW = { color: 'rgb(198, 120, 221)', };

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


export function SelectionInfo() {
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
                    <h2>Selection sort:</h2>
                    <p>Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
                    </p>
                    <h4> Working of Selection sort:</h4>
                    <p> •	Set the first element as minimum.
                        <br />•	Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum.Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.
                        <br />•	After each iteration, minimum is placed in the front of the unsorted list.
                        <br />•	For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.

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
                    <TabPanel value={value} index={0}
                        style={
                            {
                                backgroundClip: 'border-box',
                                backgroundColor: 'rgb(56,59,64)',
                            }
                        }>
                        <div style={
                            {
                                backgroundClip: 'border-box',
                                backgroundColor: 'rgb(56,59,64)',
                                color: ' rgb(211, 211, 211)',
                                padding: '10px',
                            }
                        }>
                            <pre>
                                {
`
# Python program for implementation of Selection
# Sort
import sys
A = [64, 25, 12, 22, 11]

# Traverse through all array elements
for i in range(len(A)):
	
	# Find the minimum element in remaining
	# unsorted array
	min_idx = i
	for j in range(i+1, len(A)):
		if A[min_idx] > A[j]:
			min_idx = j
			
	# Swap the found minimum element with
	# the first element	
	A[i], A[min_idx] = A[min_idx], A[i]

# Driver code to test above
print ("Sorted array")
for i in range(len(A)):
	print("%d" %A[i],end=" ")
`
                                }
                            </pre>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <div style={
                            {
                                backgroundClip: 'border-box',
                                backgroundColor: 'rgb(56,59,64)',
                                color: ' rgb(211, 211, 211)',
                                padding: '10px',
                            }
                        }>
                            <pre>
                                {
`
// C program for implementation of selection sort
#include <stdio.h>

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		if(min_idx != i)
			swap(&arr[min_idx], &arr[i]);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
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
                    <div style={
                            {
                                backgroundClip: 'border-box',
                                backgroundColor: 'rgb(56,59,64)',
                                color: ' rgb(211, 211, 211)',
                                padding: '10px',
                            }
                        }>
                            <pre>
                                {
`
// C++ program for implementation of
// selection sort
#include <bits/stdc++.h>
using namespace std;

//Swap function
void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// One by one move boundary of
	// unsorted subarray
	for (i = 0; i < n-1; i++)
	{
	
		// Find the minimum element in
		// unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element
		// with the first element
		if(min_idx!=i)
			swap(&arr[min_idx], &arr[i]);
	}
}

//Function to print an array
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	cout << "Sorted array: \n";
	printArray(arr, n);
	return 0;
}
`
                                }
                            </pre>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    <div style={
                            {
                                backgroundClip: 'border-box',
                                backgroundColor: 'rgb(56,59,64)',
                                color: ' rgb(211, 211, 211)',
                                padding: '10px',
                            }
                        }>
                            <pre>
                                {
`
// Java program for implementation of Selection Sort
class SelectionSort
{
	void sort(int arr[])
	{
		int n = arr.length;

		// One by one move boundary of unsorted subarray
		for (int i = 0; i < n-1; i++)
		{
			// Find the minimum element in unsorted array
			int min_idx = i;
			for (int j = i+1; j < n; j++)
				if (arr[j] < arr[min_idx])
					min_idx = j;

			// Swap the found minimum element with the first
			// element
			int temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
		}
	}

	// Prints the array
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i]+" ");
		System.out.println();
	}

	// Driver code to test above
	public static void main(String args[])
	{
		SelectionSort ob = new SelectionSort();
		int arr[] = {64,25,12,22,11};
		ob.sort(arr);
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
        </Grid >
    );
}
