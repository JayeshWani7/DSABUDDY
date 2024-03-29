import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useData } from "../../../common/store";
import shallow from "zustand/shallow";
import Vizimg from '../../../image/Datastructure/queuegif.gif'


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

const vizoSec = {
  height: 'auto'}
const vizoImg = styled(Image)`
  width: auto;
  height: 100%;
`

// const 
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

export function QueueInfo() {
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
          <h2  style={{width:"100%"}}>Enqueue and Dequeue Operation</h2>
          <img src={Vizimg} alt="" style={{width: "40%"}}/>
        </Container>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Container>
          <h2>Queue:</h2>
          <p>
            A queue is defined as a linear data structure that is open at both
            ends and the operations are performed in First In First Out (FIFO)
            order.Unlike Stack, a queue is allowed operations at both ends. One
            end is always used to insert elements (enqueue). And the other end
            used to remove elements (dequeue).
          </p>
          <h4>Queue Operations:</h4>
          <p>
            <br />• Enqueue
            <br />
            <br />
            To work with Queue, we have to understand different queue
            operations. The followings are some of the key operations. Enqueue
            Operation Enqueue operation is the process of putting a new element
            into a queue. That element is added to the queue as the last element
            the queue.
            <br /><br />
            <br />• Dequeue
            <br />
            <br />
            Dequeue Operation Dequeue operation is the process of removing an
            element from a queue. But before an operating dequeue operation, we
            have to check whether the queue is empty or not. If the queue is not
            empty, then only we can remove the first inserted element of the
            queue.
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
# Python3 code to implement queue.
class Queue:
    def __init__(self):
        self.list = []
    
    def __str__(self):
        return str(self.list)

    def isEmpty(self):
        if self.list == []:
            return True
        else:
            return False
    
    def enqueue(self, value):
        return self.list.append(value)
    
    def dequeue(self):
        if self.isEmpty():
            return "Queue is empty"
        else:
            return self.list.pop(0)
    
    def peek(self):
        if self.isEmpty():
            return "Queue is empty"
        else:
            return self.list[0]

    def delete(self):
        self.list = None
    
myQueue = Queue()
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
// C code to implement queue
#include <stdio.h>
# define SIZE 100
void enqueue();
void dequeue();
void show();
int inp_arr[SIZE];
int Rear = - 1;
int Front = - 1;
main()
{
    int ch;
    while (1)
    {
        printf("1.Enqueue Operation");
        printf("2.Dequeue Operation");
        printf("3.Display the Queue");
        printf("4.Exit");
        printf("Enter your choice of operations : ");
        scanf("%d", &ch);
        switch (ch)
        {
            case 1:
            enqueue();
            break;
            case 2:
            dequeue();
            break;
            case 3:
            show();
            break;
            case 4:
            exit(0);
            default:
            printf("Incorrect choice");
        } 
    } 
} 
 
void enqueue()
{
    int insert_item;
    if (Rear == SIZE - 1)
       printf("Overflow  ");
    else
    {
        if (Front == - 1)
      
        Front = 0;
        printf("Element to be inserted in the Queue  : ");
        scanf("%d", &insert_item);
        Rear = Rear + 1;
        inp_arr[Rear] = insert_item;
    }
} 
 
void dequeue()
{
    if (Front == - 1 || Front > Rear)
    {
        printf("Underflow  ");
        return ;
    }
    else
    {
        printf("Element deleted from the Queue: %d ", inp_arr[Front]);
        Front = Front + 1;
    }
} 
 
void show()
{
    
    if (Front == - 1)
        printf("Empty Queue  ");
    else
    {
        printf("Queue:  ");
        for (int i = Front; i <= Rear; i++)
            printf("%d ", inp_arr[i]);
        printf(" ");
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
// C++ code to implement queue.

#include <iostream>
using namespace std;
int queue[100], n = 100, front = - 1, rear = - 1;
void Insert() {
   int val;
   if (rear == n - 1)
   cout<<"Queue Overflow"<<endl;
   else {
      if (front == - 1)
      front = 0;
      cout<<"Insert the element in queue : "<<endl;
      cin>>val;
      rear++;
      queue[rear] = val;
   }
}
void Delete() {
   if (front == - 1 || front > rear) {
      cout<<"Queue Underflow ";
      return ;
   } else {
      cout<<"Element deleted from queue is : "<< queue[front] <<endl;
      front++;;
   }
}
void Display() {
   if (front == - 1)
   cout<<"Queue is empty"<<endl;
   else {
      cout<<"Queue elements are : ";
      for (int i = front; i <= rear; i++)
      cout<<queue[i]<<" ";
         cout<<endl;
   }
}
int main() {
   int ch;
   cout<<"1) Insert element to queue"<<endl;
   cout<<"2) Delete element from queue"<<endl;
   cout<<"3) Display all the elements of queue"<<endl;
   cout<<"4) Exit"<<endl;
   do {
      cout<<"Enter your choice : "<<endl;
      cin>>ch;
      switch (ch) {
         case 1: Insert();
         break;
         case 2: Delete();
         break;
         case 3: Display();
         break;
         case 4: cout<<"Exit"<<endl;
         break;
         default: cout<<"Invalid choice"<<endl;
      }
   } while(ch!=4);
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
// Java code to implenent queue 
class Queue {   
      
  private static int front, rear, capacity;   
  private static int queue[];   
   
  Queue(int size) {   
      front = rear = 0;   
      capacity = size;   
      queue = new int[capacity];   
  }   
   
  // insert an element into the queue  
  static void queueEnqueue(int item)  {   
      // check if the queue is full  
      if (capacity == rear) {   
          System.out.printf(" Queue is full ");   
          return;   
      }   
   
      // insert element at the rear   
      else {   
          queue[rear] = item;   
          rear++;   
      }   
      return;   
  }   
   
  //remove an element from the queue  
  static void queueDequeue()  {   
      // check if queue is empty   
      if (front == rear) {   
          System.out.printf(" Queue is empty ");   
          return;   
      }   
   
      // shift elements to the right by one place uptil rear   
      else {   
          for (int i = 0; i < rear - 1; i++) {   
              queue[i] = queue[i + 1];   
          }   
   
       
    // set queue[rear] to 0  
          if (rear < capacity)   
              queue[rear] = 0;   
   
          // decrement rear   
          rear--;   
      }   
      return;   
  }   
   
  // print queue elements   
  static void queueDisplay()   
  {   
      int i;   
      if (front == rear) {   
          System.out.printf("Queue is Empty ");   
          return;   
      }   
   
      // traverse front to rear and print elements   
      for (i = front; i < rear; i++) {   
          System.out.printf(" %d , ", queue[i]);   
      }   
      return;   
  }   
   
  // print front of queue   
  static void queueFront()   
  {   
      if (front == rear) {   
          System.out.printf("Queue is Empty ");   
          return;   
      }   
      System.out.printf(" Front Element of the queue: %d", queue[front]);   
      return;   
  }   
}   
 
public class QueueArrayImplementation {  
  public static void main(String[] args) {   
      // Create a queue of capacity 4   
      Queue q = new Queue(4);   
   
      System.out.println("Initial Queue:");  
     // print Queue elements   
      q.queueDisplay();   
   
      // inserting elements in the queue   
      q.queueEnqueue(10);   
      q.queueEnqueue(30);   
      q.queueEnqueue(50);   
      q.queueEnqueue(70);   
   
      // print Queue elements   
      System.out.println("Queue after Enqueue Operation:");  
      q.queueDisplay();   
   
      // print front of the queue   
      q.queueFront();   
         
      // insert element in the queue   
      q.queueEnqueue(90);   
   
      // print Queue elements   
      q.queueDisplay();   
   
      q.queueDequeue();   
      q.queueDequeue();   
      System.out.printf(" Queue after two dequeue operations:");   
   
      // print Queue elements   
      q.queueDisplay();   
   
      // print front of the queue   
      q.queueFront();   
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
