import IconUtility from "@/components/icon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import Image from "next/image";

function decodeHtmlEntities(input: string): string {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = input;
    return textarea.value;
}

export default function Home() {
    const translations = useContext(TranslationContext)?.translations;
    if (!translations) return null; // Handle case when translations are not yet loaded
    
    return (
        <section id={translations.sections[0]} className="text-white h-screen">
            <div className="container lg:h-full max-w-8xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-center">
                {/* Social Icons */}
                <div className="md:flex hidden lg:flex-col flex-row gap-4 lg:absolute right-6 top-1/2 transform -translate-y-1/2 mt-15">
                    <IconUtility Icon={FaLinkedin} link={'https://www.linkedin.com/in/domenico-gagliardo-3256ba229/'} />
                    <IconUtility Icon={FaGithub} link={'https://github.com/Truvella99'} />
                </div>
                {/* Text content */}
                <div className="w-full lg:w-2/5 text-center lg:text-left">
                    <h3 className="text-blue-400 tracking-wider text-5xl xl:text-6xl mb-12 xl:mb-20">{decodeHtmlEntities(translations.hello)}</h3>
                    <h1 className="text-6xl xl:text-7xl tracking-wider font-bold mt-2 mb-12 xl:mb-20">{translations.name}</h1>
                    <p className="mt-4 text-2xl xl:text-3xl">
                        {`${translations.passionate} `}
                        <span className="text-blue-400">
                            <TypeAnimation
                                sequence={[
                                    translations.se,
                                    1000, // wait 1s
                                    translations.sd,
                                    1000,
                                    translations.md,
                                    1000,
                                    translations.fd,
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
                    <Image 
                        src="./profile-img.png"
                        alt={translations.name} 
                        className="bg-transparent h-auto max-h-[480px] md:max-h-[580px] xl:max-h-[660px] w-auto"
                        width={500}
                        height={500}
                    />
                </div>

                
            </div>
        </section>
    );
}