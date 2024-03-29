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

export function HeapInfo() {
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
          <h2>Heap sort:</h2>
          <p>
            Heap sort is a comparison-based sorting technique based on Binary
            Heap data structure. It is similar to the selection sort where we
            first find the minimum element and place the minimum element at the
            beginning. Repeat the same process for the remaining elements.
          </p>
          <h4> Working of Heap sort:</h4>
          <p>
            In heap sort, basically, there are two phases involved in the
            sorting of elements. By using the heap sort algorithm, they are as
            follows -
            <br />• The first step includes the creation of a heap by adjusting
            the elements of the array.
            <br />• After the creation of heap, now remove the root element of
            the heap repeatedly by shifting it to the end of the array, and then
            store the heap structure with the remaining elements.
          </p>
          <p>
            Heapsort is a popular and efficient sorting algorithm. The concept
            of heap sort is to eliminate the elements one by one from the heap
            part of the list, and then insert them into the sorted part of the
            list. 
            <br />• Heapsort is the in-place sorting algorithm.
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
# Python program for implementation of heap Sort

# To heapify subtree rooted at index i.
# n is size of heap


def heapify(arr, N, i):
	largest = i # Initialize largest as root
	l = 2 * i + 1	 # left = 2*i + 1
	r = 2 * i + 2	 # right = 2*i + 2

	# See if left child of root exists and is
	# greater than root
	if l < N and arr[largest] < arr[l]:
		largest = l

	# See if right child of root exists and is
	# greater than root
	if r < N and arr[largest] < arr[r]:
		largest = r

	# Change root, if needed
	if largest != i:
		arr[i], arr[largest] = arr[largest], arr[i] # swap

		# Heapify the root.
		heapify(arr, N, largest)

# The main function to sort an array of given size


def heapSort(arr):
	N = len(arr)

	# Build a maxheap.
	for i in range(N//2 - 1, -1, -1):
		heapify(arr, N, i)

	# One by one extract elements
	for i in range(N-1, 0, -1):
		arr[i], arr[0] = arr[0], arr[i] # swap
		heapify(arr, i, 0)


# Driver's code
if __name__ == '__main__':
	arr = [12, 11, 13, 5, 6, 7]

	# Function call
	heapSort(arr)
	N = len(arr)

	print("Sorted array is")
	for i in range(N):
		print("%d" % arr[i], end=" ")
`}
              </pre>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
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
// Heap Sort in C

#include <stdio.h>

// Function to swap the position of two elements

void swap(int* a, int* b)
{

	int temp = *a;

	*a = *b;

	*b = temp;
}

// To heapify a subtree rooted with node i
// which is an index in arr[].
// n is size of heap
void heapify(int arr[], int N, int i)
{
	// Find largest among root, left child and right child

	// Initialize largest as root
	int largest = i;

	// left = 2*i + 1
	int left = 2 * i + 1;

	// right = 2*i + 2
	int right = 2 * i + 2;

	// If left child is larger than root
	if (left < N && arr[left] > arr[largest])

		largest = left;

	// If right child is larger than largest
	// so far
	if (right < N && arr[right] > arr[largest])

		largest = right;

	// Swap and continue heapifying if root is not largest
	// If largest is not root
	if (largest != i) {

		swap(&arr[i], &arr[largest]);

		// Recursively heapify the affected
		// sub-tree
		heapify(arr, N, largest);
	}
}

// Main function to do heap sort
void heapSort(int arr[], int N)
{

	// Build max heap
	for (int i = N / 2 - 1; i >= 0; i--)

		heapify(arr, N, i);

	// Heap sort
	for (int i = N - 1; i >= 0; i--) {

		swap(&arr[0], &arr[i]);

		// Heapify root element to get highest element at
		// root again
		heapify(arr, i, 0);
	}
}

// A utility function to print array of size n
void printArray(int arr[], int N)
{
	for (int i = 0; i < N; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

// Driver's code
int main()
{
	int arr[] = { 12, 11, 13, 5, 6, 7 };
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	heapSort(arr, N);
	printf("Sorted array is\n");
	printArray(arr, N);
}
`}
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
                {`
// C++ program for implementation of Heap Sort                                
#include <iostream>
using namespace std;                                
// To heapify a subtree rooted with node i
// which is an index in arr[].
// n is size of heap
void heapify(int arr[], int N, int i)
{
                                    
    // Initialize largest as root
    int largest = i;
                                    
    // left = 2*i + 1
    int l = 2 * i + 1;
                                    
    // right = 2*i + 2
    int r = 2 * i + 2;
                                    
    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
    largest = l;
                                    
    // If right child is larger than largest
	// so far
	if (r < N && arr[r] > arr[largest])
    largest = r;
    
	// If largest is not root
	if (largest != i) {
        swap(arr[i], arr[largest]);
        
		// Recursively heapify the affected
		// sub-tree
		heapify(arr, N, largest);
	}
}

// Main function to do heap sort
void heapSort(int arr[], int N)
{
    
    // Build heap (rearrange array)
	for (int i = N / 2 - 1; i >= 0; i--)
    heapify(arr, N, i);
    
	// One by one extract an element
	// from heap
	for (int i = N - 1; i > 0; i--) {
        
        // Move current root to end
		swap(arr[0], arr[i]);
        
		// call max heapify on the reduced heap
		heapify(arr, i, 0);
	}
}

// A utility function to print array of size n
void printArray(int arr[], int N)
{
    for (int i = 0; i < N; ++i)
    cout << arr[i] << " ";
	cout << "\n";
}

// Driver's code
int main()
{
    int arr[] = { 12, 11, 13, 5, 6, 7 };
	int N = sizeof(arr) / sizeof(arr[0]);
    
	// Function call
	heapSort(arr, N);
    
	cout << "Sorted array is \n";
	printArray(arr, N);
}
`}
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
                {`
// Java program for implementation of Heap Sort

public class HeapSort {
	public void sort(int arr[])
	{
        int N = arr.length;
        
		// Build heap (rearrange array)
		for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
        
		// One by one extract an element from heap
		for (int i = N - 1; i > 0; i--) {
            // Move current root to end
			int temp = arr[0];
			arr[0] = arr[i];
			arr[i] = temp;
            
			// call max heapify on the reduced heap
			heapify(arr, i, 0);
		}
	}

	// To heapify a subtree rooted with node i which is
	// an index in arr[]. n is size of heap
	void heapify(int arr[], int N, int i)
	{
		int largest = i; // Initialize largest as root
		int l = 2 * i + 1; // left = 2*i + 1
		int r = 2 * i + 2; // right = 2*i + 2
        
		// If left child is larger than root
		if (l < N && arr[l] > arr[largest])
        largest = l;

		// If right child is larger than largest so far
		if (r < N && arr[r] > arr[largest])
			largest = r;
            
            // If largest is not root
            if (largest != i) {
                int swap = arr[i];
                arr[i] = arr[largest];
                arr[largest] = swap;
                
                // Recursively heapify the affected sub-tree
                heapify(arr, N, largest);
            }
        }
        
        /* A utility function to print array of size n */
        static void printArray(int arr[])
        {
            int N = arr.length;
            
            for (int i = 0; i < N; ++i)
			System.out.print(arr[i] + " ");
            System.out.println();
        }
        
        // Driver's code
        public static void main(String args[])
        {
            int arr[] = { 12, 11, 13, 5, 6, 7 };
            int N = arr.length;
            
            // Function call
            HeapSort ob = new HeapSort();
            ob.sort(arr);
            
            System.out.println("Sorted array is");
            printArray(arr);
        }
    }
    `}
              </pre>
            </div>
          </TabPanel>
        </Container>
      </Grid>
    </Grid>
  );
}
