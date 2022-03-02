import Meta from '../components/Meta.js'
import TestimonialCard from '../components/TestimonialCard.js'
import style from '../styles/Testimonial.module.css'

export const testimonialList = [
  {
    id: '1',
    content:
      'Brian always brought professionalism, expertise, and a positive attitude to every piece of software we worked on together. He directly led to the success of our projects and I would be happy to work together again in a minute!',
    author:
      'Jennifer Einberg, Iota Ink',
  },
  {
    id: '2',
    content:
      'RubyLogic had the valuable experience early on with cutting edge full stack development and productivity that we needed in a consultancy. Through the years, Brian has been a reliable and knowledgeable team member, identifying where we needed help as often as being the one to make it happen.',
    author:
      'Patrick Shainin, President, Lifting Sea LLC',
  },
  {
    id: '3',
    content:
      'Our experience with RubyLogic has been fantastic! They took the time to truly understand our business and advise proper practices as a base for the resulting code. This made the process extremely valuable as the time spent working on our system was very productive. Their vast experience with Rails made them a perfect candidate to take on our site and they were able to jump right in to build and improve the system we had. Over the course of time working together, Brian proved himself to be a great partner and we had full trust in all that he did for us.',
    author:
      'Dave Morck, DriveShop',
  },
  {
    id: '4',
    content:
      'We were looking for a custom algorithm that would make it easier to search for specific information on an ongoing basis. Brian created an exceptional program that surpassed our expectations. Because of his expertise, we now have a needed advantage in our field of competition. Brian was an absolute pleasure to work with, and we are grateful for his integrity and software development prowess.',
    author:
      'A Client',
  },
  {
    id: '5',
    content:
      'I would highly recommend Rubylogic to anyone starting or needing to manage an existing Rails project.',
    author:
      'A Client',
  },
]

const testimonials = (props) => {
  return (
    <>
      <Meta title='Testimonials' />
      <div className={style.grid}>
        {
          testimonialList.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))
        }
      </div>
    </>
  )
}

export default testimonials
