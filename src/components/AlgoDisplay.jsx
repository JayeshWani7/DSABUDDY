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

  const handleSubmit = () => {
    // Perform logic to generate output based on question and selected language
    setOutput(`Output for ${selectedLanguage}:\nGenerated code based on question: ${question}`);
  };

  const [value, setValue] = React.useState(0);

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
        <h2>Text to Code Generator</h2><br />
        <input
          type="text"
          placeholder="Enter your question here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ margin: "10px", padding: "10px 500px 10px 0px" }}
        /><br />
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          style={{ margin: "10px", padding: "5px" }}
        >
          <option value="">Select language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select><br />
        <button onClick={handleSubmit} style={{ margin: "10px", padding: "5px" }}>
          Submit
        </button><br /><br />
        <textarea
          value={output}
          readOnly
          rows={10}
          cols={120}
          style={{ margin: "10px", padding: "5px" }}
        />
      </div>
    );
  }

  // Default case if tabTitle is not 0, 1, 2, or 5
  return null;
}
