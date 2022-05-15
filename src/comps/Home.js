import React from "react";
import HomePagePic from "./homePagePic/HomePagePic";
import Title from "./Title";

export default function Home() {

 return(
   <>
  <Title />
  
  <div>
      <p> A total amount of $10,637 was donated. May Allah reward abunduntly all the donors 
          and all those who worked to make it a successul operation. 
          Ration was distributed at 30 locations and 1100 beneficeries were served.
      </p>
    </div>
    <div className='homepic'>
    <HomePagePic />
    </div>
    </>
 )
}