import './App.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function TabContent(props) {
  const { children, value, index } = props;

  return (
    <div
      hidden={value !== index}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One"/>
          <Tab label="Item Two" />
          <Tab label="Item Three"/>
        </Tabs>

        <TabContent value={value} index={0}>
           Content One
          </TabContent>
          <TabContent value={value} index={1}>
           Content Two
          </TabContent>
          <TabContent value={value} index={2}>
           Content Three
          </TabContent>
    </div>
  );
}

export default App;
