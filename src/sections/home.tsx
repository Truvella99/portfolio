import IconUtility from "@/utils/icon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <section id="Home" className="text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                {/* Text content */}
                <div className="w-full lg:w-2/5 text-center lg:text-left">
                    <h3 className="text-blue-400 tracking-wider text-5xl xl:text-6xl mb-12 xl:mb-20">Hello I&apos;m</h3>
                    <h1 className="text-6xl xl:text-7xl tracking-wider font-bold mt-2 mb-12 xl:mb-20">Domenico Gagliardo</h1>
                    <p className="mt-4 text-2xl xl:text-3xl">
                        A Passionate{' '}
                        <span className="text-blue-400">
                            <TypeAnimation
                                sequence={[
                                    'Software Engineer',
                                    1000, // wait 1s
                                    'Software Developer',
                                    1000,
                                    'Mobile Developer',
                                    1000,
                                    'FullStack Developer',
                                    1000
                                ]}
                                speed={50}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </span>
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-3/5 mb-12 lg:mb-0 flex justify-center items-center min-h-[400px] md:min-h-[500px] xl:min-h-[600px]">
                    <img 
                        src="./profile-img.png"
                        alt="Domenico Gagliardo" 
                        className="bg-blue-400 rounded-full h-auto max-h-[400px] md:max-h-[500px] xl:max-h-[580px] w-auto shadow-lg"
                    />
                </div>

                {/* Social Icons */}
                <div className="hidden lg:flex flex-col gap-4 absolute right-6 top-1/2 transform -translate-y-1/2">
                    <IconUtility Icon={FaLinkedin} link={'https://www.linkedin.com/in/domenico-gagliardo-3256ba229/'} />
                    <IconUtility Icon={FaGithub} link={'https://github.com/Truvella99'} />
                </div>
            </div>
        </section>
    );
}