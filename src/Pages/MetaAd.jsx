import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import img1 from '../assets/Meta1.png';
import img2 from '../assets/Meta2.png';
import img3 from '../assets/Meta3.png';
import img4 from '../assets/Meta4.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoPlayer from '../Components/VideoPlayer'; 


const MetaAd = () => {

    const images = [img1, img2, img3, img4];
    const videoUrl = 'https://www.youtube.com/watch?v=2tV0V2PDRrQ';
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };

  return (
    <>
    <Navbar />
    <section className="text-white bg-black">
      <div className="container px-4 py-24 mx-auto">
        <div className="lg:flex">
          <div className="lg:w-1/2 lg:h-auto h-72 mb-8 lg:mb-0">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img alt={`slide-${index}`} src={image} className="w-full h-full object-cover rounded" />
                </div>
              ))}
            </Slider>
            
            <VideoPlayer videoUrl={videoUrl} />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <h1 className="text-3xl font-medium mb-4">Content Making</h1>
            <p className="text-lg leading-relaxed">
              At TheClientsMaker.com, we understand the power of compelling content in capturing the attention of your audience and driving meaningful engagement. Our dedicated team of content creators is here to help you craft content that resonates with your target audience and achieves your business goals.
            </p>
            {/* Add your content here */}
            <h3 className='text-xl font-bold leading-relaxed'>
            Why Choose Us for Content Creation?
            </h3>
            <p className="text-lg leading-relaxed">
            Tailored Content Solutions: We believe in creating content that is customized to meet the unique needs and objectives of your business. Whether you need blog posts, articles, social media content, or more, we've got you covered.<br />
            Quality and Originality: Our team is committed to delivering high-quality, original content that sets your brand apart. We take the time to research your industry, understand your audience, and create content that stands out <br />
            Engagement and Conversion: Our content isn't just about words; it's about driving engagement and conversion. We focus on creating content that captures attention, builds trust, and ultimately drives action from your audience.<br/>
            SEO Optimization: We understand the importance of SEO in content marketing. Our content is optimized for search engines to help improve your website's visibility and attract organic traffic.<br/>
            Creative Approach: Creativity is at the heart of what we do. Whether it's storytelling, visual content, or interactive experiences, we're always looking for innovative ways to showcase your brand and connect with your audience.

            </p>
            <h3 className='text-xl font-bold leading-relaxed'>
            Let's Get Started!
            </h3>
            <p className="text-lg leading-relaxed">
            Ready to take your content to the next level? Contact us today to discuss your content creation needs. Whether you're looking to attract new customers, engage your audience, or drive conversions, we're here to help you succeed with content that makes an impact.<br/>
            <br/>
            At <span className='font-extrabold'>TheClientsMaker.com</span>, we're not just creating content; we're creating connections.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </>
  )
}

export default MetaAd