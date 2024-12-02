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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    image: AvatarOne,
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    image:AvatarTwo,
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    image: AvatarThree,
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    image: AvatarFour,
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    image: AvatarFive,
    stars: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Name Surname",
    position: "Position, Company name",
    image: AvatarSix,
    stars: 5,
  },
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
              <img src={testimonial.image} alt={testimonial.name} />
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
