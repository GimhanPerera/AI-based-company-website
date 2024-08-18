import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactInfoCard from '../components/ContactInfoCard'
import { GradientCard } from '../components/GradientCard'
import Heading from '../components/Heading'

const ContactUsPage = () => {
  return (
    <>
      <Heading className='pt-16' title="Contact Us" />
      <div className='w-[390px] mx-auto -mt-[30px] mb-[30px]'>
        <GradientCard className={""} containerClassName={""}>
          <ContactForm />
        </GradientCard>
      </div>
      <ContactInfoCard />

    </>
  )
}

export default ContactUsPage