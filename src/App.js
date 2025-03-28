import './App.css';
import { Button } from './components/Button';
import { CustomCheckbox } from './components/Checkbox';


function App() {
  return (
    <div className='container'>
      <div className='cnt'>
         <div className='cnt-head'>
          <p className='poppins-regular'>All Pages</p> <CustomCheckbox /> 
         </div>
         <div className='cnt-head no-border'>
          <p className='poppins-regular'>Page 1</p> <CustomCheckbox /> 
         </div>
         <div className='cnt-head no-border'>
          <p className='poppins-regular'>Page 2</p> <CustomCheckbox /> 
         </div>
         <div className='cnt-head no-border'>
          <p className='poppins-regular'>Page 3</p> <CustomCheckbox /> 
         </div>
         <div className='cnt-head'>
          <p className='poppins-regular'>Page 4</p> <CustomCheckbox /> 
         </div>
         <Button />
         
      </div>
      
    </div>
  );
}

export default App;
