
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import data from '../AccountingDataGrid.json'

const columns = [
  { field: 'Date', headerName: 'Date', width: 100,  },
  { field: 'Description', headerName: 'Description', width: 550 },
  { field: 'Receipt  no #/Ref #', headerName: 'Receipt #', width: 100 },
  { field: 'Quantity in kgs/pkts/ltrs', headerName: 'Quantity', width: 100 },
  { field: 'Category', headerName: 'Category', width: 150 },
  { field: 'In', headerName: 'Received (UGX)', width: 200 },
  { field: 'Out', headerName: 'Disbursed (UGX)', width: 200 },
  { field: 'Balance', headerName: 'Balance', width: 200 },
]

export default function Accounting() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(
      data.map((doc) => ({
        id: doc.ID,
        ...doc,

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

 
 