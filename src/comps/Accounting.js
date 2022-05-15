
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import data from '../AccountingDataGrid.json'

const columns = [
  { field: 'date', headerName: 'Date', width: 100,  },
  { field: 'description', headerName: 'Description', width: 550 },
  { field: 'receipt', headerName: 'Receipt #', width: 100 },
  { field: 'quantity', headerName: 'Quantity', width: 100 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'received', headerName: 'Received (UGX)', width: 200 },
  { field: 'disbursed', headerName: 'Disbursed (UGX)', width: 200 },
  { field: 'balance', headerName: 'Balance', width: 200 },
]

export default function Accounting() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(
      data.map((doc) => ({
        id: doc.ID,
        date: doc.Date,
        description: doc.Description,
        receipt: doc["Receipt  no #/Ref #"],
        quantity: doc["Quantity in kgs/pkts/ltrs"],
        category: doc.Category,
        received: doc.In,
        disbursed: doc.Out,
        balance: doc.Balance,

        }))
    );

  }, [])

  console.log(tableData);

  return (
    <>
    <div style={{alignItem:'left', justifyContent:'left'}}>
    <h6> The conversion rate of USD to UGX is approximately 3,340</h6>
    </div>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={50}
      />
    </div>
    </>
  )
}

 
 