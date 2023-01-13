import React from 'react'
import { Widecard } from '../../components/cards'
import { Carousel } from '../../components/common'
import { CardInfo } from '../../components/cards'
import { content } from '../../components/common/carousel/content'

function Home() {
  return (
    <div className='homepage'>
      <section>
          <Widecard imageSrc="/images/hero/hero-painter.jpeg"/>
      </section>
      <section className='test1'>
        <div className="test">
          
        </div>
        <Carousel images={ content } />
      </section >
      <div className='homepage-top'>
          <CardInfo 
            imageSrc="/images/cards/family-man.jpeg"
            cssClass="card-info"
          />
          <div className="test">

          </div>
      </div>
    </div>

  )
}

export default Home
