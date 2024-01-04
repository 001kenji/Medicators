import React from "react";
import '../App.css'
export default function Footer()  {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className=" pl-3 text-slate-100 flex flex-col  gap-3 py-5 bg-blue-600">
            <div className=" align-middle grid relative w-full">
                <div className=" md:mx-auto my-1 flex flex-col  gap-1">
                    <h1 className="text-white font-mono font-semibold text-center text-2xl">About Us</h1>
                    <span className=" md:mx-auto bg-slate-50 h-1 rounded-sm w-[5rem]"></span>
                    <blockquote className="font-serif  text-slate-200 text-center">I wear a white coat, but behind it beats a heart that listens. My days are stitched with science, but empathy threads each diagnosis. In whispers and murmurs, I decipher the body's story, guiding it back to health, one beat at a time.</blockquote>
                    <div className=" text-white">

                    </div>
                </div>
                
                <div className=" md:flex  md:flex-row md:flex-wrap">
                  <div className=" md:flex-row md:flex-wrap md:w-full  md:justify-between md:pr-4 flex flex-col">
                    <div className=" md:flex xl:w-[33%]  md:w-[50%] md:flex-row md:flex-wrap md:justify-center align-middle">
                    
                        <div className=" gap-0 font-semibold w-full md:my-2  text-base flex flex-col">
                            <div className="  md:mx-auto flex md:justify-center md:align-middle flex-col mb-5">
                                <span className="text-white font-mono font-semibold text-2xl">Quick Links</span>
                                <span className=" md:mx-auto md:w-[7rem] bg-slate-50 h-1 w-[8rem]"></span>
                            </div>

                            <div className=" md:flex md:flex-row md:justify-around md:gap-6">
                                <div className=" flex flex-col gap-1">
                                    <span>Home</span>
                                    <span>About Us</span>
                                    <span>Services</span>
                                    <span>Our Cases</span>
                                    <span>Other Links</span> 
                                </div>

                                <div className=" font-semibold gap-1  text-base flex flex-col">
                            <span>Consulting</span>
                            <span>Finance</span>
                            <span>Testimonials</span>
                            <span>FAQ</span>
                            <span>Contact Us</span>
                                </div>
                            </div>
                            
                                
                        </div>
                            
                    </div>
                    
                    
                
                    <div className=" md:flex md:flex-col   xl:w-[33%]   md:w-[50%] ">
                        <div className=" md:mx-auto relative flex flex-col md:mb-6 gap-1">
                            <h1 className="text-white font-mono font-semibold text-2xl">Open Hours</h1>
                            <span className=" md:mx-auto bg-slate-50 h-1 rounded-sm w-[6rem]"></span>
                        </div>
                        <div className="font-semibold md:px-3 flex  pr-4 flex-col gap-1">
                            <blockquote className=" text-slate-200 text-center font-normal font-serif">My doors swing wide for your well-being, mirroring the sun’s arc.</blockquote>
                            <span className=" flex flex-row w-full justify-between"><p>Monday-Friday</p><p>8.00-20.00</p></span>
                            <span className=" flex flex-row w-full justify-between"><p>Saturday</p><p>9.00-18.00</p></span>
                            <span className=" flex flex-row w-full justify-between"><p>Monday-Thursday</p><p>9.00-15.00</p></span>
                        
                        </div>
                    </div>
                    <div className=" md:w-[50%] xl:w-[33%] md:mx-auto md:py-5 md:flex md:flex-col ">
                        <div className=" md:mx-auto flex flex-col gap-1">
                            <h1 className="text-white font-mono font-semibold text-2xl">Newsletter</h1>
                                <span className="md:mx-auto md:w-[5rem] bg-slate-50 h-1 rounded-sm w-[4rem]"></span>
                        </div>
                        <div className=" inline-flex w-full">
                            <input placeholder="Your email address" className=" bg-transparent outline-none placeholder:text-slate-50 w-[90%] rounded-sm p-3 text-left pl-2  my-2 mx-auto text-white text-sm border-[1px] border-slate-50" type="text" />
                        </div>
                    </div>  
                </div>
            </div>
                
            </div>
            <div>
                <blockquote className=" xl:text-lg text-center flex flex-col">
                <span className=" text-center mx-auto inline-flex gap-1">&copy; Copyright <p>{year}</p> | All Rights Reserved by </span>
                <span><a className=" underline-offset-2 underline font-semibold xl:text-xl text-lg" href="https://briannjuguna.netlify.app/">Brian Njuguna</a></span>
                </blockquote>
            </div>
        </footer>
    )
}