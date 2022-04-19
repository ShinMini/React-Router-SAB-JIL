import * as React from 'react'
import { Outlet, Link } from 'react-router-dom';
import '../Style/NavBar.css';

export default function NavBar() {
   return (
      <>
         <h1>Shin__Mini</h1>
         <nav className={'AppNav'}>
            <Link to="/invoices">Invoices</Link> | {' '}
            <Link to="/expenses">Expenses</Link> | {' '}
            <Link to="/home">Movie App</Link> | {' '}
            <Link to="/about">About</Link> | {' '}
         </nav>
         <Outlet />  {/*The outlet swaps out the child for the new child that matches, but the parent layout persists. It's subtle but very effective at cleaning up your components*/}
      </>
   );
}