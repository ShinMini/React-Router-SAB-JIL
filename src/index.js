import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import About from './routes/About';
import Home from './routes/Home';
import './index.css';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<main style={{ padding: '1rem' }}> <p>Select an invoice</p> </main>} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

