import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChangingValues(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      }
    })

  }

  return (<>
    <Header />
    <UserInput userInput={userInput} triggerFunction={handleChangingValues} />
    {!inputIsValid && <p className='center'>Please add a positive Duration.</p>}
    {inputIsValid && <Results results={userInput} />}
  </>
  )
}

export default App
