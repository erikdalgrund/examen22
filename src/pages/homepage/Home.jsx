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
          <CardInfo 
            imageSrc="/images/cards/family-man.jpeg"
            title="It's never to late!"
            content='Become the "handyman" you always believed you could be!'
            contentSecond="We have everything you need right here."
            outro="Welcome!"
          />
      </div>
      <section>
          <Widecard imageSrc="/images/hero/hero-painter.jpeg"/>
      </section>
    </div>

  )
}

export default Home
