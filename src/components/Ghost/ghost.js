import React from 'react'
import '../Ghost/ghost.scss'

function Ghost(){
  return(
    <div className='ghost_container'>

     <div className='ghost'>
       <div className='ghost_head'>
         {/* Ghost Eyes */}
         <div className='ghost_eyes'>
           <div className='ghost_eye'></div>
           <div className='ghost_eye'></div>
         </div>
  
       </div>

       <div className='ghost_body'>
          {/* Ghost Mouth */}
          <div className='ghost_mouth'></div>
       </div>
     </div>


    </div>
  )
}

export default Ghost