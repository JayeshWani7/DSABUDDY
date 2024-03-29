import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useData } from "../../../common/store";
import shallow from "zustand/shallow";
import Vizimg from '../../../image/Datastructure/stackgif.gif'

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

export function StackInfo() {
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
      <Grid item xs={12}>
      <Container style={{height:"auto",display:"flex", alignItems:"center", flexDirection:"column"}}>
          <h2  style={{width:"100%"}}>Push and Pop Operation</h2>
          <img src={Vizimg} alt="" style={{width: "40%"}}/>
        </Container>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Container>
          <h2>Stack:</h2>
          <p>
            A stack is a linear data structure that stores items in a
            Last-In/First-Out (LIFO) or First-In/Last-Out (FILO) manner. In
            stack, a new element is added at one end and an element is removed
            from that end only. The insert and delete operations are often
            called push and pop.
          </p>
          <h4> The functions associated with stack are:</h4>
          <p>
            <br />• empty() – Returns whether the stack is empty – Time Complexity: O(1)
            <br />• size() – Returns the size of the stack – Time Complexity: O(1)
            <br />• top() / peek() – Returns a reference to the topmost element of the stack – Time Complexity: O(1)
            <br />• push(a) – Inserts the element ‘a’ at the top of the stack – Time Complexity: O(1)
            <br />• pop() – Deletes the topmost element of the stack – Time Complexity: O(1)
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
# Python program to
# demonstrate stack implementation
# using list

stack = []

# append() function to push
# element in the stack
stack.append('a')
stack.append('b')
stack.append('c')

print('Initial stack')
print(stack)

# pop() function to pop
# element from stack in
# LIFO order
print('\nElements popped from stack:')
print(stack.pop())
print(stack.pop())
print(stack.pop())

print('\nStack after elements are popped:')
print(stack)

# uncommenting print(stack.pop())
# will cause an IndexError
# as the stack is now empty

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
#include<stdio.h>

#include<stdlib.h>
 
#define Size 4 
 
int Top=-1, inp_array[Size];
void Push();
void Pop();
void show();
 
int main()
{
	int choice;
	
	while(1)	
	{
		printf("\nOperations performed by Stack");
		printf("\n1.Push the element\n2.Pop the element\n3.Show\n4.End");
		printf("\n\nEnter the choice:");
		scanf("%d",&choice);
		
		switch(choice)
		{
			case 1: Push();
					break;
			case 2: Pop();
					break;
			case 3: show();
					break;
			case 4: exit(0);
			
			default: printf("\nInvalid choice!!");
		}
	}
}
 
void Push()
{
	int x;
	
	if(Top==Size-1)
	{
		printf("\nOverflow!!");
	}
	else
	{
		printf("\nEnter element to be inserted to the stack:");
		scanf("%d",&x);
		Top=Top+1;
		inp_array[Top]=x;
	}
}
 
void Pop()
{
	if(Top==-1)
	{
		printf("\nUnderflow!!");
	}
	else
	{
		printf("\nPopped element:  %d",inp_array[Top]);
		Top=Top-1;
	}
}
 
void show()
{
	
	
	if(Top==-1)
	{
		printf("\nUnderflow!!");
	}
	else
	{
		printf("\nElements present in the stack: \n");
		for(int i=Top;i>=0;--i)
			printf("%d\n",inp_array[i]);
	}
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
#include <iostream>
#include <stack>
using namespace std;

int main() {
    // create a stack of strings
    stack<string> languages;
    
    // add element to the Stack
    languages.push("C++");
    languages.push("Java");
    languages.push("Python");
    
    // print top element
    cout << languages.top();

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
// Stack implementation in Java

class Stack {

  // store elements of stack
  private int arr[];
  // represent top of stack
  private int top;
  // total capacity of the stack
  private int capacity;

  // Creating a stack
  Stack(int size) {
    // initialize the array
    // initialize the stack variables
    arr = new int[size];
    capacity = size;
    top = -1;
  }

  // push elements to the top of stack
  public void push(int x) {
    if (isFull()) {
      System.out.println("Stack OverFlow");

      // terminates the program
      System.exit(1);
    }

    // insert element on top of stack
    System.out.println("Inserting " + x);
    arr[++top] = x;
  }

  // pop elements from top of stack
  public int pop() {

    // if stack is empty
    // no element to pop
    if (isEmpty()) {
      System.out.println("STACK EMPTY");
      // terminates the program
      System.exit(1);
    }

    // pop element from top of stack
    return arr[top--];
  }

  // return size of the stack
  public int getSize() {
    return top + 1;
  }

  // check if the stack is empty
  public Boolean isEmpty() {
    return top == -1;
  }

  // check if the stack is full
  public Boolean isFull() {
    return top == capacity - 1;
  }

  // display elements of stack
  public void printStack() {
    for (int i = 0; i <= top; i++) {
      System.out.print(arr[i] + ", ");
    }
  }

  public static void main(String[] args) {
    Stack stack = new Stack(5);

    stack.push(1);
    stack.push(2);
    stack.push(3);

    System.out.print("Stack: ");
    stack.printStack();

    // remove element from stack
    stack.pop();
    System.out.println("\nAfter popping out");
    stack.printStack();

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
