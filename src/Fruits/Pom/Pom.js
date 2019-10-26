import React from 'react'
import './Pom.css'


function Pom() {
  return (
    <div className='pom_container'>

      <div className='total_pom'>


        {/* Pom Top */}
        <div className='pom_top'>

          {/* Top Triangles */}
          <div className='tops'>
            <div className='pom_top1'></div>
            <div className='pom_top2'></div>
            <div className='pom_top3'></div>
          </div>
          <div className='pom_top_base'></div>

        </div>

        <div className='pom_base'>



          <div className='pom_inner'>

            {/* Pomegrante Seeds */}
            <div className='all_pom_seeds'>

              {/* Seeds Set 1 */}
              <div className='pom_seeds1 pom_seeds'>
                <div className='pom_seed3 pom_seeds'></div>
                <div className='pom_seed1 pom_seeds'></div>
                <div className='pom_seed2 pom_seeds'></div>
                <div className='pom_seed3 pom_seeds'></div>

              </div>

              {/* Seeds Set 2 */}
              <div className='pom_seeds2 pom_seeds'>
                <div className='pom_seed2 pom_seeds'></div>
                <div className='pom_seed1 pom_seeds'></div>
                <div className='pom_seed2 pom_seeds'></div>
                <div className='pom_seed3 pom_seeds'></div>
                <div className='pom_seed1 pom_seeds'></div>
                <div className='pom_seed3 pom_seeds'></div>

              </div>


              {/* Seeds Set 3 CENTER*/}
              {/* <div className='pom_seeds3 pom_seeds'>
              <div className='pom_seed1 pom_seeds'></div>
              <div className='pom_seed2 pom_seeds'></div>
              <div className='pom_seed3 pom_seeds'></div>
              <div className='pom_seed1 pom_seeds'></div>
              <div className='pom_seed2 pom_seeds'></div>
              <div className='pom_seed3 pom_seeds'></div>
              <div className='pom_seed1 pom_seeds'></div>
            </div> */}

              {/* Seeds Set 4 */}
              <div className='pom_seeds4 pom_seeds'>
                <div className='pom_seed3 pom_seeds'></div>
                <div className='pom_seed1 pom_seeds'></div>
                <div className='pom_seed2 pom_seeds'></div>
                <div className='pom_seed3 pom_seeds'></div>
                <div className='pom_seed1 pom_seeds'></div> <div className='pom_seed2 pom_seeds'></div>
              </div>

              {/* Seeds Set 5 */}
              <div className='pom_seeds5 pom_seeds'>

                <div className='pom_seed2 pom_seeds'></div>
                <div className='pom_seed3 pom_seeds'></div>
                <div className='pom_seed1 pom_seeds'></div>
                <div className='pom_seed3 pom_seeds'></div>

              </div>
            </div>
            <div className='pom_inner_line'></div>

          </div>

        </div>
      </div>

    </div>


  )
}


export default Pom; 