function Project() {
    return (
        <>
            <div id="project" className="mt-10 mb-10 bg-gray-300 border-gray-200 rounded-xl">
                <h1 className="text-center text-3xl font-bold pt-10">Projects</h1>
                <div className="flex justify-evenly mt-10 mb-10">
                    <div>
                        <img className=" mt-15 mb-15 m-5 h-85 w-96 object-cover rounded-2xl" src="roriri.png" />
                        <p className="text-center mb-10">HTML  •  CSS  •  JavaScript</p>
                        <h1 className="text-center mb-10 font-bold text-2xl">Landing Page</h1>
                    </div>
                    <div>
                        <img className="mt-15 mb-15 m-5 h-85 w-96 object-cover rounded-2xl" src="acadamy.png" />
                        <p className="text-center mb-10">HTML  •  CSS  •  JavaScript</p>
                        <h1 className="text-center mb-10 font-bold text-2xl">Company Portfolio</h1>
                    </div>
                    <div>
                        <img className="mt-15 mb-15 m-5 h-85 w-96 object-cover rounded-2xl" src="cal.png" />
                        <p className="text-center mb-10">HTML  •  CSS  •  JavaScript</p>
                        <h1 className="text-center mb-10 font-bold text-2xl">Calculator</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;