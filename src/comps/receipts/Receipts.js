import React from 'react'
import {useState} from 'react';
import ImageGrid from '../ReceiptsGrid';
import Modal from '../Modal';
//import styles
import './Receipts.css'

export default function Receipts() {
 const [selectedReceipt,setSelectedReceipt]=useState(null);
return(
<>
   

<ImageGrid setSelectedReceipt={setSelectedReceipt} />

{
  selectedReceipt &&
   <Modal selectedReceipt={selectedReceipt}
    setSelectedReceipt={setSelectedReceipt} />
}
</>

)
}