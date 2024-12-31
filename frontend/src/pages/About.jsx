import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-400">
          <p>
            Nivas Mididhodi is a dedicated computer science graduate with
            expertise in AI, machine learning, web development, and UI design.
            He is passionate about leveraging technology to deliver impactful
            solutions while continuously enhancing his skills.
          </p>
          <p>
            The "Forever" website is a platform designed to celebrate lasting
            memories, relationships, and connections. It focuses on creating a
            personalized and interactive space for users to share, preserve, and
            cherish meaningful moments forever.
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>
            India is a diverse and vibrant country known for its rich cultural
            heritage, ancient traditions, and rapid technological advancements.
            As the world's largest democracy, it is a land of unity in
            diversity, home to countless languages, religions, and landscapes.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Discover a world of innovation and creativity, where your ideas come to life with cutting-edge technology and design</p>
        </div>
        <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Empowering connections and preserving moments, we create platforms that celebrate memories and inspire the future</p>
        </div>
        <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We prioritize your needs, offering seamless assistance and solutions to make your experience exceptional</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
