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


export function QuickInfo() {
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
                    <h2>Quick sort:</h2>
                    <p>Quicksort is a sorting algorithm based on the divide and conquer approach where,<br />
                        <br />1.	An array is divided into subarrays by selecting a pivot element (element selected from the array).

                        While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.<br />
                        <br />2.	The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.<br />
                        <br />3.	At this point, elements are already sorted. Finally, elements are combined to form a sorted array.<br />

                    </p>
                    <h4> Working of Quick Sort:</h4>
                    <p>1. Select the Pivot Element<br />
                        <br />•	There are different variations of quicksort where the pivot element is selected from different positions. Here, we will be selecting the rightmost element of the array as the pivot element.<br />
                    </p>
                    <p>2. Rearrange the Array<br />
                    <br />Now the elements of the array are rearranged so that elements that are smaller than the pivot are put on the left and the elements greater than the pivot are put on the right.
                        Here's how we rearrange the array:<br />
                        <br />•	A pointer is fixed at the pivot element. The pivot element is compared with the elements beginning from the first index.
                        <br />•	If the element is greater than the pivot element, a second pointer is set for that element.
                        <br />•	Now, pivot is compared with other elements. If an element smaller than the pivot element is reached, the smaller element is swapped with the greater element found earlier.
                        <br />•	Again, the process is repeated to set the next greater element as the second pointer. And, swap it with another smaller element.
                        <br />•	The process goes on until the second last element is reached.
                        <br />•	Finally, the pivot element is swapped with the second pointer.

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
# Python3 implementation of QuickSort


# Function to find the partition position
def partition(array, low, high):

	# Choose the rightmost element as pivot
	pivot = array[high]

	# Pointer for greater element
	i = low - 1

	# Traverse through all elements
	# compare each element with pivot
	for j in range(low, high):
		if array[j] <= pivot:
			# If element smaller than pivot is found
			# swap it with the greater element pointed by i
			i = i + 1

			# Swapping element at i with element at j
			(array[i], array[j]) = (array[j], array[i])

	# Swap the pivot element with
	# e greater element specified by i
	(array[i + 1], array[high]) = (array[high], array[i + 1])

	# Return the position from where partition is done
	return i + 1

# Function to perform quicksort


def quick_sort(array, low, high):
	if low < high:

		# Find pivot element such that
		# element smaller than pivot are on the left
		# element greater than pivot are on the right
		pi = partition(array, low, high)

		# Recursive call on the left of pivot
		quick_sort(array, low, pi - 1)

		# Recursive call on the right of pivot
		quick_sort(array, pi + 1, high)


# Driver code
array = [10, 7, 8, 9, 1, 5]
quick_sort(array, 0, len(array) - 1)

print(f'Sorted array: {array}')
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
/* C implementation of QuickSort */
#include<stdio.h>
void quicksort(int number[25],int first,int last){
    int i, j, pivot, temp;
    if(first<last){
        pivot=first;
        i=first;
        j=last;
        while(i<j){
            while(number[i]<=number[pivot]&&i<last)
                i++;
                while(number[j]>number[pivot])
                    j--;
                    if(i<j){
                        temp=number[i];
                        number[i]=number[j];
                        number[j]=temp;
                    }
                }
                temp=number[pivot];
                number[pivot]=number[j];
                number[j]=temp;
                quicksort(number,first,j-1);                
                quicksort(number,j+1,last);
            }

        }
int main(){
    int i, count, number[25];
    printf("Enter some elements (Max. - 25): ");    
    scanf("%d",&count);
    printf("Enter %d elements: ", count);
    for(i=0;i<count;i++)
        scanf("%d",&number[i]);
        quicksort(number,0,count-1);
        printf("The Sorted Order is: ");
        for(i=0;i<count;i++)
            printf(" %d",number[i]);
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
/* C++ implementation of QuickSort */
#include <bits/stdc++.h>
using namespace std;

// A utility function to swap two elements
void swap(int* a, int* b)
{
	int t = *a;
	*a = *b;
	*b = t;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
int partition(int arr[], int low, int high)
{
	int pivot = arr[high]; // pivot
	int i
		= (low
		- 1); // Index of smaller element and indicates
				// the right position of pivot found so far

	for (int j = low; j <= high - 1; j++) {
		// If current element is smaller than the pivot
		if (arr[j] < pivot) {
			i++; // increment index of smaller element
			swap(&arr[i], &arr[j]);
		}
	}
	swap(&arr[i + 1], &arr[high]);
	return (i + 1);
}

/* The main function that implements QuickSort
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
void quickSort(int arr[], int low, int high)
{
	if (low < high) {
		/* pi is partitioning index, arr[p] is now
		at right place */
		int pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver Code
int main()
{
	int arr[] = { 10, 7, 8, 9, 1, 5 };
	int n = sizeof(arr) / sizeof(arr[0]);
	quickSort(arr, 0, n - 1);
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
// Java implementation of QuickSort
import java.io.*;

class GFG {

	// A utility function to swap two elements
	static void swap(int[] arr, int i, int j)
	{
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	/* This function takes last element as pivot, places
	the pivot element at its correct position in sorted
	array, and places all smaller (smaller than pivot)
	to left of pivot and all greater elements to right
	of pivot */
	static int partition(int[] arr, int low, int high)
	{

		// pivot
		int pivot = arr[high];

		// Index of smaller element and
		// indicates the right position
		// of pivot found so far
		int i = (low - 1);

		for (int j = low; j <= high - 1; j++) {

			// If current element is smaller
			// than the pivot
			if (arr[j] < pivot) {

				// Increment index of
				// smaller element
				i++;
				swap(arr, i, j);
			}
		}
		swap(arr, i + 1, high);
		return (i + 1);
	}

	/* The main function that implements QuickSort
			arr[] --> Array to be sorted,
			low --> Starting index,
			high --> Ending index
	*/
	static void quickSort(int[] arr, int low, int high)
	{
		if (low < high) {

			// pi is partitioning index, arr[p]
			// is now at right place
			int pi = partition(arr, low, high);

			// Separately sort elements before
			// partition and after partition
			quickSort(arr, low, pi - 1);
			quickSort(arr, pi + 1, high);
		}
	}

	// Function to print an array
	static void printArray(int[] arr, int size)
	{
		for (int i = 0; i < size; i++)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver Code
	public static void main(String[] args)
	{
		int[] arr = { 10, 7, 8, 9, 1, 5 };
		int n = arr.length;

		quickSort(arr, 0, n - 1);
		System.out.println("Sorted array: ");
		printArray(arr, n);
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
