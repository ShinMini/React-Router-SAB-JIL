import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

export default function App() {
   return (
      <div>
         <h1>Shin__Mini</h1>
         <nav className={'AppNav'}>
            <Link to="/invoices">Invoices</Link> | {' '}
            <Link to="/expenses">Expenses</Link> | {' '}
            <Link to="/home">Home</Link> | {' '}
            <Link to="/about">About</Link> | {' '}
         </nav>
         <Outlet />
      </div>
   );
}