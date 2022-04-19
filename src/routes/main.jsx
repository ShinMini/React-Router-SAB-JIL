import * as React from 'react'
import { Outlet } from 'react-router-dom';
import '../Style/Main.css';

export default function Main() {
   return (
      <div className={'Container'}>
         <h1>Main section</h1>
         hi there this is main section :)
         <Outlet />  {/*The outlet swaps out the child for the new child that matches, but the parent layout persists. It's subtle but very effective at cleaning up your components*/}
      </div>
   );
}