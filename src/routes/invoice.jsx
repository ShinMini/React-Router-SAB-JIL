import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

// invoce index를 선택했을 때 display될 html코드 반환. 
export default function Invoice() {
   let navigate = useNavigate();
   let params = useParams();
   let invoice = getInvoice(parseInt(params.invoiceId, 10));

   return (
      <main style={{ padding: '1rem' }}>
         <h2> Total Due: {invoice.amount}</h2>
         <p>
            {invoice.name}: {invoice.number}
         </p>
         <p> Due Date: {invoice.due} </p>
         <p>
            <button
               onClick={() => {
                  deleteInvoice(invoice.number);
                  navigate('/inovices');
               }}
            >Delete
            </button>
         </p>
      </main>
   );
}