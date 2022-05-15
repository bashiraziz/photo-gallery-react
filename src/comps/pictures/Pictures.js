import React from 'react'
import {useState} from 'react';
import ImageGrid from '../ImageGrid';
import Modal from '../Modal';
//import styles
import './Pictures.css'

export default function Pictures() {
 const [selectedimg,setSelectedImg]=useState(null);
return(
<>
   

<ImageGrid setSelectedImg={setSelectedImg} />

{
  selectedimg &&
   <Modal selectedimg={selectedimg}
    setSelectedImg={setSelectedImg} />
}
</>

)
}