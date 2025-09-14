import React, { useState } from 'react';
import ResumeViewer  from './Resumeviwer';
import { useNavigate } from 'react-router-dom';
function Resume() {
       const navigate = useNavigate();

    return (
        <>
            <div id="resume">
                <h1 className="text-center text-3xl font-bold mb-10">Resume</h1>
                <div className='bg-gray-300 border-gray-200 rounded-xl'>
                    <div className=" m-5 p-10 flex justify-around">
                        <div className=" border bg-gray-300 border-gray-400 rounded-xl">
                            <div className="m-10">
                                <h3 className="mb-10 text-center text-3xl" >Experience</h3>
                                <p>MAR  2025 - JULY  2025</p>
                                <h1 className="text-2xl mt-3 mb-3">Frontend Developer Intern (5 Months)</h1>
                                <p className="mb-4">BOTSEDGE Technology Pvt. Ltd, Chennai.</p>
                                <hr className="border-gray-400" />
                            </div>
                            <div className="m-10">
                                <p>JULY  2025 - PRESENT</p>
                                <h1 className="text-2xl mt-3 mb-3"> JAVA Full Stack Developer Intern (1 Months)</h1>
                                <p className="mb-4">RORIRI Software Solution, Kalakkad, Nallanathapuram.</p>
                                <hr className="border-gray-400" />
                            </div>
                        </div>
                        <div className=" border bg-gray-300 border-gray-400 rounded-xl">
                            <div className="m-10">
                                <h3>2022 - 2025</h3>
                                <h1 className="text-3xl mt-3 mb-3">Bachelor Degree of B.Sc.Computer Science</h1>
                                <p className="mb-4">Einstein College of Arts and Science</p>
                                <hr className="border-gray-400" />
                            </div>
                            <div className="m-10">
                                <h3>2021 - 2022</h3>
                                <h1 className="text-3xl mt-3 mb-3">Higher Scondary Certificate(HSC)</h1>
                                <p className="mb-4">West Tirunelveli Hr. Sec. School</p>
                                <hr className="border-gray-400" />
                            </div>
                            <div className="m-10">
                                <h3>2019 - 2020</h3>
                                <h1 className="text-3xl mt-3 mb-3">Secondary School Leaving Certificate(SSLC)</h1>
                                <p>West Tirunelveli Hr. Sec. School</p>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mb-10 pb-10 '>
                        <button  onClick={()=>navigate('/resume')} className='border border-gray-100 bg-gray-100 rounded-2xl p-3'>
                            Show Resume
                        </button>
                       
                        </div>
                </div>
            </div>
        </>
    )

}
export default Resume;