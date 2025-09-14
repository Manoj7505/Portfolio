import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
function ResumeViewer() {
        const navigate=useNavigate();
    return (
        <>

            <div style={{ marginTop: '20px' }} className='mt-30' >
                <div className='text-right mt-30 mr-30 '>
                    <button onClick={()=> navigate("/")} className='border bg-gray-100 border-gray-100 rounded-xl px-2 py-2 mb-5 cursor-pointer'>Back to Home</button>
                    <a href="K.Manoj resume.pdf" download className='border bg-gray-100 border-gray-100 rounded-xl  ml-5 px-2 py-2 mb-5 cursor-pointer'>Download Resume</a>
                </div>
                <>
                <iframe
                    src="K.Manoj resume.pdf"
                    width="100%"
                    height="800px"
                    title="My Resume">
                </iframe>
                </>
            </div>
        </>
    )
}
export default ResumeViewer;