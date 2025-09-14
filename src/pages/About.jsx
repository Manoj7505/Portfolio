function About() {
    return (

        <>
            <div id="about">
                <h1 className="text-center text-3xl font-bold mb-10">About</h1>
                <div className="flex flex-row justify-evenly m-9">
                    <div className="border mt-10 bg-gray-300 border-gray-200 rounded-2xl">
                        <img className=" m-5 h-85 w-96 object-cover rounded-2xl" src="me.jpg" alt="Manoj" />
                        <div className="text-center text-2xl font-bold">
                            <h3>MANOJ</h3>
                        </div>
                        <div className="text-center text-lm font-semibold ml-25 mr-25 mt-5 mb-10  pb-3 border bg-gray-100 border-gray-100 rounded-3xl">
                            <span className=" ml-55 relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                            </span>
                            <p className="cursor-pointer">Available for Work</p>
                        </div>

                    </div>
                    <div>
                        <div className="text-2xl font-semibold  mt-40">
                            <h2> "Eager to work in a challenging environment <br />where I can learn and grow while giving my best.<br /> I value sincerity and honesty as my strongest strengths."</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;