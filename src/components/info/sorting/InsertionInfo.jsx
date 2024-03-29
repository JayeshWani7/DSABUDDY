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


export function InsertionInfo() {
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
                    <h2>Insertion sort:</h2>
                    <p>Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.
                    </p>
                    <p>
                        Insertion sort works similarly as we sort cards in our hand in a card game. We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place.
                    </p>
                    <h4> Working of Insertion Sort:</h4>
                    <p>
                        •	The first element in the array is assumed to be sorted. Take the second element and store it separately in key.

                        Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.
                        <br />•	Now, the first two elements are sorted.

                        Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.
                        <br />•	Similarly, place every unsorted element at its correct position.

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
# Python program for implementation of Insertion Sort

# Function to do insertion sort
def insertionSort(arr):

	# Traverse through 1 to len(arr)
	for i in range(1, len(arr)):

		key = arr[i]

		# Move elements of arr[0..i-1], that are
		# greater than key, to one position ahead
		# of their current position
		j = i-1
		while j >= 0 and key < arr[j] :
				arr[j + 1] = arr[j]
				j -= 1
		arr[j + 1] = key


# Driver code to test above
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
for i in range(len(arr)):
	print ("% d" % arr[i])
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
// C program for insertion sort
#include <math.h>
#include <stdio.h>

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++) {
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array of size n
void printArray(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

/* Driver program to test insertion sort */
int main()
{
	int arr[] = { 12, 11, 13, 5, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, n);
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
// C++ program for insertion sort

#include <bits/stdc++.h>
using namespace std;

// Function to sort an array using
// insertion sort
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		// Move elements of arr[0..i-1],
		// that are greater than key, to one
		// position ahead of their
		// current position
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array
// of size n
void printArray(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver code
int main()
{
	int arr[] = { 12, 11, 13, 5, 6 };
	int N = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, N);
	printArray(arr, N);

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
// Java program for implementation of Insertion Sort
public class InsertionSort {
	/*Function to sort array using insertion sort*/
	void sort(int arr[])
	{
		int n = arr.length;
		for (int i = 1; i < n; ++i) {
			int key = arr[i];
			int j = i - 1;

			/* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
			of their current position */
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	/* A utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver method
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6 };

		InsertionSort ob = new InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
};
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
