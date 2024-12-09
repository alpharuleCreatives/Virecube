import React from "react";
import AvatarOne from "../../assets/images/AvatarImage1.png"
import AvatarTwo from "../../assets/images/AvatarImage2.png"
import AvatarThree from "../../assets/images/AvatarImage3.png"
import AvatarFour from "../../assets/images/AvatarImage4.png"
import AvatarFive from "../../assets/images/AvatarImage5.png"
import AvatarSix from "../../assets/images/AvatarImage6.png"
import "./Testimonials.scss";

const testimonials = [
  {
    text: "Virecube’s deep knowledge of the Beckn protocol and FinTech development ensured our platform’s success. Their reliable and efficient approach sets them apart in the tech industry.",
    name: "Arjun Patel",
    position: "CEO, NeoConnect Systems",
    image: AvatarOne,
    stars: 5,
  },
  {
    text: "Virecube’s expertise in FinTech and the Beckn protocol helped us build a scalable, future-ready platform. Their efficiency and insight made the process seamless, proving them to be a trustworthy partner for critical tech projects.",
    name: "Rahul Saha",
    position: "Founder, FinEdge Solutions",
    image:AvatarTwo,
    stars: 5,
  },
  {
    text: "Virecube delivered a robust payments platform with exceptional understanding of the Beckn protocol. Their professionalism and efficiency make them the go-to team for innovative tech solutions.",
    name: "Meera Kapoor",
    position: "CTO, Paystream Technologies",
    image: AvatarThree,
    stars: 5,
  },
  // {
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  //   name: "Name Surname",
  //   position: "Position, Company name",
  //   image: AvatarFour,
  //   stars: 5,
  // },
  // {
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  //   name: "Name Surname",
  //   position: "Position, Company name",
  //   image: AvatarFive,
  //   stars: 5,
  // },
  // {
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  //   name: "Name Surname",
  //   position: "Position, Company name",
  //   image: AvatarSix,
  //   stars: 5,
  // },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="heading-testimonials">Our Impact in the Digital World!</div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {"★".repeat(testimonial.stars)}
            </div>
            <p className="text">{testimonial.text}</p>
            <div className="author">
              {/* <img src={testimonial.image} alt={testimonial.name} /> */}
              <div>
                <div className="name">{testimonial.name}</div>
                <div className="position">{testimonial.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
