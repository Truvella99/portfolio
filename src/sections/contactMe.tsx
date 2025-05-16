import { useContext, useState, useRef } from "react";
import { Translation_Theme_Context } from "@/components/Provider";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ReCAPTCHA from "react-google-recaptcha";
import { validate } from 'email-validator';
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ContactMe() {
    const translations = useContext(Translation_Theme_Context)?.translations;
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [subject, setSubject] = useState({ value: "", error: "" });
    const [message, setMessage] = useState({ value: "", error: "" });
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [recaptchaError, setRecaptchaError] = useState("");
    if (!translations) return null; // Handle case when translations are not yet loaded

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current!.getValue();
        const errors = { name: '', email: '', subject: '', message: '', recaptcha: '' };
        // ---------------- FORM VALIDATION ----------------
        if (name.value === '') {
            setName((obj) => ({ ...obj, error: translations?.formNameError }));
            errors.name = translations?.formNameError;
        } else {
            setName((obj) => ({ ...obj, error: "" }));
        }
        if (!validate(email.value)) {
            setEmail((obj) => ({ ...obj, error: translations?.formEmailError }));
            errors.email = translations?.formEmailError;
        } else {
            setEmail((obj) => ({ ...obj, error: "" }));
        }
        if (subject.value === '') {
            setSubject((obj) => ({ ...obj, error: translations?.formSubjectError }));
            errors.subject = translations?.formSubjectError;
        } else {
            setSubject((obj) => ({ ...obj, error: "" }));
        }
        if (message.value === '') {
            setMessage((obj) => ({ ...obj, error: translations?.formMessageError }));
            errors.message = translations?.formMessageError;
        } else {
            setMessage((obj) => ({ ...obj, error: "" }));
        }
        if (recaptchaValue === '') {
            setRecaptchaError(translations?.captchaError);
            errors.recaptcha = translations?.captchaError;
        } else {
            setRecaptchaError("");
        }
        // Return if some error is present
        const hasAnyError = Object.values(errors).some(error => error !== '');
        if (hasAnyError) {
            return;
        }
        // ---------------- EMAIL DATA SETUP ----------------
        const serviceID = "service_049vzj6";
        const templateID = "template_yvs0dyg";
        const publicKey = "1C4bwCG6AGVQhDvJ2";
        const data = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            year: new Date().getFullYear()
        };
        // ---------------- SEND EMAIL ----------------
        emailjs.send(serviceID, templateID, data, publicKey)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: translations?.alertSuccess,
                    buttonsStyling: false,
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                        confirmButton: 'confirm-btn'
                    }
                });
                setName({ value: "", error: "" });
                setEmail({ value: "", error: "" });
                setSubject({ value: "", error: "" });
                setMessage({ value: "", error: "" });
                setRecaptchaError("");
                recaptchaRef.current!.reset();
            })
            .catch(() => {
                Swal.fire({
                    icon: "error",
                    title: translations?.alertError,
                    buttonsStyling: false,
                    customClass: {
                        popup: 'custom-swal-popup',
                        title: 'custom-swal-title',
                        confirmButton: 'error-btn'
                    }
                });
            });
    }

    return (
        <section id={translations.sections[6]} className={"text-white text-white py-16 px-8 md:px-20"}>
            <div className="min-h-[70vh] max-w-[81vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* LEFT: IMAGE */}
                <div className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] relative flex flex-col items-center">
                    <DotLottieReact
                        src="./contactAnimation.lottie"
                        loop
                        className="h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] md:h-[600px] md:w-[450px] lg:h-[700px] lg:w-[500px] object-cover object-center rounded-lg"
                        autoplay
                    />
                </div>

                {/* RIGHT: TEXT + FORM */}
                <div className='min-h-[70vh]'>
                    <h1 className="text-blue-400 text-5xl font-bold leading-tight mb-20">{translations.contactMe}</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {/* NAME + EMAIL */}
                        <div className="flex flex-row gap-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={translations.formName}
                                    value={name.value}
                                    onChange={(e) => setName((obj) => ({ ...obj, value: e.target.value }))}
                                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                />
                                <p
                                    className={`mt-1 ml-4 text-sm transition-all duration-1500 lg:h-5 h-10 ${name.error ? 'text-red-500 opacity-100' : 'text-blue-400 opacity-100'
                                        }`}
                                >
                                    {name.error || ' '}
                                </p>
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={translations.formEmail}
                                    value={email.value}
                                    onChange={(e) => setEmail((obj) => ({ ...obj, value: e.target.value }))}
                                    className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                />
                                <p
                                    className={`mt-1 ml-4 text-sm transition-all duration-1500 lg:h-5 h-10 ${email.error ? 'text-red-500 opacity-100' : 'text-blue-400 opacity-100'
                                        }`}
                                >
                                    {email.error || ' '}
                                </p>
                            </div>
                        </div>

                        {/* SUBJECT */}
                        <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder={translations.formSubject}
                                value={subject.value}
                                onChange={(e) => setSubject((obj) => ({ ...obj, value: e.target.value }))}
                                className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            />
                            <p
                                className={`mt-1 ml-4 text-sm transition-all duration-1500 lg:h-5 h-10 ${subject.error ? 'text-red-500 opacity-100' : 'text-blue-400 opacity-100'
                                    }`}
                            >
                                {subject.error || ' '}
                            </p>
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <textarea
                                name="message"
                                placeholder={translations.formMessage}
                                value={message.value}
                                onChange={(e) => setMessage((obj) => ({ ...obj, value: e.target.value }))}
                                rows={5}
                                className="mt-1 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            />
                            <p
                                className={`mt-1 ml-4 text-sm transition-all duration-1500 lg:h-5 h-10 ${message.error ? 'text-red-500 opacity-100' : 'text-blue-400 opacity-100'
                                    }`}
                            >
                                {message.error || ' '}
                            </p>
                        </div>

                        <div className="flex flex-col items-center md:mt-5">
                            <div className="relative">
                                <ReCAPTCHA
                                    key={translations.captcha}
                                    ref={recaptchaRef}
                                    theme="light"
                                    hl={translations.captcha}
                                    sitekey="6LeISjcfAAAAAByM4oJ4NqWQdgZJInbxUEruoGCD"
                                />
                                <p
                                    className={`mt-1 ml-4 mb-4 text-sm transition-all duration-1500 lg:h-5 h-10 ${recaptchaError ? 'text-red-500 opacity-100' : 'text-blue-400 opacity-100'
                                        }`}
                                >
                                    {recaptchaError || ' '}
                                </p>
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="py-2 px-4 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-md"
                            >
                                {translations.formSubmit}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}