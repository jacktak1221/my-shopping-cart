import React from 'react';
import './App.css';
import DenseAppBar from "./components/DenseAppBar";
import ProductContent from "./components/ProductContent";

function App() {


  return (
    <div className="App">
      <DenseAppBar />
        <ProductContent />
    </div>
  );
}

export default App;
