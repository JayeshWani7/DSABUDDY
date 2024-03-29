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

export function ArrayInfo() {
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
          <h2>Array:</h2>
          <p>
            An array is a collection of similar data items stored at contiguous
            memory locations and elements can be accessed randomly using indices
            of an array. They can be used to store the collection of primitive
            data types such as int, float, double, char, etc of any particular
            type.
          </p>
          <h4> Advantages:</h4>
          <p>
            <br />
            •Code Optimization: we can retrieve or sort the data efficiently.
            <br />• Random access: We can get any data located at an index
            position.
          </p>
          <h4> Disadvantages:</h4>
          <p>
            <br />• Size Limit: We can store only the fixed size of elements in
            the array. It doesn't grow its size at runtime.
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
# Python code to demonstrate the working of array

import array

arr = array.array('i', [1, 2, 3])

# printing original array
print ("The new created array is : ",end=" ")
for i in range (0, 3):
	print (arr[i], end=" ")

print("\r")

# using append() to insert new value at end
arr.append(4);

# printing appended array
print("The appended array is : ", end="")
for i in range (0, 4):
	print (arr[i], end=" ")
	
# using insert() to insert value at specific position
# inserts 5 at 2nd position
arr.insert(2, 5)

print("\r")

# printing array after insertion
print ("The array after insertion is : ", end="")
for i in range (0, 5):
	print (arr[i], end=" ")
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
                {`
// C code to implement array

#include <stdio.h>
int main()
{
    // declare an array.
    int my_array[6];
    printf("Enter array elements:\n"); 
    // input array elements.
    int i;
    for (i = 0; i < 6; i++)
    {
        scanf("%d", &my_array[i]);
    } 
    printf("\nArray elements are:\n");
    // print array elements.
    for (i = 0; i <= 5; i++)
    {
        printf("%d ", my_array[i]);
    }
    return 0;
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
// C++ code to implement array

#include <iostream>
using namespace std;

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, N, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
    // declare an array.
    int my_array[6];
    cout<<"Enter array elements:"; 
    // input array elements.
    int i;
    for (i = 0; i < 6; i++)
    {
        cin>>my_array[i]);
    } 
    cout<<endl<<"Array elements are:"<<endl;
    // print array elements.
    for (i = 0; i <= 5; i++)
    {
        cout<<my_array[i];
    }
    return 0;
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
// Java code to implement array

class Array {
	public static void main(String[] args)
	{
		// declares an Array of integers.
		int[] arr;

		// allocating memory for 5 integers.
		arr = new int[5];

		// initialize the first elements of the array
		arr[0] = 10;

		// initialize the second elements of the array
		arr[1] = 20;

		// so on...
		arr[2] = 30;
		arr[3] = 40;
		arr[4] = 50;

		// accessing the elements of the specified array
		for (int i = 0; i < arr.length; i++)
			System.out.println("Element at index " + i + " : " + arr[i]);
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
