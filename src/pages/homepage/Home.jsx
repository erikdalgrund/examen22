import React from 'react'
import { Carousel } from '../../components/common'
import { content } from '../../components/common/carousel/content'

function Home() {
  return (
    <div className='homepage'>
        <Carousel images={ content } />
    </div>
  )
}

export default Home
