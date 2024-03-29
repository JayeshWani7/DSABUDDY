import React, { useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useData } from "../../../common/store";
import shallow from "zustand/shallow";
import Vizimg from '../../../image/Datastructure/Tree.webp';

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

export function TreeInfo() {
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
          <h2  style={{width:"100%"}}>Tree Data Structure</h2>
          <img src={Vizimg} alt="" style={{width: "30%"}}/>
        </Container>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Container>
          <h2>Tree:</h2>
          <p>
            A tree is non-linear and a hierarchical data structure consisting of
            a collection of nodes such that each node of the tree stores a value
            and a list of references to other nodes (the “children”).
          </p>
          <p>
            This data structure is a specialized method to organize and store
            data in the computer to be used more effectively. It consists of a
            central node, structural nodes, and sub-nodes, which are connected
            via edges. We can also say that tree data structure has roots,
            branches, and leaves connected with one another.
          </p>
          <h4> Types of Tree data structures:</h4>
          <p>
            <br />• General tree
            <br />• Binary tree
            <br />• Balanced tree
            <br />• Binary search tree
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
# python program to demonstrate some of the above
# terminologies

# Function to add an edge between vertices x and y

# Function to print the parent of each node


def printParents(node, adj, parent):

	# current node is Root, thus, has no parent
	if (parent == 0):
		print(node, "->Root")
	else:
		print(node, "->", parent)

	# Using DFS
	for cur in adj[node]:
		if (cur != parent):
			printParents(cur, adj, node)

# Function to print the children of each node


def printChildren(Root, adj):

	# Queue for the BFS
	q = []

	# pushing the root
	q.append(Root)

	# visit array to keep track of nodes that have been
	# visited
	vis = [0]*len(adj)

	# BFS
	while (len(q) > 0):
		node = q[0]
		q.pop(0)
		vis[node] = 1
		print(node, "-> ", end=" ")

		for cur in adj[node]:
			if (vis[cur] == 0):
				print(cur, " ", end=" ")
				q.append(cur)
		print("\n")

# Function to print the leaf nodes


def printLeafNodes(Root, adj):

	# Leaf nodes have only one edge and are not the root
	for i in range(0, len(adj)):
		if (len(adj[i]) == 1 and i != Root):
			print(i, end=" ")
	print("\n")

# Function to print the degrees of each node


def printDegrees(Root, adj):

	for i in range(1, len(adj)):
		print(i, ": ", end=" ")

		# Root has no parent, thus, its degree is equal to
		# the edges it is connected to
		if (i == Root):
			print(len(adj[i]))
		else:
			print(len(adj[i])-1)

# Driver code


# Number of nodes
N = 7
Root = 1

# Adjacency list to store the tree
adj = []
for i in range(0, N+1):
	adj.append([])

# Creating the tree
adj[1].append(2)
adj[2].append(1)

adj[1].append(3)
adj[3].append(1)

adj[1].append(4)
adj[4].append(1)

adj[2].append(5)
adj[5].append(2)

adj[2].append(6)
adj[6].append(2)

adj[4].append(7)
adj[7].append(4)

# Printing the parents of each node
print("The parents of each node are:")
printParents(Root, adj, 0)

# Printing the children of each node
print("The children of each node are:")
printChildren(Root, adj)

# Printing the leaf nodes in the tree
print("The leaf nodes of the tree are:")
printLeafNodes(Root, adj)

# Printing the degrees of each node
print("The degrees of each node are:")
printDegrees(Root, adj)

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
struct node
{
int value;
struct node *left_child, *right_child;
};

struct node *new_node(int value)
{
struct node *tmp = (struct node *)malloc(sizeof(struct node));
tmp->value = value;
tmp->left_child = tmp->right_child = NULL;
return tmp;
}

void print(struct node *root_node) // displaying the nodes!
{
if (root_node != NULL)
{
print(root_node->left_child);
printf("%d \n", root_node->value);
print(root_node->right_child);
}
}

struct node* insert_node(struct node* node, int value) // inserting nodes!
{

if (node == NULL) return new_node(value);
if (value < node->value)
{
node->left_child = insert_node(node->left_child, value);
}
else if (value > node->value)
{
node->right_child = insert_node(node->right_child, value);
}
return node;
}

int main()
{

printf("TechVidvan Tutorial: Implementation of a Binary Tree in C!\n\n");

struct node *root_node = NULL;
root_node = insert_node(root_node, 10);
insert_node(root_node, 10);
insert_node(root_node, 30);
insert_node(root_node, 25);
insert_node(root_node, 36);
insert_node(root_node, 56);
insert_node(root_node, 78);

print(root_node);

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
// C++ program to demonstrate some of the above
// terminologies
#include <bits/stdc++.h>
using namespace std;
// Function to add an edge between vertices x and y
void addEdge(int x, int y, vector<vector<int> >& adj)
{
	adj[x].push_back(y);
	adj[y].push_back(x);
}
// Function to print the parent of each node
void printParents(int node, vector<vector<int> >& adj,
				int parent)
{
	// current node is Root, thus, has no parent
	if (parent == 0)
		cout << node << "->Root" << endl;
	else
		cout << node << "->" << parent << endl;
	// Using DFS
	for (auto cur : adj[node])
		if (cur != parent)
			printParents(cur, adj, node);
}
// Function to print the children of each node
void printChildren(int Root, vector<vector<int> >& adj)
{
	// Queue for the BFS
	queue<int> q;
	// pushing the root
	q.push(Root);
	// visit array to keep track of nodes that have been
	// visited
	int vis[adj.size()] = { 0 };
	// BFS
	while (!q.empty()) {
		int node = q.front();
		q.pop();
		vis[node] = 1;
		cout << node << "-> ";
		for (auto cur : adj[node])
			if (vis[cur] == 0) {
				cout << cur << " ";
				q.push(cur);
			}
		cout << endl;
	}
}
// Function to print the leaf nodes
void printLeafNodes(int Root, vector<vector<int> >& adj)
{
	// Leaf nodes have only one edge and are not the root
	for (int i = 1; i < adj.size(); i++)
		if (adj[i].size() == 1 && i != Root)
			cout << i << " ";
	cout << endl;
}
// Function to print the degrees of each node
void printDegrees(int Root, vector<vector<int> >& adj)
{
	for (int i = 1; i < adj.size(); i++) {
		cout << i << ": ";
		// Root has no parent, thus, its degree is equal to
		// the edges it is connected to
		if (i == Root)
			cout << adj[i].size() << endl;
		else
			cout << adj[i].size() - 1 << endl;
	}
}
// Driver code
int main()
{
	// Number of nodes
	int N = 7, Root = 1;
	// Adjacency list to store the tree
	vector<vector<int> > adj(N + 1, vector<int>());
	// Creating the tree
	addEdge(1, 2, adj);
	addEdge(1, 3, adj);
	addEdge(1, 4, adj);
	addEdge(2, 5, adj);
	addEdge(2, 6, adj);
	addEdge(4, 7, adj);
	// Printing the parents of each node
	cout << "The parents of each node are:" << endl;
	printParents(Root, adj, 0);

	// Printing the children of each node
	cout << "The children of each node are:" << endl;
	printChildren(Root, adj);

	// Printing the leaf nodes in the tree
	cout << "The leaf nodes of the tree are:" << endl;
	printLeafNodes(Root, adj);

	// Printing the degrees of each node
	cout << "The degrees of each node are:" << endl;
	printDegrees(Root, adj);

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
// java code for above approach
import java.io.*;
import java.util.*;

class GFG {

	// Function to print the parent of each node
	public static void
	printParents(int node, Vector<Vector<Integer> > adj,
				int parent)
	{

		// current node is Root, thus, has no parent
		if (parent == 0)
			System.out.println(node + "->Root");
		else
			System.out.println(node + "->" + parent);

		// Using DFS
		for (int i = 0; i < adj.get(node).size(); i++)
			if (adj.get(node).get(i) != parent)
				printParents(adj.get(node).get(i), adj,
							node);
	}

	// Function to print the children of each node
	public static void
	printChildren(int Root, Vector<Vector<Integer> > adj)
	{

		// Queue for the BFS
		Queue<Integer> q = new LinkedList<>();

		// pushing the root
		q.add(Root);

		// visit array to keep track of nodes that have been
		// visited
		int vis[] = new int[adj.size()];

		Arrays.fill(vis, 0);

		// BFS
		while (q.size() != 0) {
			int node = q.peek();
			q.remove();
			vis[node] = 1;
			System.out.print(node + "-> ");

			for (int i = 0; i < adj.get(node).size(); i++) {
				if (vis[adj.get(node).get(i)] == 0) {
					System.out.print(adj.get(node).get(i)
									+ " ");
					q.add(adj.get(node).get(i));
				}
			}
			System.out.println();
		}
	}

	// Function to print the leaf nodes
	public static void
	printLeafNodes(int Root, Vector<Vector<Integer> > adj)
	{

		// Leaf nodes have only one edge and are not the
		// root
		for (int i = 1; i < adj.size(); i++)
			if (adj.get(i).size() == 1 && i != Root)
				System.out.print(i + " ");

		System.out.println();
	}

	// Function to print the degrees of each node
	public static void
	printDegrees(int Root, Vector<Vector<Integer> > adj)
	{
		for (int i = 1; i < adj.size(); i++) {
			System.out.print(i + ": ");

			// Root has no parent, thus, its degree is
			// equal to the edges it is connected to
			if (i == Root)
				System.out.println(adj.get(i).size());
			else
				System.out.println(adj.get(i).size() - 1);
		}
	}

	// Driver code
	public static void main(String[] args)
	{

		// Number of nodes
		int N = 7, Root = 1;

		// Adjacency list to store the tree
		Vector<Vector<Integer> > adj
			= new Vector<Vector<Integer> >();
		for (int i = 0; i < N + 1; i++) {
			adj.add(new Vector<Integer>());
		}

		// Creating the tree
		adj.get(1).add(2);
		adj.get(2).add(1);

		adj.get(1).add(3);
		adj.get(3).add(1);

		adj.get(1).add(4);
		adj.get(4).add(1);

		adj.get(2).add(5);
		adj.get(5).add(2);

		adj.get(2).add(6);
		adj.get(6).add(2);

		adj.get(4).add(7);
		adj.get(7).add(4);

		// Printing the parents of each node
		System.out.println("The parents of each node are:");
		printParents(Root, adj, 0);

		// Printing the children of each node
		System.out.println(
			"The children of each node are:");
		printChildren(Root, adj);

		// Printing the leaf nodes in the tree
		System.out.println(
			"The leaf nodes of the tree are:");
		printLeafNodes(Root, adj);

		// Printing the degrees of each node
		System.out.println("The degrees of each node are:");
		printDegrees(Root, adj);
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
