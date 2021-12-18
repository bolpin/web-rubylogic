import testimonialStyle from '../styles/Testimonial.module.css'

const TestimonialCard = ({testimonial}) => {
  return (
    <div className={testimonialStyle.card}>
      <p>{testimonial.content}</p>
      <p>-&nbsp;{testimonial.author}</p>
    </div>
  )

}
export default TestimonialCard