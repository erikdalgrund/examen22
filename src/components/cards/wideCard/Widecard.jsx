import React from 'react'

function Widecard({imageSrc}) {
  return (
    <div className='widecard'>
      <div className="widecard-image">
        <img src={imageSrc} alt="" className='widecard-image--hero' />
      </div>
    </div>
  )
}

export default Widecard
