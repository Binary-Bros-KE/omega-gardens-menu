import { GiBarbecue } from "react-icons/gi";

const WeekendIntro = () => {


    return (
        <section className="relative h-130 bg-black bg-[url('/home/choma.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center flex flex-col items-center justify-center">
                    <p className="flex items-center justify-center text-white text-xl mb-4 font-fredoka gap-4 bg-red-400/60 py-2 px-10 w-fit rounded-full">
                        <GiBarbecue size={30} />
                        BBQ & COCKTAILS
                    </p>
                    <h1 className="text-6xl font-fredoka font-bold text-white mb-4">OMEGA <span className="text-yellow-500">WEEKEND VIBES</span></h1>
                    <p className="text-white text-2xl capitalize">Enjoy BBQ beef spare ribs and Free cocktails <br /> on special weekends</p>
                    <div className="flex items-center justify-center gap-4 max-md:flex-col">
                        <div className="flex items-center justify-center gap-2 mt-10 border uppercase border-red-600 py-1 px-8 rounded-full font-fredoka text-lg bg-red-600 text-white transition-all duration-300 cursor-pointer">
                            <img src="/graphics/bbq.png" className="h-8" />
                            <p>Live Music</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-10 border uppercase border-orange-600 py-1 px-8 rounded-full font-fredoka text-lg bg-orange-600 text-white transition-all duration-300 cursor-pointer">
                            <img src="/graphics/cocktail.png" className="h-8" />
                            <p>Food and Drinks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeekendIntro
