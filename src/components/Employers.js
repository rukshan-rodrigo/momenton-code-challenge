import React from 'react'
import { employerData } from './data'

export const Employers = () => {
  return (
    <>
      <div className="main">
        <div className="level-1">
          {/* First level hierarchi */}
          {employerData.map((data) => {
            if (data.ManagerId === '') return <div>{data.EmployeeName}</div>
            return (
              <div> </div>
            )
          })}
        </div>
        <div className="level-2">
          {/* Second level hierarchi */}
          {employerData.map((data) => {
            if (data.ManagerId === '150') return <div>{data.EmployeeName}</div>
            return (
              <div> </div>
            )
          })}
        </div>
        <div className="level-3">
          {/* Third level hierarchi */}
          {employerData.map((data) => {
            if (data.ManagerId !== '150' && data.ManagerId !== '') return <div>{data.EmployeeName}</div>
            return (
              <div> </div>
            )
          })}
        </div>
      </div>
    </>
  );
};
