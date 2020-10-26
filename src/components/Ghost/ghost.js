import React from 'react'
import '../Ghost/ghost.scss'

function Ghost(){
  return(
    <div className='ghost_container'>

     <div className='ghost'>
       {/* Ghost Ears */}
       <div className='ghost_ears'>
         <div className='ear1'></div>
         <div className='ear2'></div>
       </div>
       <div className='ghost_head'>
         <div className='eyes_cheeks'>
          {/* Ghost Eyes */}
          <div className='ghost_eyes'>
            <div className='outer_eye1'>
            <div className='ghost_eye1'>
              <div className='pupil1'></div>
              <div className='pupil2'></div>
            </div>
            </div>
            <div className='outer_eye2'>
              <div className='ghost_eye2'>
                <div className='pupil1'></div>
                <div className='pupil2'></div>
              </div>
            </div>
          </div>
        
         </div>
         
  
       </div>
      {/* Ghost Body */}
       <div className='ghost_body'>
            {/* Ghost Cheeks */}
            <div className ='ghost_cheeks'>
              <div className='cheek1'></div>
              <div className='cheek2'></div>
            </div>
           {/* Ghost Mouth */}
           <div className='ghost_mouth'></div> 
       </div>

       {/* Ghost Bottom */}
       <div className="ghost_bottom">
         <div className='circle'></div>
         <div className='circle'></div>
         <div className='circle'></div>
         <div className='circle'></div>
         <div className='circle'></div>
       </div>

     </div>


    </div>
  )
}

export default Ghost