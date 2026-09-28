
import { createContext } from 'react';
import { useState, useContext } from "react";

const CheeseContext = createContext('gouda');


const CheeseContextProvider = ({children})=> {
  const [cheese, setCheese] = useState('mozerralla')
    return(
      <CheeseContext.Provider value={{cheese, setCheese, theBestCheese: 'pepperjack'}}>
            {children}
        </CheeseContext.Provider>
        
    )
}

export {CheeseContext, CheeseContextProvider}
