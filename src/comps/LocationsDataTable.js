
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import data from '../data.json'

const columns = [
  { field: 'location', headerName: 'Location', width: 400,  },
  { field: 'beneficiaries', headerName: 'Beneficiaries', width: 300 },
  { field: 'phone', headerName: 'Phone Number', width: 300 },
  { field: 'leader', headerName: 'Leader', width: 300 },
]

const LocationsDataTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    setTableData(
      data.map((doc) => ({
        id: doc.id,
        location: doc.Location,
        beneficiaries: doc.Beneficiaries,
        phone: doc['Phone Number'],
        leader: doc.Leader,

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