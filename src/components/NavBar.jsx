import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { sortingAlgorithms, searchingAlgorithms, dataStructures, others } from "../common/config";
import { useData } from "../common/store";
import shallow from "zustand/shallow";
import { useSetState } from "react-use";
import logo from "../image/logo.png"

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export function NavBar() {

  const classes = useStyles();

  const [algorithm, setAlgorithm, searchingAlgorithm, setSearchingAlgorithm, dataStructure, setDataStructure, other, setOther, setTabTitle] = useData(
    (state) => [state.algorithm, state.setAlgorithm, state.searchingAlgorithm, state.setSearchingAlgorithm, state.dataStructure, state.setDataStructure, state.other, state.setOther, state.setTabTitle],
    shallow
  );

  const [value, setValue] = React.useState(0);
  const [tabValue, setTabValue] = React.useState(0);
  const handelTabs = (e, val) => {
    console.warn(val);
    setValue(val);
    setTabValue(val);
  };

  setTabTitle(tabValue);



  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          fontFamily: "Nunito",
          fontSize: "x-large"
        }}
      >
        <img src={logo} style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0)",
          fontFamily: "Nunito",
          fontSize: "x-large",
          width: '5%',
          margin: "10px"
        }} alt="Logo" />
        <h3>DSABUDDY</h3>
      </div>
      <AppBar position="static" color="transparent">
        <Tabs
          value={value}
          onChange={handelTabs}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" />
          <Tab label="Sorting" />
          <Tab label="Searching" />
          <Tab label="Data Structure" />
          <Tab label="Others" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1} tabValue={tabValue}>
        <AppBar position="static" color="default">
          <Tabs
            value={algorithm}
            onChange={(event, id) => setAlgorithm(id)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {sortingAlgorithms.map((algorithm) => (
              <Tab
                label={algorithm.title}
                {...a11yProps(0)}
                key={algorithm.title}
              />
            ))}
          </Tabs>
        </AppBar>
      </TabPanel>
      <TabPanel value={value} index={2} tabValue={tabValue}>

        <AppBar position="static" color="default">
          <Tabs
            value={searchingAlgorithm}
            onChange={(event, id) => setSearchingAlgorithm(id)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >

            {searchingAlgorithms.map((algorithm) => (
              <Tab
                label={algorithm.title}
                {...a11yProps(0)}
                key={algorithm.title}
              />
            ))}
          </Tabs>
        </AppBar>
      </TabPanel>
      <TabPanel value={value} index={3} tabValue={tabValue}>

        <AppBar position="static" color="default">
          <Tabs
            value={dataStructure}
            onChange={(event, id) => setDataStructure(id)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >

            {dataStructures.map((algorithm) => (
              <Tab
                label={algorithm.title}
                {...a11yProps(0)}
                key={algorithm.title}
              />
            ))}
          </Tabs>
        </AppBar>
      </TabPanel>
      <TabPanel value={value} index={4} tabValue={tabValue}>
        <AppBar position="static" color="default">
          <Tabs
            value={other}
            onChange={(event, id) => setOther(id)}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {others.map((algorithm) => (
              <Tab
                label={algorithm.title}
                {...a11yProps(0)}
                key={algorithm.title}
              />
            ))}
          </Tabs>
        </AppBar>
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

