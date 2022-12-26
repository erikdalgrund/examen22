import React from 'react'
import { Widecard } from '../../components/cards'
import { Carousel } from '../../components/common'
import { CardInfo } from '../../components/cards'
import { content } from '../../components/common/carousel/content'

function Home() {
  return (
    <div className='homepage'>
      <div className='homepage-top'>
          <Carousel images={ content } />
          <CardInfo />
      </div>
      <section>
          <Widecard />
      </section>
    </div>

  )
}

export default Home
