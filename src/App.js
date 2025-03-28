import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { CustomCheckbox } from './components/Checkbox';


function App() {
  const [checkedItems, setCheckedItems] = useState({
    all: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleAllChange = () => {
    const newChecked = !checkedItems.all;
    setCheckedItems({
      all: newChecked,
      page1: newChecked,
      page2: newChecked,
      page3: newChecked,
      page4: newChecked,
    });
  };

  const handleCheckboxChange = (page) => {
    const newCheckedItems = { ...checkedItems, [page]: !checkedItems[page] };
    const allChecked =
      newCheckedItems.page1 &&
      newCheckedItems.page2 &&
      newCheckedItems.page3 &&
      newCheckedItems.page4;

    setCheckedItems({ ...newCheckedItems, all: allChecked });
  };

  return (
    <div className='container'>
      <div className='cnt'>
         <div className='cnt-head'>
          <p className='poppins-regular'>All Pages</p> <CustomCheckbox  checked={checkedItems.all} onChange={handleAllChange}/> 
         </div>
         <div className='cnt-head no-border'>
          <p className='poppins-regular'>Page 1</p> <CustomCheckbox checked={checkedItems.page1} onChange={() => handleCheckboxChange("page1")} /> 
         </div>
         <div className='cnt-head no-border'>
          <p className='poppins-regular'>Page 2</p> <CustomCheckbox checked={checkedItems.page2} onChange={() => handleCheckboxChange("page2")} /> 
         </div>
         <div className='cnt-head no-border'>
          <p className='poppins-regular'>Page 3</p> <CustomCheckbox checked={checkedItems.page3} onChange={() => handleCheckboxChange("page3")} /> 
         </div>
         <div className='cnt-head'>
          <p className='poppins-regular'>Page 4</p> <CustomCheckbox  checked={checkedItems.page4} onChange={() => handleCheckboxChange("page4")}  /> 
         </div>
         <Button />
         
      </div>
      
    </div>
  );
}

export default App;
