import React from "react";
import HomePagePic from "./homePagePic/HomePagePic";
import Title from "./Title";

export default function Home() {

 return(
   <>
  <Title />
  
  <div>
      <p> A total amount of $10,637 was donated. May Allah reward abundantly all the donors 
          and all those who worked to make it a successful operation. 
          Ration was distributed at 30 locations and 1100 beneficiaries were served.
      </p>
    </div>
    <div className='homepic'>
    <HomePagePic />
    </div>
    </>
 )
}