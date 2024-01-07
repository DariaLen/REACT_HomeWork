import React, { useState } from 'react'
import s from './DataTable.module.css'

export default function DataTable({data}) {
  if(!data){
    return <div>No data</div>
  }


 
    const maskCVC = cvc => {
        if (!cvc) return '';
        return ('' + cvc).replace(/^(.{0,2})/, '**');
      };

  return (
    <div className={s.wrapper}>
        <table className={s.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Card Number</th>
                    <th>Expiry Date</th>
                    <th>CVC</th>
                </tr>
            </thead>
            <tbody>
                {data.map((card, index) => (
                    <tr key={index}>
                        <td>{card.name}</td>
                        <td>{card.cardNumber}</td>
                        <td>{card.expiryDate}</td>
                        <td>{maskCVC(card.cvc)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  </div>

  )
}
