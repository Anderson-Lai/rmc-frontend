import { useState, useRef } from "react";
import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";
import { Oval } from "react-loader-spinner";

type Form = {
    producerName: string,
    producerEmail: string,
    eventName: string,
    eventDate: string,
    eventSignificance: string,
    eventPortrayal: string,
    mediaBreakdown: string
}

function isStringEmpty(str: string) {
    return str === "" || str === undefined || str === null;
}

function isValidEmail(email: string) {
    return email.split("@").pop() === "ycdsbk12.ca";
}

function isValidForm(form: Form) {
    return !isStringEmpty(form.producerName)
    && !isStringEmpty(form.producerEmail)
    && !isStringEmpty(form.eventName)
    && !isStringEmpty(form.eventDate)
    && !isStringEmpty(form.eventSignificance)
    && !isStringEmpty(form.eventPortrayal)
    && !isStringEmpty(form.mediaBreakdown);
}

export default function Form() {

    const emptyForm = {
        producerName: "",
        producerEmail: "",
        eventName: "",
        eventDate: "",
        eventSignificance: "",
        eventPortrayal: "",
        mediaBreakdown: "",
    }

    const [formData, setFormData] = useState(emptyForm);
    const [warning, setWarning] = useState("");
    const [emailWarning, setEmailWarning] = useState("");
    const [renderLoader, setRenderLoader] = useState(false);

    // used to grab the submit button
    const submitButtonRef = useRef<HTMLButtonElement | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name , value } = e.target;

        setFormData((curr) => {
            // [name] is used to treat name as a variable and not as a key with the name "name"
            return { ...curr, [name]: value };
        });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // prevent default page reloading
        e.preventDefault();

        // send POST request to backend after validating form
        if (!isValidForm(formData)) {
            setWarning(() => "Please fill in all the form fields");
            return;
        }
        else if (!isValidEmail(formData.producerEmail)) {
            const warning = "Please provide a valid @ycdsbk12.ca email";
            setWarning(() => warning)
            setEmailWarning(() => warning);
            return;
        }

        // clear the warnings
        setWarning(() => "");
        setEmailWarning(() => "");

        // disable the submit button
        submitButtonRef.current!.disabled = true;
        submitButtonRef.current!.className = "bg-gray-400 text-black py-1 px-2 rounded-lg text-xl cursor-not-allowed";

        // send the POST request to backend
        try {
            // render alert to inform user form submission is happening
            setRenderLoader(() => true);

            const errorMessage = "An error occurred while submitting your form data.";

            // check if environment variable is set
            const backendUrl = import.meta.env.VITE_BACKEND_API_URL || "";
            if (isStringEmpty(backendUrl)) {
                throw new Error(errorMessage)
            }

            const endpoint = backendUrl + "/form";
        
            // send the POST request
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(errorMessage);
            }

            // remember to reset button
            submitButtonRef.current!.disabled = false;
            submitButtonRef.current!.className = "bg-border-light-yellow text-black py-1 px-2 rounded-lg text-xl cursor-pointer";

            // reset page to original state
            setFormData(() => emptyForm);
            setRenderLoader(() => false);

            window.alert("Your pitch proposal submission was successful!")
        }
        catch (e) {
            // in case the user switches off the tab
            // before the form is done submitting, a TypeError
            // arises from the usage of submitButtonRef
            // however, the form data still goes through, so
            // this error does not need to be shown to the user
            if (!(e instanceof TypeError)) {
                window.alert(e);
            }
        }

        // if an error is thrown, ensure to always unmount 
        // the loader and reset button
        setRenderLoader(() => false);
        submitButtonRef.current!.disabled = false;
        submitButtonRef.current!.className = "bg-border-light-yellow text-black py-1 px-2 rounded-lg text-xl cursor-pointer";
    }

    return (
        <>
            <PageTitle title="PITCH PROPOSAL FORM" />

            <div className="mt-14 mx-5 lg:mx-32">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="producerName" className="text-xl mb-2 mt-6">What is your name?</label>
                    <input 
                        type="text" 
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl"
                        name="producerName"
                        value={formData.producerName}
                        onChange={handleChange}
                    />

                    <label htmlFor="producerEmail" className="text-xl mb-2 mt-6">What is your school email?</label>
                    <input 
                        type="text" 
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl"
                        name="producerEmail"
                        value={formData.producerEmail}
                        onChange={handleChange}
                        placeholder="Ex: john.smith26@ycdsbk12.ca"
                    />
                    {
                        emailWarning &&
                        <small className="text-red-500 text-lg mt-2 font-semibold">{emailWarning}</small>
                    }

                    <label htmlFor="eventName" className="text-xl mb-2 mt-6">What is the event name?</label>
                    <input 
                        type="text" 
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                    />

                    <label htmlFor="eventDate" className="text-xl mb-2 mt-6">What day is the event?</label>
                    <input 
                        type="date" 
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                    />

                    <label htmlFor="eventSignificance" className="text-xl mb-2 mt-6">How is this event significant to the school?</label>
                    <textarea
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl h-36"
                        name="eventSignificance"
                        value={formData.eventSignificance}
                        onChange={handleChange}
                        placeholder="Provide a brief description on how this event is significant to our school."
                    />

                    <label htmlFor="eventPortrayal" className="text-xl mb-2 mt-6">How do you plan to show this to our school community?</label>
                    <textarea
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl h-36"
                        name="eventPortrayal"
                        value={formData.eventPortrayal}
                        onChange={handleChange}
                        placeholder={
                            "Be specific: Will this be an interview style asking about their experiences, " +
                            "documentary style, trailer/event recap, informal vlog, cinematic, etc.?" 
                        }
                    />

                    <label htmlFor="mediaBreakdown" className="text-xl mb-2 mt-6">Please provide a rough breakdown</label>
                    <textarea
                        className="bg-transparent border-2 border-border-light-yellow outline-none text-lg px-3 py-1 rounded-xl h-36"
                        name="mediaBreakdown"
                        value={formData.mediaBreakdown}
                        onChange={handleChange}
                        placeholder="Will you be featuring students? What is the feature setting? Do you have specific shots and colour grading in mind?"
                    />

                    <div className="w-full flex flex-col items-end mt-4">
                        {
                            warning &&
                            <p className="text-red-500 text-xl font-semibold mb-2">{warning}</p>
                        }
                        <div className="flex w-full justify-end items-center">
                            {
                                renderLoader &&
                                <div className="mr-3">
                                    <Oval 
                                        visible={true}
                                        color="#A9A9A9"
                                        secondaryColor="#808080"
                                        strokeWidth={5}
                                        strokeWidthSecondary={5}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                            }

                            <motion.button
                                ref={submitButtonRef}
                                transition={{ duration: 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-border-light-yellow text-black py-1 px-2 rounded-lg text-xl cursor-pointer"
                            >
                                Submit
                            </motion.button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}