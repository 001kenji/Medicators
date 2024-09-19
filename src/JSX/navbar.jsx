import React, { Component, useEffect, useState } from "react";
import '../App.css'
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md"; 
import medicatorsIcon from '../assets/img/favicon.png'
import { GiHamburgerMenu } from "react-icons/gi"; 
import { CiMenuFries } from "react-icons/ci";
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
                <div className=" text-sm z-40 font-semibold" id="topLeft-detail-div">
                    
                        <li className=" cursor-pointer hover:bg-blue-600 hover:text-slate-100 p-2 transition-all duration-300 " >About</li>
                        <li className=" cursor-pointer hover:bg-blue-600 hover:text-slate-100 p-2 transition-all duration-300 " >Doctors</li>
                        <li className=" cursor-pointer hover:bg-blue-600 hover:text-slate-100 p-2 transition-all duration-300 " >Contact</li>
                        <li className=" cursor-pointer hover:bg-blue-600 hover:text-slate-100 p-2 transition-all duration-300 " >FAQ</li>
                    
                </div>
                <div className=" fixed z-30 float-left w-full translate-y-10">
                    <span className="relative  float-right mr-4 z-50 bg-blue-600 p-2 cursor-pointer hover:bg-slate-900 hover:text-slate-50 transition-all duration-300 rounded-sm text-slate-50 ">Get Pro</span>
                </div>
                <div className=" font-semibold z-40  " id="top-right-detail-div">
                    <span className="hover:text-amber-400 cursor-pointer text-sm">
                        <MdLocalPhone className=" text-base  text-sky-600" />
                        +880123456789
                    </span>
                    <span className="hover:text-amber-400 cursor-pointer text-sm">
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
                        <li className="hover:bg-blue-600 group  cursor-pointer p-2  px-2 py-1  transition-all duration-300" >
                            <a className=" group-hover:text-slate-100" href="#universal-navbar-div">Home</a>
                        </li>
                        <li className="hover:bg-blue-600 group cursor-pointer px-2 py-1 transition-all duration-300" > <a className=" group-hover:text-slate-100" href="#doctor-carousels-div">Doctors</a></li>
                        <li className="hover:bg-blue-600 group cursor-pointer p-2  px-2 py-1  transition-all duration-300" ><a className=" group-hover:text-slate-100" href="#major-services-div">Services</a></li>
                        <li className="hover:bg-blue-600 group cursor-pointer p-2  px-2 py-1  transition-all duration-300" >
                            <a className=" group-hover:text-slate-100" href="#newsSect">News</a>
                        </li>
                        <li className="hover:bg-blue-600 group cursor-pointer p-2  px-2 py-1  transition-all duration-300" ><a className=" group-hover:text-slate-100" href="#contact-container-div">Contact Us</a></li>
                    </ul>
                </div>
                
                </div>
                
                <div className=" mt-10 md:hidden">
                    <CiMenuFries  onClick={() => Show('func')} className=" cursor-pointer hover:text-slate-900 transition-all duration-300 text-sky-600 font-semibold text-3xl" />
                </div>
            </div>

        </div>
        
        </>
    )
}