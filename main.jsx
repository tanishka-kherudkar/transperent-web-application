import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider, useContract } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import { Goerli } from "@thirdweb-dev/chains";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider
    activeChain={Goerli}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)