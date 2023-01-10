import React from 'react'

// Product data
import { paintBrushes, puttyKnife, rollers } from '../../productData/productTools'

// Product component
import { BrushProduct, RollerProduct, PuttyKnife } from '../../components/products'


function Tools() {
  return (
    <div className='tools'>
        <div className='tools__allTools'>
            <div className='tools__title'>
                <h3>Brushes</h3>
            </div>
            <div className='brush__wrapper'>
                {paintBrushes.map((brush) => {
                    return <BrushProduct key={brush.id} data={brush} />
                })}
            </div>
        </div>
        <div className="tools__allTools">
            <div className='tools__title'>
                <h3>Rollers</h3>
            </div>
            <div className="roller__wrapper">
                {rollers.map((roller) => {
                    return <RollerProduct key={ roller.id } data = {roller} />
                })}
            </div>
        </div>
        <div className='tools__allTools'>
            <div className='tools__title'> 
                <h3>Putty Knifes</h3>
            </div>
            <div className='puttyKnife__wrapper'>
                {puttyKnife.map((knife) => {
                    return <PuttyKnife key={ knife.id } data = {knife} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Tools
