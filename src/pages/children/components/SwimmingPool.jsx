import { motion } from "framer-motion";

const SwimmingPool = () => {

    const features = [
        { title: "Safe & Supervised", desc: "Trained staff ensuring safety all the time." },
        { title: "Fun All Day", desc: "Multiple activities to keep kids entertained." },
        { title: "Healthy Snacks", desc: "Delicious and nutritious kids menu." },
        { title: "Family Friendly", desc: "Parents can relax while kids have fun." },
    ];

    return (
        <section className="relative h-130 bg-black bg-[url('/home/swimming.jpg')] bg-cover bg-center font-fredoka">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-fredoka font-bold text-white mb-4">WHY <span className="text-yellow-500">KIDS LOVE US</span></h1>
                    <p className="text-white text-2xl capitalize">Enjoy BBQ beef spare ribs and Free cocktails <br /> on special weekends</p>
                    <div className="">
                        <div className="grid md:grid-cols-4 gap-8 mt-8 px-6 max-w-6xl mx-auto">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-blue-400/20 backdrop-blur p-6 rounded-xl shadow-lg text-center"
                                >
                                    <h3 className="text-xl font-semibold text-pink-500">{f.title}</h3>
                                    <p className="mt-2 text-white">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SwimmingPool
