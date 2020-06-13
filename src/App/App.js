import React from "react";

import Header from "../moduls/header";
import Footer from "../moduls/footer";
import Main from "../moduls/main";



import './App.css';


const App = () => {
    return(
      <div className={'wrap-app'}>
          <Header/>
          <Main/>
          <Footer/>
      </div>
    );
}

export default App;