import { GiBarbecue } from "react-icons/gi";

const ChildrenPageIntro = () => {


    return (
        <section className="relative h-100 bg-black bg-[url('/kids/kids-banner.jpg')] bg-cover bg-center font-fredoka">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-600/50 to-transparent flex items-center justify-center">
                <div className="flex max-w-7xl flex-col items-start w-full pl-4">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Bring your kids to <span className="text-green-500">Omega Gardens</span>
                    </h1>
                    <p className="text-white text-xl capitalize">
                        Bring your team together in our state-of-the-art boardrooms and conference rooms. <br />
                        Equipped with modern amenities, they are perfect for meetings, presentations, and events.
                    </p>
                    <div className="flex items-center justify-center gap-4 max-md:flex-col">
                        <div className="flex items-center justify-center gap-2 mt-10 border uppercase border-green-600 py-1 px-8 rounded-full text-lg  text-green-600 transition-all duration-300 cursor-pointer">
                            <p>Boadrooms</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-10 border uppercase border-green-600 py-1 px-8 rounded-full text-lg text-green-600 transition-all duration-300 cursor-pointer">
                            <p>Conference Hall</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChildrenPageIntro;
