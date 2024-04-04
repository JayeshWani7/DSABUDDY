import React, { useEffect, useState } from "react";
import { sortingAlgorithms } from "../common/config";
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
import endent from "endent"; // Import endent library

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
      const API_ENDPOINT = "https://api.worqhat.com/api/ai/content/v2";
      const BEARER_TOKEN = "Bearer sk-a18a082e48ce4e8bb0679743ea64269d";

      const prompt = createPrompt(selectedLanguage, question);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: BEARER_TOKEN,
        },
        body: JSON.stringify({
          question: prompt,
          randomness: 0.4,
        }),
      };

      const response = await fetch(API_ENDPOINT, requestOptions);
      const data = await response.json();
      
      // Update output based on API response
      setOutput(data?.content || "Code generation failed");
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
            margin: "10px",
            padding: "10px",
            width: "1100px",
            fontFamily: "monospace",
            fontSize: "14px",
            border: "none",
            borderRadius: "5px",
            background: "#1e1e1e",
            color: "#d4d4d4",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.5)",
            }}
        />
      </div>
    );
  }

  // Default case if tabTitle is not 0, 1, 2, or 5
  return null;
}
