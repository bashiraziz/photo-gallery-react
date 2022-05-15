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
   <div className='homepic'>
      <img src='https://firebasestorage.googleapis.com/v0/b/ramdhan2022-food-distribution.appspot.com/o/Other%2F2022-05-14%2018_31_30-bismillah%20al-rahman%20al-rahim%20-%20Google%20Search.png?alt=media&token=b60db3dc-a7e8-4111-89b7-2abf43f4da95' alt='Bismillah'></img>
    </div>

<ImageGrid setSelectedImg={setSelectedImg} />

{
  selectedimg &&
   <Modal selectedimg={selectedimg}
    setSelectedImg={setSelectedImg} />
}
</>

)
}