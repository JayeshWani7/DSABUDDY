import React, { useEffect, useState } from "react";
import { dataStructures, others, sortingAlgorithms } from "../common/config";
import { searchingAlgorithms } from "../common/config";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { useControls, useData } from "../common/store";
import shallow from "zustand/shallow";
import Home from "../Home";
import { SortManager } from "./visualizer/SortManager";
import { SearchManager } from "./visualizer/SearchManager";
import { Controller } from "./Controller";
import { BubbleInfo } from "./info/sorting/BubbleInfo";
import { SelectionInfo } from "./info/sorting/SelectionInfo";
import { InsertionInfo } from "./info/sorting/InsertionInfo";
import { HeapInfo } from "./info/sorting/HeapInfo";
import { MergeInfo } from "./info/sorting/MergeInfo";
import { QuickInfo } from "./info/sorting/QuickInfo";
import { LinearInfo } from "./info/searching/Linearinfo";
import { BinaryInfo } from "./info/searching/BinaryInfo";
import { ArrayInfo } from "./info/Datastructures/Arrayinfo";
import { StackInfo } from "./info/Datastructures/stackinfo";
import { QueueInfo } from "./info/Datastructures/Queueinfo";
import { LinkedlistInfo } from "./info/Datastructures/Linkedlistinfo";
import { TreeInfo } from "./info/Datastructures/Treeinfo";
import { BfsInfo } from "./info/other/BfsInfo";
import { DfsInfo } from "./info/other/DfsInfo";
import { KruskalInfo } from "./info/other/KruskalInfo";
import { PrimmsInfo } from "./info/other/PrimmsInfo";
import { DijkstraInfo } from "./info/other/DijkstraInfo";
import endent from "endent"; 



const createPrompt = (inputLanguage, inputCode) => {
  return endent`
  You are an expert programmer in all programming languages. Translate the natural language to "${inputLanguage}" code. Do not include \\\\.

      Example translating from natural language to JavaScript:

      Natural language:
      Print the numbers 0 to 9.

  JavaScript code:
      for (let i = 0; i < 10; i++) {
          console.log(i);
      }

  Natural language:
      ${inputCode}

      ${inputLanguage} code (no \\\\):
  `;
};

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
`;

const flexCenter = { display: "flex", justifyContent: "center" };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export function AlgoDisplay() {
  const resetSorting = useControls((state) => state.resetSorting);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [question, setQuestion] = useState("");
  const [output, setOutput] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      const API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

      if (!API_KEY) {
        setOutput("Error: API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
        return;
      }

      const prompt = createPrompt(selectedLanguage, question);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.4,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      };

      const response = await fetch(API_ENDPOINT, requestOptions);
      const data = await response.json();
      
      if (data.error) {
        setOutput(`Error: ${data.error.message}`);
      } else {
        setOutput(data?.candidates?.[0]?.content?.parts?.[0]?.text || "Code generation failed");
      }
    } catch (error) {
      console.error("Error generating code:", error);
      setOutput("Code generation failed");
    }
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [sortingArray, algorithm, searchingAlgorithm, dataStructure, other, tabTitle] = useData(
    (state) => [
      state.sortingArray,
      state.algorithm,
      state.searchingAlgorithm,
      state.dataStructure,
      state.other,
      state.tabTitle,
    ],
    shallow
  );

  useEffect(() => {
    resetSorting();
  }, [algorithm]);

  if (tabTitle === 0) {
    return <Home />;
  } else if (tabTitle === 1) {
    return (
      <>
        <Controller />
        <div style={flexCenter}>
          {sortingAlgorithms.map((algoInfo, idx) => (
            <TabPanel value={algorithm} index={idx} key={algoInfo.name}>
              <SortManager
                array={sortingArray}
                sortFunction={algoInfo.component}
                sortingAlgorithmName={algoInfo.name}
              />
              {algoInfo.name === "BubbleSort" ? (
                <BubbleInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "SelectionSort" ? (
                <SelectionInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "InsertionSort" ? (
                <InsertionInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "HeapSort" ? (
                <HeapInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "MergeSort" ? (
                <MergeInfo />
              ) : (
                <></>
              )}

              {algoInfo.name === "QuickSort" ? (
                <QuickInfo />
              ) : (
                <></>
              )}
            </TabPanel>
          ))}
        </div>
      </>
    );
  } else if (tabTitle === 2) {
    return (
      <div style={flexCenter}>
        {searchingAlgorithms.map((algoInfo, idx) => (
          <TabPanel value={searchingAlgorithm} index={idx} key={algoInfo.name}>
            <Controller />
            <SearchManager
              array={sortingArray}
              sortFunction={algoInfo.component}
              sortingAlgorithmName={algoInfo.name}
            />
            {algoInfo.name === "LinearSearch" ? (
              <LinearInfo />
            ) : (
              <></>
            )}
            {algoInfo.name === "BinarySearch" ? (
              <BinaryInfo />
            ) : (
              <></>
            )}
          </TabPanel>
        ))}
      </div>
    );
  } else if (tabTitle === 3) {
    return (
      <>
        <div style={flexCenter}>
          {dataStructures.map((algoInfo, idx) => (
            <TabPanel value={dataStructure} index={idx} key={algoInfo.name}>
              {algoInfo.name === "Array" ? (
                <>
                  <Controller />
                  <SortManager
                    array={sortingArray}
                    sortFunction={algoInfo.component}
                    sortingAlgorithmName={algoInfo.name}
                  />
                  <ArrayInfo />
                </>
              ) : (
                <></>
              )}
              {algoInfo.name === "Linked List" ? (
                <LinkedlistInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Stack" ? (
                <StackInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Queue" ? (
                <QueueInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Tree" ? (
                <TreeInfo />
              ) : (
                <></>
              )}
            </TabPanel>
          ))}
        </div>
      </>
    );
  } else if (tabTitle === 4) {
    return (
      <>
        <div style={flexCenter}>
          {others.map((algoInfo, idx) => (
            <TabPanel value={other} index={idx} key={algoInfo.name}>
              {algoInfo.name === "BFS" ? (
                <BfsInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "DFS" ? (
                <DfsInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Dijkstra" ? (
                <DijkstraInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Kruskal" ? (
                <KruskalInfo />
              ) : (
                <></>
              )}
              {algoInfo.name === "Primms" ? (
                <PrimmsInfo />
              ) : (
                <></>
              )}
            </TabPanel>
          ))}
        </div>
      </>
    );
  } else if (tabTitle === 5) {
    return (
      <div style={{ textAlign: "center"}}>
        <h2>AI based Code Generator</h2><br />
        <input
          type="text"
          placeholder="Enter your question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ margin: "0px", padding: "10px", width: "500px" }}
        /><br />

        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          style={{ margin: "10px", padding: "5px" }}
        >
          <option value="">Select language</option>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          
        </select><br />
        <button onClick={handleSubmit} style={{color: "#fff", backgroundColor: "#3f51b5", width: "60px", margin: "10px", padding: "5px" }}>
          Submit
        </button><br /><br />
        <textarea
          value={output}
          readOnly
          rows={15}
          cols={120}
          style={{
            width: "1100px",
            fontFamily: "monospace",
            fontSize: "14px",
            background: "#1e1e1e",
            color: "#d4d4d4"
            }}
        />
      </div>
    );
  }

  return null;
}