import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import whoWeAreData from "./whoWeAreData";

const WhoWeAre = () => {
    return (
        <section className="bg-white py-14 sm:py-20 lg:py-26">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Title */}
                    <h2
                        className="
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        font-serif
                        font-light
                        text-[#16324F]
                        "
                    >
                        {whoWeAreData.title}
                    </h2>

                    {/* Paragraphs */}
                    <div className="mx-auto mt-6 max-w-4xl space-y-5 sm:mt-10 sm:space-y-8">
                        {whoWeAreData.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="
                                text-sm leading-6 sm:text-base sm:leading-7
                                text-slate-700
                                "
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Quote */}
                    <p
                        className="
                        mt-7 text-lg sm:mt-10 sm:text-2xl
                        italic
                        font-medium
                        text-black
                        leading-7
                        max-w-4xl
                        mx-auto
                        "
                    >
                        Join us in shaping the future, one bright mind at a
                        time. Let's grow, learn, and succeed together!
                    </p>

                    {/* Button */}
                    <div className="mt-8 sm:mt-12">
                        <Link to="/about">
                            <Button>
                                View More
                            </Button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhoWeAre;
