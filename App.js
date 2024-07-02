
import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"))
import Fest from './components/1'
import Good from './components/2'


const App = ()=>{
    const [state,setState] =  useState([]);
    return (
      <div>
        <h1>This is a new Beginning</h1>
        <div className="container">
          <button onClick={()=>{
            setState([Fest]);
          }}>Fest</button>
          <button onClick={()=>{
             setState([Good])
          }}>Good</button>
         
          {
             state?.map((Component, index)=>{
                 return <Component key={index} />;
             })
          }
        </div>
      </div>
    );
}



root.render(<App/>);