import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import './index.css';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={
          <main style={{ padding: '1rem' }}> <p>Select an invoice</p> </main>
          } /> {/* 최초 element가 selected되지 않은 시점에서 display 될 구문. */}
          <Route path=":invoiceId" element={<Invoice />} /> {/* invoice ID가 select되었을 때 display될 element */}
        </Route>
        <Route path="*" element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
