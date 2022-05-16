
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import data from '../data.json'

const columns = [
  { field: 'Location', headerName: 'Location', width: 600,  },
  { field: 'Beneficiaries', headerName: 'Beneficiaries', width: 300 },
  { field: 'Phone Number', headerName: 'Phone Number', width: 300 },
  { field: 'Leader', headerName: 'Leader', width: 300 },
]

const LocationsDataTable = () => {

  const [tableData, setTableData] = useState()

  useEffect(() => {
    setTableData(
      data.map((doc) => ({
        id: doc.id,
        ...doc

        }))
    );

  }, [])

  console.log(tableData);

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={50}
      />
    </div>
  )
}

export default LocationsDataTable;