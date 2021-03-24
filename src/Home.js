import React from 'react'
import './App.css';
import ImageSlider from './ImageSlider'
import Carousel from 'react-bootstrap/Carousel'
import { SliderData } from './SliderData';

import './App.css';
import { AiFillBulb } from "react-icons/ai";
import { VscChromeRestore } from "react-icons/vsc";
import {Contact} from './Contact.js'
export const Home = () => (
    <div>
        <div className = 'Ban'>
        <img src="https://techlp.org/img/banner_img.png" className= 'Banner' alt="Banner"/>
        <div className = 'Banner'>
           <h3 className='h3B'>SKILL DEVELOPMENT & TRAINING</h3>
           <br/>
           <h1 className='h1B'>Launch Into The</h1>
           <br/>
           <h1 className='h1B'>World Of</h1>
           <br/>
           <h1 className='h1B'>Technology</h1>
           <h6>Explore the state-of-the art programs crafted by industry experienced professionals for aspiring Engineers</h6>
        </div>
        </div>
        <br/>
        <br/>

        <div className='home2'>
        <div className='h2Banner'>
             <h2>Engineering a skilled India</h2>
             <p>Industry experienced trainers know exactly what is it to make you an employable graduate</p>
        </div>
        <div className ='h2banner'>

        </div>
        <div className='h2Banner'>
            <VscChromeRestore className='h2icon'/>
             <h2>Better Future</h2>
             <p>This is our attempt to make you a better engineer who can contribute to a 'better future'</p>
        </div>
        <div className ='h2banner'>
             
        </div>
        <div className='h2Banner'>
             <h2>Qualified Trainers</h2>
             <p>Our training team comprises of committeed IIT alumni focused on ensuring the engineering fundamentals are well engrained into their students</p>
        </div>
        <div className ='h2banner'>
             
        </div>
        <div className='h2Banner'>
            <AiFillBulb className='h2icon'/>
             <h2>Job Oppurtunity</h2>
             <p>Every organization looks for competent and smart employees. We train you to be one!</p>
        </div>
        </div>
        <br/>
        <br/>
          <div className='hHome'>
              <h2>Our Resource Persons</h2>
        <ImageSlider slides={SliderData} className='image'/>
        <br/>

        <h1 className="stu">Students who were a part of our training programs in Universities and Colleges</h1>
        <Carousel >
          <Carousel.Item >
       <div className="dblock">
       <div className="db1">
            <p>They explained complex concepts in simpler ways that I was always looking for. The presentations made had depth in practical knowledge and it was different from regular curriculum. I would like to attend more such workshops conducted by them.</p>
            <h4>A. Kalesh Khan</h4>
            <h5>B.S. Abdur Rahman Crescent Institute of Science and Technology</h5>
        </div>
       <img
      className="db2"
      src="https://www.techlp.org/img/gallery/gallery_0.jpg"
      alt="First slide"
    />
       </div>
      </Carousel.Item>

  <Carousel.Item interval={500} className="d-blo">
    <div className="dblock">
    <div className="db1">
            <p>The best part about the program was the trainers’ subject knowledge. They were very proficient in their subject and were able to clear our doubts effectively. The program was very informative and useful.</p>
            <h4>A. Mohamed Sabith</h4>
            <h5>B.S. Abdur Rahman Crescent Institute of Science and Technology</h5>
        </div>
    <img
      className="db2"
      src="https://www.techlp.org/img/gallery/gallery_1.jpg"
      alt="Second slide"
    />
    </div>
  </Carousel.Item>

  <Carousel.Item interval={500} className="d-blo">
    <div className="dblock">
    <div className="db1">
            <p>I consider it as a wonderful opportunity to attend this workshop. It will be very useful to work on our mini-project with the shortcuts in design and detailing presented in the program.</p>
            <h4>J. Waseem Ahmed</h4>
            <h5>B.S. Abdur Rahman Crescent Institute of Science and Technology</h5>
        </div>
    <img
      className="db2"
      src="https://www.techlp.org/img/gallery/gallery_2.jpg"
      alt="Third slide"
    />
    </div>
  </Carousel.Item>

  <Carousel.Item interval={500} className="d-blo">
    <div className="dblock">
    <div className="db1">
            <p>They shared their knowledge in a very right and detailed manner. They have great experience in practical structural design. Need to conduct more such wonderful workshops.</p>
            <h4>M. Mohamed Arshath</h4>
            <h5>B.S. Abdur Rahman Crescent Institute of Science and Technology</h5>
        </div>
    <img
      className="db2"
      src="https://www.techlp.org/img/gallery/gallery_3.jpg"
      alt="Fourth slide"
    />
    </div>
  </Carousel.Item>


  <Carousel.Item className="d-blo">
  <div className="dblock">
    <div className="db1">
            <p>At the end of this two-day workshop, I have acquired knowledge on Staadpro, and more facts that are interesting in civil engineering field. I would like to attend more workshops on the structural design modules.</p>
            <h4>R. Harini</h4>
            <h5>B.S. Abdur Rahman Crescent Institute of Science and Technology</h5>
        </div>

    <img
      className="db2"
      src="https://www.techlp.org/img/gallery/gallery_3.jpg"
      alt="Fifth slide"
    />
     </div>
  </Carousel.Item>
</Carousel>

 <br/>
 <br/>
 <br/>

        <div className = 'Ban'>
        
        <div className = 'HomeAbout'>
             <h5>_____ ABOUT US</h5>
           <h3 className='h1B'>Our Profile</h3>
           <br/>
           <p>Tech Launchpad was started by a group of enthusiastic IIT Madras alumni who specialize in Structural Engineering. The team has experience in designing, proof checking and value added engineering of several domestic and international projects. Come and experience 'the joy of learning' form the professionals!</p>
           <br/>
           <ul>
                <li>Well trained professional Engineers</li>
                <li> All our Trainers have experience in industry related programs</li>
           </ul>
        </div>
        <div className="BanAbout">
        <img src="https://techlp.org/img/learning_img.png" className= 'HomeAbout' alt="Banner"/>
        </div>
        </div>
        <Contact/>

         </div>
    </div>
)
