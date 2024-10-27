// pages/index.js

import Header from './Components/Header';
import Footer from './Components/Footer';

export default function Home() {
  return (
    <div className='bg-slate-400 '>
      <Header />
      
      <main className="p-8">
        {/* About Us Section */}
        <section id="about" className="my-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            We are a team of passionate individuals dedicated to delivering the best service and solutions. 
            Our goal is to help you achieve your objectives through innovative strategies and creative design.
          </p>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="my-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
          <p>  
            Check out our previous works that showcase our skills and expertise 
            in Graphic Designing,Digital Marketing,Front-End-Developer. we have a diverse range of projects to demonstrate
          </p>
        </section>

        {/* Services */}
        <section id="service" className="my-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <p>  
            We specialize in Graphic Designing, creating visually captivating content that tells your brand's story.Our Digital Marketing experts drive strategies to boost your online presence, while our Front-End Developers build intuitive, user-friendly websites that enhance user experience.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
