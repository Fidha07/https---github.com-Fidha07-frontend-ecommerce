import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {

    const contextvalue = {all_product};
    
    return(
        <HomeContext.Provider value={contextvalue}>
            {props.children}
        </HomeContext.Provider>   
     )
}

export default HomeContextProvider;
