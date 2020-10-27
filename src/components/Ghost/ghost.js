import React from 'react'
import '../Ghost/ghost.scss'

function Ghost(){
  return(
    // Ghost Container
    <div className='ghost_container'>
      {/* Ghost */}
        <div className='ghost'>
          {/* Ghost Ears */}
          <div className='ghost_ears'>
            <div className='ear1'></div>
            <div className='ear2'></div>
          </div>
          {/* Ghost Head */}
          <div className='ghost_head'>
              {/* Ghost Eyelids */}
              <div className='eyelids'>
                <div className='eyelid1'></div>  
                <div className='eyelid2'></div>
              </div>
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

          {/* Ghost Body */}
          <div className='ghost_body'>
            {/* Nose and Whiskers */}
            <div className='nose_whiskers'>
              {/* Whisker set 1 */}
              <div className='whiskers1'>
                <div className= 'whisker whisker1'></div>
                <div className= 'whisker whisker2'></div>
                <div className= 'whisker whisker3'></div>
              </div>
              {/* Nose */}
              <div className='nose_mouth'>
                <div className='ghost_nose'></div>
                {/* Mouth */}
                <div className='ghost_mouth'>
                    <div className='mouth mouth1'></div>
                    <div className='mouth mouth2'></div>
                </div>
              </div>
              {/* Whisker set 2 */}
              <div className='whiskers2'>
                <div className= 'whisker whisker4'></div>
                <div className= 'whisker whisker5'></div>
                <div className= 'whisker whisker6'></div>
              </div>
            </div>
                {/* Ghost Cheeks */}
            <div className ='ghost_cheeks'>
              <div className='cheek1'></div>
              <div className='cheek2'></div>
            </div>
            {/* Ghost Mouth */}
            <div className='ghost_mouth'></div> 
          </div>

          {/* Ghost Bottom */}
          <div className='ghost_bottom_container'>
          <div className="ghost_bottom">
            <div className='bottom_piece bottom_piece1'>
              <div className='rect'></div>
              <div className='circle'></div>
            </div>
            <div className='bottom_piece bottom_piece2'>
              <div className='rect'></div>
              <div className='circle'></div>
            </div>
            <div className='bottom_piece bottom_piece3'>
              <div className='rect'></div>
              <div className='circle'></div>
            </div>
            <div className='bottom_piece bottom_piece4'>
              <div className='rect'></div>
              <div className='circle'></div>
            </div>
            <div className='bottom_piece bottom_piece5'>
              <div className='rect'></div>
              <div className='circle'></div>
            </div>
          </div>
          </div>

        </div>

        <div className='ghost_shadow'></div>
      

    </div>
  )
}

export default Ghost