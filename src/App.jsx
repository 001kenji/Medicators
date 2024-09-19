import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'
import Navbar from './JSX/navbar' 
import { FaCaretSquareLeft } from "react-icons/fa"; 
import sliderImg from './assets/img/slider.jpg'
import slider2Img from './assets/img/slider2.jpg'
import slider3Img from './assets/img/slider3.jpg'
import blogImg1 from './assets/img/blog-sidebar1.jpg'
import blogImg2 from './assets/img/blog-sidebar2.jpg'
import blogImg3 from './assets/img/blog-sidebar3.jpg'
import sectorImg1 from './assets/img/client1.png'
import sectorImg2 from './assets/img/client2.png'
import sectorImg3 from './assets/img/client3.png'
import sectorImg4 from './assets/img/client4.png'
import sectorImg5 from './assets/img/client5.png'
import SignUpImg from './assets/img/contact-img.png'
import ambulanceImg from './assets/img/ambulance.png'
import pharmecyImg from './assets/img/pharmacy.png'
import medicalImg from './assets/img/stethoscope.png'
import HomeImg from './assets/img/home.png'
import HappyImg from './assets/img/happy.png'
import UserImg from './assets/img/user.png'
import CalendaImg from './assets/img/calendar.png'
import bloodTransImg from './assets/img/blood-transfusion.png'
import teethImg from './assets/img/teeth.png'
import notebookImg from './assets/img/notebook.png'
import EarImg from './assets/img/ear-plug.png'
import sightImg from './assets/img/insight.png'
import heartbearImg from './assets/img/heart-beat.png'
  //  import { FaArrowLeftLong } from "react-icons/fa6"; left straight arrow
import { FaCaretSquareRight } from "react-icons/fa"; 
import { FaArrowRightLong } from "react-icons/fa6"; 
import { FaPlayCircle } from "react-icons/fa";

import LifeTrackImg from './assets/img/section-img.png'

import { FaHouseChimneyCrack } from "react-icons/fa6"; 
import { IoPersonSharp } from "react-icons/io5"; 
import { RiEmotionHappyLine } from "react-icons/ri";
import { MdCalendarMonth } from "react-icons/md"; 
import { RiScissors2Fill } from "react-icons/ri"; 
import { FaTooth } from "react-icons/fa";
import { GiHappySkull, GiHeartBeats } from "react-icons/gi";
import Footer from './JSX/footer'

   function App() {
  const [count, setCount] = useState(0)
  const [current, setcurrent] = useState(0)

  const {register,handleSubmit,setValue,getValues,formState} = useForm({
    defaultValues : {
      name : '',
      email : '',
      phone :'',
      department : 'null',
      doctor : '',
      date :new Date(),
      message :''
    },
    mode: 'onChange'
  })

  const {errors,isSubmitting} = formState
  function AppointmentSubmit(data) {
    console.log(data)
  }

  const Sentense = (props) => {
    return <p>{props}</p>
  }
  const doctorDatabase = [
    {
      title : `We Provide Medical Services That You Can Trust!`,
      img : sliderImg,
      description : 'Beyond the white coat, I\'m a detective, deciphering whispers from your body. Years of honing my clinical gaze translate subtle clues into diagnoses, each case a unique puzzle to solve. ',
      appointment : '/',
      more : '/',
      moreDis : 'Contact Now'
    },
    {
      title : 'We Provide Medical Services That You Can Trust!',
      img : slider2Img,
      description : 'My practice is a tapestry woven from experience and empathy. Each thread represents a patient, their story entrusted to my care.',
      appointment : '/',
      more : '/',
      moreDis : 'Learn More'
    },
    {
      title : 'We Provide Medical Services That You Can Trust!',
      img : slider3Img,
      description : 'Science is my language, technology my toolbelt. From cutting-edge diagnostics to innovative treatments, I embrace the advancements that empower my care.',
      appointment : '/',
      more : '/',
      moreDis : 'About Us'
    }
  ]
 const doctorDatabaseMaper = doctorDatabase.map((details) => 
    <div style={{backgroundImage : `url(${details.img})`}} id='mapping-doc-div'>
      <h1 className=' font-bold xl:text-2xl  translate-y-10 text-lg'>{details.title}</h1>
      <span className=' xl:text-xl font-sans'>{details.description}</span>
      <div className=' flex flex-col sm:flex-row sm:mb-4 w-full mx-auto gap-2 sm:gap-0 justify-around'>
        <button id='btn-1' className=' w-3/4 sm:w-[200px] bg-sky-500 mx-auto  text-slate-50 font-semibold p-2'><a >Get Appointment</a></button>
         <button id='btn-2' className=' w-3/4 sm:w-[200px] mx-auto bg-slate-800 font-semibold text-slate-50 p-2 sm:rounded-sm  ' ><a >{details.moreDis}</a></button>
       </div>
      
    </div>)

function Scroll(props) {
  if(props == 'left'){
    setcurrent((e) => e == 0 ? doctorDatabase.length-1 : e-1)

  }
  else if(props == 'right'){
    
    setcurrent((e) => e==doctorDatabase.length-1 ? 0 : e+1)

  }
}


 useEffect(() => {



    const scroller = async () => {
          setTimeout(() => {
          setcurrent((e) => e == doctorDatabase.length -1 ? 0 : e +1)
  }, 4000);
    }
  
  window.innerWidth < 768 ? scroller() : ''

})
 const  moreinfoDabatase = [
  {
    name :'John Medani',
    title : 'Emergency Cases',
    detail : ' One moment, a child\'s laughter echoes down the hallway, the next, anguished cries pierce the sterile air. We triage, we stabilize, we fight the invisible demons clawing at the precipice of life',
    link :''
  },
  {
    name :'Lona Kent',
    title : 'Doctors Timetable',
    detail : 'My days in the hospital are a vibrant mosaic. Mornings fly by with rounds and consultations, afternoons often bring surgeries or procedures, and evenings may hold research or emergency calls.',
    link :''
  },
  {
    id : 'time',
    name :'Lex Solevan',
    title : 'Opening Hours',
    detail : 'Monday-Friday  \n\n    8.00-20.00  \ dd',
    link :''
  }
]

const MoreInfoMapper = moreinfoDabatase.map((details) => 
    <div id='mapping-moreinfo-div' className=' p-2 flex flex-col justify-around text-left text-slate-50 bg-blue-500 rounded-md shadow-md shadow-slate-800 hover:shadow-blue-500 hover:shadow-xl hover:my-3 hover:pt-2'>
      <small className=' font-semibold text-lg'>{details.name}</small>
      <h1 className=' font-bold  text-2xl'>{details.title}</h1>
  {!details.id ?  <blockquote className=' font-mono'>{details.detail}</blockquote>
      : <blockquote className=' font-mono'>
        <span> <p>Monday-Friday</p>  <p>8.00-20.00</p></span>
        <span> <p>Saturday</p>  <p>9.00-8.30</p></span>
        <span><p>Monday-Thursday</p> <p>9.00-15.00</p></span>
      </blockquote>
  
  }     
 <button className='flex align-middle '><a className='flex focus:text-slate-800 flex-row gap-3 align-middle text-center' href={details.link}>
        <span>LEARN MORE</span> 
        <FaArrowRightLong className=' my-auto' />
        </a></button>
    </div>)

const services = [
  {
    img : ambulanceImg,
    imgAlt :'ambullance img',
    title :'Emergency Help',
    description : 'n the ER, we\'re not just treating conditions, we\'re buying time for miracles'
  },
  {
    img : pharmecyImg,
    title :'Enriched Pharmecy',
    imgAlt :'pharmercy  img',
    description :'Beyond prescriptions, our Enriched Pharmacy offers wellness services and personalized care to help you heal, thrive, and reach your full potential.'
  },
  {
    img : medicalImg,
    title :'Medical Treatment',
    imgAlt :'medical img',
    description :'We tackled the problem head-on and achieved a positive outcome.'
  }
]

const servicesMapper= services.map((detail) => 
    <div id='mapping-service-div'>
      <img className=' p-4 rounded-full' src={detail.img} alt={detail.imgAlt} />
      <h1 className=' text-center text-xl font-bold'>{detail.title}</h1>
      <blockquote className=' text-center text-slate-600'>{detail.description}</blockquote>


    </div>)

const facilityData = [
  {
    img : HomeImg,
    number :3851,
    description :'Hospital Rooms'
  },
  {
    img : UserImg,
    number :543,
    description :'Specialist Doctors'
  },
  {
    img : HappyImg,
    number :4283,
    description :'Happy Patients '
  },
  {
    img : CalendaImg,
    number :22,
    description :'Years of Experience'
  } 
]

const facilityMapper = facilityData.map((details) => 
    <div id='mapping-facility-div'>
      <img className=' bg-slate-50 justify-center p-4 align-middle flex content-center rounded-full' src={details.img} alt="" />
      <span className=' font-bold text-3xl'>{details.number}</span>
      <span className='  font-mono'>{details.description}</span>
    </div>)
    const healthServiceData = [
      {
        img : notebookImg,
        title : 'General Treatment',
        description : 'desctiption here'
      },
      {
        img :teethImg,
        title : 'Teeth Whitening',
        description : 'desctiption here'
      },
      {
        img :heartbearImg,
        title : 'Heart Surgery',
        description : 'desctiption here'
      },
      {
        img : EarImg,
        title : 'Ear Treatment',
        description : 'desctiption here'
      },
      {
        img :sightImg,
        title : 'Vision Problems',
        description : 'desctiption here'
      },
      {
        img : bloodTransImg,
        title : 'Blood Transfusion',
        description : 'desctiption here'
      }
    ]
    const HealthServiceMapper = healthServiceData.map((details) => 
    <div id='mapping-hearlthService-div'>
      <img className=' p-3 w-16 md:p-2  h-16 rounded-md' src={details.img} alt="" />
      <div className=' w-[60%] grid text-left'>
         <span className=' text-left text-slate-800 font-semibold text-xl'>{details.title}</span>
      <span className=' text-slate-500 '>{details.description}</span>
   
      </div>
      </div>)

const NewsDatabase = [
  {
    img :blogImg1,
    date :' 22-december-2020',
    title : 'We have announced our new product',
    description : 'Curious about taking control of your health? My groundbreaking invention has been featured in the news, showcasing its potential to revolutionize [specific condition or area of health].'
  },
  {
    img :blogImg2,
    date : '15-july-2020',
    title : 'Top way for solving teeth problems',
    description : 'Uncertain about those throbbing teeth? Don\'t let misinformation cause pain. My research on modern solutions to common dental issues is featured in the news today. Give us a call, let\'s talk relief, and get you back to smiling confidently.'
  },
  {
    img :blogImg3,
    date : '5-Jan-2020',
    title : 'We provide highly business solutions',
    description : 'Tired of battling the same health concerns? My innovative solutions have demonstrably improved patient outcomes in news reports like technological. Let\'s talk about how I can transform your health journey too'
  }
]

const NewsDatabaseMapper = NewsDatabase.map((details) => 
    <div className=' border-[1px] rounded-sm  border-blue-500 flex flex-col lg:max-w-[250px] md:max-w-[200px]  xl:min-w-[350px] max-w-[150px]'>
      <div className='  w-full'>
        <img className='xl:max-h-[200px] w-full rounded-sm' src={details.img} alt="" />
      </div>
      <div className='  flex flex-col gap-3 justify-around align-middle'>
        <span className=' p-1 my-2 text-sm mx-auto rounded-sm bg-blue-500 text-slate-50 font-semibold w-fit minw-w-[80px] '>{details.date}</span>
        <h1 className='p-1 text-center font-bold text-slate-900 text-sm'>{details.title}</h1>
        <blockquote className=' p-3 text-sm text-center sm:text-lg text-slate-500'>{details.description}</blockquote>
      </div>
    </div>)

const sectorDatabase = [
  {
    img :sectorImg1
  },
  {
    img :sectorImg2
  },
  {
    img :sectorImg3
  },
  {
    img :sectorImg4
  },
  {
    img :sectorImg5
  }
]

const sectorMapper = sectorDatabase.map((img) => 

    <img className=' w-[70%] lg:w-[40%] xl:max-w-[600px] md:w-[45%]  mx-auto p-2' src={img.img}></img>)

const SelectFunc = (event) => {
  const {name,value} = event.target
  setValue(name,value)
  console.log(getValues('department'))
  removeEventListener
}
const DoctorFunc = (event) => {
  const {name,value} = event.target
  console.log(name,value)
  setValue(name,value)

}

const [showScroller, setShowScroller] = useState(true)


window.addEventListener('scroll', function() {
  console.log('scrolled')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setShowScroller(true)
  } else {
    setShowScroller(false)
  }
})

const ToTopStyler ={
  display : showScroller ? 'flex' : 'none'
}
  return (
    
 

    <>

    <div className='' id='navSect'>
      <Navbar />
    </div>

    <div id='doctor-carousels-div'>

    <section className=' overflow-hidden'>
      <div id='hosting-doctor-div'>
        <FaCaretSquareLeft onClick={() => Scroll('left')} className=' cursor-pointer hover:text-slate-900 transition-all duration-300 hidden sm:ml-[4%] sm:flex sm:text-3xl sm:absolute text-lg min-w-5 text-sky-600' id='arrowDoc'/>
        <div style={{transform: `translateX(-${current * 100}%)`}} className=' transition ease-in-out duration-500' id='hosting-mapping-div'>{doctorDatabaseMaper}</div>
        <FaCaretSquareRight onClick={() => Scroll('right')} className=' cursor-pointer hover:text-slate-900 transition-all duration-300  sm:flex sm:text-3xl sm:absolute sm:ml-[89%]  text-lg min-w-5 text-sky-600' id='arrowDoc' />
      </div>
    </section>     

    </div>

      <div id='moreInfo-container-div'>
          <div id='hosting-moreinfo-div'>{MoreInfoMapper}</div>

      </div>

      <div id='services-container-div'>
        <div className=' flex flex-col align-middle mx-auto'>
          <h1 className=' font-semibold px-4 text-black text-center xl:text-4xl text-2xl'>We Are Ready to Help You & Your Family</h1>
          <img className=' xl:w-20 w-16 mx-auto my-3' src={LifeTrackImg} alt="" />
          <blockquote className=' text-slate-500 px-4 text-center'>I may not be able to cure all ills, but I can equip you with the tools to live your healthiest life.</blockquote>
        </div>
        <div id='hosting-servicesMapper-div'>{servicesMapper}</div>

      </div>

      <div className=' text-slate-50 bg-blue-600 p-2' id='facility-container-div'>
          <div id='hosting-facility-div'>{facilityMapper}</div>
      </div>

      <div id='major-services-div'>
        <div className=' flex flex-col justify-around px-6 text-center p-2 gap-4'>
          <span className=' font-semibold md:text-3xl xl:text-4xl  text-2xl'>We Offer Different Services To Improve Your Health</span>
          <img className=' w-18 mx-auto' src={LifeTrackImg} alt="" />
          <span className=' text-slate-500'>I may not be able to cure all ills, but I can equip you with the tools to live your healthiest life.</span>
        </div>
        <div className=' grid gap-5'>
          <div className=' flex ml-1  flex-col'>
                <span className=' font-semibold text-2xl md:text-3xl text-left'>Who We Are</span>
                <span className=' bg-blue-500 rounded-full h-0.5 w-28'></span>

          </div>
          <blockquote className=' text-center mx-auto text-slate-500'>I wear a white coat, but behind it beats a heart that listens. My days are stitched with science, but empathy threads each diagnosis. In whispers and murmurs, I decipher the body's story, guiding it back to health, one beat at a time.</blockquote>
          <blockquote className=' text-center mx-auto text-slate-500'>
I wear a stethoscope woven from empathy, a scalpel honed by precision, and a smile built on resilience. I bridge the gap between vulnerability and wellness, weaving threads of knowledge and comfort into the tapestry of every breath.</blockquote>
        </div>

        <div id='video-container-div'>
          <div id='play-video-div' className=' flex justify-center my-auto  rounded-full p-8  mx-auto'>
            <span className=' h-5  cursor-pointer w-5 xl:h-20 xl:w-20  rounded-full duration-700  ease-in-out animate-ping bg-slate-100 absolute p-8'></span>
            <span className=' h-5  cursor-pointer w-5 xl:h-20 xl:w-20  rounded-full duration-700 ease-in-out animate-ping bg-slate-100 absolute p-8'></span>
            <span className=' h-5  cursor-pointer w-5 xl:h-20 xl:w-20  rounded-full animate-pulse bg-slate-100 absolute p-8'></span>
            <FaPlayCircle className=' cursor-pointer xl:text-5xl animate-none z-50  text-4xl text-blue-500'/></div>

        </div>

        <div id='emergency-container-div'>
          <div id='bg-emergency-div' className=' text-center bg-opacity-80 bg-blue-500 '>
            <span className=' font-bold text-2xl text-slate-50 text-center '>Do you need Emergency Medical Care ? Call @ +254 7683083987</span>
          <span className=' text-center text-slate-100 font-mono px-1'> Our emergency care unit is staffed with experts eager to help, and swift action can make a world of difference. Don't hesitate, call now, and let us ease your worries and ensure your well-being.</span>
          <div className=' flex flex-row gap-4'>
            <button className=' min-w-32 font-semibold bg-slate-100 rounded-md p-2 text-sm text-blue-500 text-center'>Contact Now</button>
            <button className=' min-w-32 min-h-[45px] border-[1px] border-slate-100 rounded-md p-2 h-fit text-sm flex flex-row gap-4 align-middle my-auto font-semibold text-slate-950'> <p>Learn More</p>  <p><FaArrowRightLong className='relative my-auto'/></p></button>
          </div>
          </div>
          
        </div>

        <div className=' flex flex-col justify-around px-6 text-center p-2 gap-4'>
          <span className=' font-semibold md:text-3xl text-2xl'>We Maintain Cleanliness Rules Inside Our Hospital</span>
          <img className=' w-18 md:w-20 mx-auto' src={LifeTrackImg} alt="" />
          <span className=' text-slate-500'>I may not be able to cure all ills, but I can equip you with the tools to live your healthiest life.</span>
        </div>

        <div id='maintain-showcase-div'>
        </div>

        <div className=' flex flex-col justify-around px-6 text-center p-2 gap-4'>
          <span className=' font-semibold xl:text-4xl text-2xl'>We Offer Differenct Services To Improve Your Health</span>
          <img className=' w-18 mx-auto' src={LifeTrackImg} alt="" />
          <span className=' text-slate-500'>I may not be able to cure all ills, but I can equip you with the tools to live your healthiest life.</span>
        </div>

        <div id='health-service-container-div'>
          {HealthServiceMapper}

        </div>

        <div className=' flex flex-col justify-around px-6 text-center p-2 gap-4'>
          <span className=' xl:text-4xl font-semibold text-2xl'>We Provide You The Best Treatment In Resonable Price</span>
          <img className=' w-18 mx-auto' src={LifeTrackImg} alt="" />
          <span className=' text-slate-500'>I may not be able to cure all ills, but I can equip you with the tools to live your healthiest life.</span>
        </div>

        <div className=' flex flex-col md:flex-row md:flex-wrap gap-10'>
          <div className=' lg:w-[45%] mx-auto p-2 border-[0.5px] border-sky-300 bg-white shadow-md shadow-sky-400 rounded-sm w-[90%]' id='treatment-card-div'>
            <div className=' flex flex-col align-middle text-center'>
              < RiScissors2Fill className=' text-7xl mx-auto text-sky-500'/>
              <h1 className=' text-xl font-semibold'>Plastic Suggery</h1>
              <blockquote className=' flex flex-row gap-1 align-middle text-center mx-auto my-auto items-baseline'>
                <span className=' font-bold text-4xl text-blue-600'>$199</span>
                <small className=' text-slate-500 text-base'>/Per Visit</small>
              </blockquote>
            </div>
            <div className=' grid gap-2 font-serif text-sm text-slate-500 my-4'>
              <span><p>Cavitties</p> <p></p></span>
              <span><p>Tooth Cancer</p> <p></p></span>
              <span><p>some description</p> <p></p></span>
              <span><p>some description</p> <p></p></span>
            </div>
            <button id='toBlack' className=' duration-500 ease-in-out w-full text-slate-50 bg-blue-500  hover:text-slate-950 font-semibold text-sm text-center rounded-md p-2'>Book Now</button>
          </div>

          <div className=' lg:w-[45%] mx-auto p-2 border-[0.5px] border-sky-300 bg-white shadow-md shadow-sky-400 rounded-sm w-[90%]' id='treatment-card-div'>
            <div className=' flex flex-col align-middle text-center'>
              < FaTooth className=' text-7xl mx-auto text-sky-500'/>
              <h1 className=' text-xl font-semibold'>Teeth Whitening</h1>
              <blockquote className=' flex flex-row gap-1 align-middle text-center mx-auto my-auto items-baseline'>
                <span className=' font-bold text-4xl text-blue-600'>$299</span>
                <small className=' text-slate-500 text-base'>/Per Visit</small>
              </blockquote>
            </div>
            <div className=' grid gap-2 font-serif text-sm text-slate-500 my-4'>
              <span><p>Cavitties</p> <p></p></span>
              <span><p>Tooth Cancer</p> <p></p></span>
              <span><p>some description</p> <p></p></span>
              <span><p>some description</p> <p></p></span>
            </div>
            <button id='toBlack' className=' duration-500 ease-in-out w-full text-slate-50 bg-blue-500  hover:text-slate-950 font-semibold text-sm text-center rounded-md p-2'>Book Now</button>
          </div>

          <div className=' lg:w-[45%] mx-auto p-2 border-[0.5px] border-sky-300 bg-white shadow-md shadow-sky-400 rounded-sm w-[90%]' id='treatment-card-div'>
            <div className=' flex flex-col align-middle text-center'>
              < GiHeartBeats className=' text-7xl mx-auto text-sky-500'/>
              <h1 className=' text-xl font-semibold'>Heart Suggery</h1>
              <blockquote className=' flex flex-row gap-1 align-middle text-center mx-auto my-auto items-baseline'>
                <span className=' font-bold text-4xl text-blue-600'>$399</span>
                <small className=' text-slate-500 text-base'>/Per Visit</small>
              </blockquote>
            </div>
            <div className=' grid gap-2 font-serif text-sm text-slate-500 my-4'>
              <span><p>Cavitties</p> <p></p></span>
              <span><p>Tooth Cancer</p> <p></p></span>
              <span><p>some description</p> <p></p></span>
              <span><p>some description</p> <p></p></span>
            </div>
            <button id='toBlack' className=' duration-500 ease-in-out w-full text-slate-50 bg-blue-500  hover:text-slate-950 font-semibold text-sm text-center rounded-md p-2'>Book Now</button>
          </div>

          
        </div>

      </div>

      <div id='newsSect' className=' flex flex-col justify-around px-6 text-center p-2 my-10 gap-4'>
          <span className=' font-semibold text-2xl xl:text-4xl'>Keep Up With Our Most Recent Medical News</span>
          <img className=' w-18 mx-auto' src={LifeTrackImg} alt="" />
          <span className=' text-slate-500'>I may not be able to cure all ills, but I can equip you with the tools to live your healthiest life.</span>
        </div>

        <div className=' gap-4 xl:w-full align-middle justify-center flex flex-row flex-wrap'>
          {NewsDatabaseMapper}
        </div>

        <div className=' my-3' id='dis-Sector-div'>
          <div className=' bg-blue-500 flex flex-col md:flex-row md:flex-wrap gap-2 bg-opacity-70 p-2'>
            {sectorMapper}

          </div>

        </div>

        <div id='contact-container-div' className=' flex flex-col justify-around px-6 text-center p-2 gap-4'>
          <span className=' font-semibold text-2xl'>We Are Always Ready To Help You.Book An Appointment</span>
          <img className=' w-18 mx-auto' src={LifeTrackImg} alt="" />
          <span className=' text-slate-500'>Our schedule fills up quickly, so call early to secure your spot for personalized care.</span>
        </div>

        <div >
          <form onSubmit={handleSubmit(AppointmentSubmit)} id='appointmentForm' noValidate>
            <input placeholder='Name' {...register('name',{ required : 'Enter Name'})} type="text" />
            {errors.name && <p id='errorForm'>{errors.name?.message}</p>}
            <input {...register('email',{
              required : 'Enter Email'
            })} placeholder='Email' type="emial" />
            {errors.email && <p id='errorForm'>{errors.email?.message}</p>}
            <input {...register('phone',{
              minLength : {
                value : 8,
                message : 'Input More Characters'
              },
              required : 'Enter Number'
            })} placeholder='Phone Number' type="number" />
            {errors.phone && <p id='errorForm'>{errors.phone?.message}</p>}
            <select name='department' noValidate={false} onChange={SelectFunc}  id="">
              <option value="" disabled selected>Department</option>
              <option value="Cardiac Clinic">Cardiac Clinic</option>
              <option value="Neurology">Neurology</option>
              <option value="Dentistry">Dentistry</option>
              <option value="Gastroenterology">Gastroenterology</option>
            </select>
            <select   name="doctor" noValidate={false} onChange={DoctorFunc} id="">
              <option disabled value="null" selected>Doctor</option>
              <option value="Cardiac Clinic">Dr. Dery Alex</option>
              <option value="Neurology">Dr. Clack Medal</option>
              <option value="Dentistry">Dr. Cloe Sulves</option>
              <option value="Gastroenterology">Dr. Jovis Karon</option>
            </select>
            <input placeholder='Date' {...register('date',{
              valueAsDate : true,
              required : 'Fill in Date'
            })} min={2024-1-1} max={2027-1-1}   type="date" />
            {errors.date && <p id='errorForm'>{errors.date?.message}</p>}
            <textarea {...register('message',{
              required :'Enter Messsage',
              minLength : {
                value : 40,
                message : 'Enter more Information'
              }
            })} placeholder='Message' height={20} ></textarea>
            {errors.message && <p id='errorForm'>{errors.message?.message}</p>}
            <button className=' rounded-sm p-3 mx-auto mb-1 bg-blue-500 text-slate-50 font-semibold text-sm w-fit min-w-[80px] text-center' type='submit'>Book An Appointment</button>
          </form>
        </div>

        <div id='signUp-contaienr-div'>
              <div className=' md:w-[50%] flex flex-col w-full'>
                <span className=' text-slate-500 text-sm xl:text-lg'>(We will be confirm by an Text Message)</span>
                <img className=' md:w-[80%] p-0' src={SignUpImg} alt="" />
              </div>
              <div className=' md:w-[50%] md:h-[100%] flex flex-col bg-blue-200 xl:min-h-[300px] xl:justify-around text-center gap-4 mb-1 p-1'>
                <h1 className=' text-xl font-semibold text-slate-800'>Sign Up for newsletter</h1>
                <blockquote className=' text-slate-500'>Unlock health insights and tips straight to your inbox.</blockquote>
                <input placeholder='Your email address' className=' placeholder:pl-2 bg-slate-50 h-[40px] rounded-sm text-slate-950 font-semibold text-center placeholder:text-left' type="text" />
                <button className=' p-2 w-3/4 mx-auto text-slate-50 bg-blue-500 rounded-sm mb-2 font-semibold text-sm text-center'>Subscribe</button>
              </div>
        </div>

        <div id='footerSect'>
          <Footer/>
        </div>

        <div className=' ease-in-out transition-all duration-500 ' style={ToTopStyler}>
        <button className=' animate-bounce bg-blue-600 text-slate-100 p-1 md:text-base text-sm'  id="myBtn" title="Go to top"><a href="#navSect"><FaArrowRightLong className=' p-1 text-xl md:text-2xl xl:text-4xl rotate-[270deg]' /></a></button>
        </div>

    
    </>
  )
}

export default App
