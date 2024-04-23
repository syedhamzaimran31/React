import { useState, useEffect } from 'react';
import './App.css';

function App() { 
  const [heightValue, setHeightValue] = useState(''); 
  const [weightValue, setWeightValue] = useState(''); 
  const [bmiValue, setBmiValue] = useState(''); 
  const [bmiMessage, setBmiMessage] = useState(''); 

  useEffect(() => {
    // Retrieve data from localStorage when component mounts
    const savedBmiData = JSON.parse(localStorage.getItem('bmiData'));
    if (savedBmiData) {
      setBmiValue(savedBmiData.bmi);
      setBmiMessage(savedBmiData.message);
    }
  }, []);

  const calculateBmi = () => { 
      if (heightValue && weightValue) { 
          const heightInMeters = heightValue / 100; 
          const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
          setBmiValue(bmi); 

          let message = ''; 
          if (bmi < 18.5) { 
              message = 'You are Underweight'; 
          } else if (bmi >= 18.5 && bmi < 25) { 
              message = 'You are Normal weight'; 
          } else if (bmi >= 25 && bmi < 30) { 
              message = 'You are Overweight'; 
          } else { 
              message = 'You are Obese'; 
          } 
          setBmiMessage(message); 
          
          // Saving data to localStorage
          localStorage.setItem('bmiData', JSON.stringify({ bmi, message }));
      } else { 
          setBmiValue(''); 
          setBmiMessage(''); 
          localStorage.removeItem('bmiData'); // Remove data from localStorage if inputs are empty
      } 
  }; 

  return ( 
      <div className="container w-1/3"> 
          <h1 className=''> BMI Calculator</h1> 
          <div className="input-container"> 
              <label className='font-Arial' htmlFor="height">Enter Your Height (cm):</label> 
              <input 
                  type="number"
                  id="height"
                  value={heightValue} 
                  onChange={(e) => setHeightValue(e.target.value)} 
              /> 
          </div> 
          <div className="input-container"> 
              <label htmlFor="weight">Enter Your Weight (kg):</label> 
              <input 
                  type="number"
                  id="weight"
                  value={weightValue} 
                  onChange={(e) => setWeightValue(e.target.value)} 
              /> 
          </div> 
          <button className="calculate-btn" onClick={calculateBmi}> 
              Click to Calculate BMI 
          </button> 
          {bmiValue && bmiMessage && ( 
              <div className="result"> 
                  <p> 
                      Your BMI: <span className="bmi-value">{bmiValue}</span> 
                  </p> 
                  <p> 
                      Result: <span className="bmi-message">{bmiMessage}</span> 
                  </p> 
              </div> 
          )} 
      </div> 
  ); 
} 

export default App;
