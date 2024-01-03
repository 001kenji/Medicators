import React, { Component, useEffect, useState } from "react";
import '../App.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md"; 
import medicatorsIcon from '../assets/img/favicon.png'
import { GiHamburgerMenu } from "react-icons/gi"; 

export default function Navbar() {
    const [current, setcurrent] = useState(1)
    const [showNav, setShowNav] = useState(false)

    function Show(props) {
        if(props == 'show'){
          setcurrent(current == 0 ? 1 : 0)
    
        }else if(props == 'comp'){
          setcurrent(0)
        }else if(props == 'func') {
          setShowNav((e) => !e)
          var nav = document.getElementById('botton-nav-content-div')
          // nav.style.display = showNav ? 'flex' : 'none'
        }
      }
    
      window.addEventListener('resize', function() {
        if(this.screen.width >= 780) {
          setcurrent(0)
        }else {
          setcurrent(1)
        }
      })
    
      window.addEventListener('loadeddata', function () {
        if(screen.width >= 780) {
          setcurrent(0)
          
        }else {
          setcurrent(1)
        }
      })
      useEffect(  () => {
        if(screen.width >= 780) {
          setcurrent(0)
        }else {
          setcurrent(1)
        }
      },[])

      const navStyler = {
        // display : current == 0 ? 'flex' : 'none',
        height : window.innerWidth >= 768 ? 'fit-content' : showNav ? '200px' : '0px',
        
      }


      window.onscroll = function () {
        var navbar = document.getElementById('botton-nav-div')
        var sticky = navbar.offsetTop;
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.style.position = 'sticky'
          } else {
            navbar.style.position = 'relative'
          }
        }


        myFunction()
      }
      
      

    return (
        <>

        <div id='universal-navbar-div'>

            <div id="top-nav-div">
                <div className=" text-sm font-semibold" id="topLeft-detail-div">
                    
                        <li>About</li>
                        <li>Doctors</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                    
                </div>
                <div className=" fixed z-50 float-left w-full">
                    <span className="relative  float-right mr-4 bg-blue-600 p-2 rounded-sm text-slate-50 ">Get Pro</span>
                </div>
                <div className=" font-semibold " id="top-right-detail-div">
                    <span className=" text-sm">
                        <MdLocalPhone className=" text-base text-sky-600" />
                        +880123456789
                    </span>
                    <span className=" text-sm">
                        <MdEmail className=" text-base text-sky-600" />
                        yahoo@medicators.com
                    </span>
                </div>
            </div>
            <div className="  transition-all duration-500" id="botton-nav-div">
                <div id="botton-container-div">
                    <div id="botton-img-div">
                        <img src={medicatorsIcon} alt="" />
                        <span><p className=" text-sky-600">Medi</p>plus</span>
                        </div>
                
                <div id="botton-nav-content-div" style={navStyler} className=' transition-all duration-500  '>
                    <ul id="nav-botton-list">
                        <li>
                            <a href="#universal-navbar-div">Home</a>
                        </li>
                        <li> <a href="#doctor-carousels-div">Doctors</a></li>
                        <li><a href="#major-services-div">Services</a></li>
                        <li>
                            <a href="#newsSect">News</a>
                        </li>
                        <li><a href="#contact-container-div">Contact Us</a></li>
                    </ul>
                </div>
                
                </div>
                
                <div className=" mt-10 md:hidden">
                    <GiHamburgerMenu onClick={() => Show('func')} className=" text-sky-600 font-semibold text-2xl" />
                </div>
            </div>

        </div>
        
        </>
    )
}