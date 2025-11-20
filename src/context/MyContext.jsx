import {createContext, useContext, useEffect, useState} from 'react';

const MyContext = createContext();

export const MyProvider = ({children}) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  //const contextValue = 'Hello from Context! Check context/MyContext.jsx file';
  return (
    <MyContext.Provider value={{number, setNumber}}>
      {children}
    </MyContext.Provider>
  );
};

// Current recommendation is to use custom hook instead of the context directly:
// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => useContext(MyContext);
