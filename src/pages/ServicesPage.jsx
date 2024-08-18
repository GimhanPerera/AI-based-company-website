import React from 'react'
import Heading from '../components/Heading'
import SingleCard from '../components/SingleCard'
import { services } from '../constants'

const ServicesPage = () => {
  return (
    <>
      <Heading title="Our Services" className='pt-16' text="Explore our new products" />
      <section className="bg-gray-2 pb-10 pt-3 dark:bg-dark lg:pb-20 lg:pt-[30px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <SingleCard
              image={item.imageUrl}
              CardTitle={item.title}
              btnHref={item.link}
              CardDescription={item.text}
              Button="View Details"
            />
          ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage