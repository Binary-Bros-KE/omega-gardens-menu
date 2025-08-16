const BoardroomIntro = () => {


    return (
        <section className="relative h-130 bg-black bg-[url('/accomodations/boardrooms.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-white mb-4">Looking for <span className="text-green-500">Meeting spaces.?</span></h1>
                    <p className="text-white text-xl capitalize">
                        Bring your team together in our state-of-the-art boardrooms and conference rooms. <br />
                        Equipped with modern amenities, they are perfect for meetings, presentations, and events.
                    </p>
                    <div className="flex items-center justify-center gap-4 max-md:flex-col">
                        <div className="flex items-center justify-center gap-2 mt-10 bg-white uppercase py-1 px-8 rounded-full text-lg  text-gray-600 transition-all duration-300 cursor-pointer">
                            <p>Boadrooms</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-10 bg-white uppercase  py-1 px-8 rounded-full text-lg text-gray-600 transition-all duration-300 cursor-pointer">
                            <p>Conference Hall</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoardroomIntro
