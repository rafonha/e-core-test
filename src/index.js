import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamInfo from "./components/TeamInfo";
import UserInfo from "./components/UserInfo";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:teamId" element={<TeamInfo />} />
        <Route path="/user/:userId" element={<UserInfo />} />
        <Route path="*" element={
          <main>
            <p>No page found, please try again</p>
          </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
