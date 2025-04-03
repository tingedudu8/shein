import './App.css';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

import TabContent from "./components/tab-content";
import FoodCard from './components/food-card';

import breakfastMenu from "./data/breakfast-menu.json";
import lunchMenu from "./data/lunch-menu.json";
import dinnerMenu from "./data/dinner-menu.json";


function App() {
  const [value, setValue] = React.useState(0);

  const menusData = [breakfastMenu, lunchMenu, dinnerMenu];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<FreeBreakfastIcon />} variant="fullWidth" label="Breakfast" />
        <Tab icon={<RestaurantIcon />} variant="fullWidth" label="Lunch" />
        <Tab icon={<DinnerDiningIcon />} variant="fullWidth" label="Dinner" />
      </Tabs>
      {
        menusData.map((menu, idx) => 
          <TabContent value={value} index={idx}>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 2,
          }}>
            {
              menu?.data?.map(item =>
                <FoodCard name={item.name} url={item.url} description={item.description} price={item.price}></FoodCard>
              )
            }
          </Box>
        </TabContent>
        )
      }
    </div>
  );
}

export default App;