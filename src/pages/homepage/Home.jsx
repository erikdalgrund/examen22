import React from 'react'
import { CardInfo, Carousel } from '../../components/common'
import { content } from '../../components/common/carousel/content'

function Home() {
  return (
    <div className='homepage'>
        <Carousel images={ content } />
        <CardInfo />
    </div>
  )
}

export default Home
