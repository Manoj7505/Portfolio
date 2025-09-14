import React from 'react'

const Navbar = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="flex flex-row justify-between mb-10   pt-10  pl-10 pr-10 pb-10 top-0 right-0 left-0 fixed bg-gray-300 rounded-b-2xl">
        <div> <h2 className="text-xl font-bold font-serif ">MANOJ</h2> </div>
        <div className="flex flex-row gap-10  text-gray-600">
          <p className='cursor-pointer hover:text-black hover:underline' onClick={() => scrollToSection('home')}>Home</p>
          <p className='cursor-pointer hover:text-black hover:underline' onClick={() => scrollToSection('about')}>About</p>
          <p className='cursor-pointer hover:text-black hover:underline' onClick={() => scrollToSection('resume')}>Resume</p>
          <p className='cursor-pointer hover:text-black hover:underline' onClick={() => scrollToSection('project')}>Project</p>
          {/* <p className='cursor-pointer hover:text-black hover:underline' onClick={() => scrollToSection('blog')}>Blog</p> */}
          <p className='cursor-pointer hover:text-black hover:underline' onClick={() => scrollToSection('contact')}>Contact</p>
        </div>
      </div>
    </>
  )
}

export default Navbar