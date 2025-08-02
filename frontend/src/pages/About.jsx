import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            culpa consectetur rerum id totam eius inventore dicta veritatis
            eligendi sint!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            nobis quidem veritatis aperiam officia quos doloremque dolorem, ab
            laboriosam, voluptates aliquam architecto et libero ut eius quae
            odio atque suscipit!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            magni dolore consectetur nisi, cum laudantium?
          </p>
        </div>
      </div>
      <div className="text-xl py-5">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            cupiditate. Tenetur vitae dolore repudiandae exercitationem
            praesentium blanditiis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            cupiditate. Tenetur vitae dolore repudiandae exercitationem
            praesentium blanditiis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
            cupiditate. Tenetur vitae dolore repudiandae exercitationem
            praesentium blanditiis.
          </p>
        </div>
      </div>
      <NewsletterBox></NewsletterBox>
    </div>
  );
};

export default About;
