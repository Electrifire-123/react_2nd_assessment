import React from 'react'

function Submit(props) {
    const {submit} = props;
  return (
    <div className='info_container'>
                {submit.map((v) => {
                    const {userName, department, rating,id} = v;
                return(
                    <div className='info' key={id}>
                        <p>Name: {userName}</p>
                        
                        <p>Department: {department}   
                        </p>
                        

                        <p>Rating: {rating}</p>
                    </div>
                )
        })}
                     
    </div> 
  )
}

export default Submit;