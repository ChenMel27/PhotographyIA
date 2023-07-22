import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

//using a type script file to connect with Form Spark

type FormState = {
  email: string;
  message: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};
function form() {
  const formId = "yAvHagVX";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaRef = useRef<any>();

  const initialFormState = {
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setReCaptchaToken] = useState<string>();

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
  };

  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      setMessage({
        class: "bg-green-500",
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const key = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[key] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token: string | null) => {
    setReCaptchaToken(token as string);
  };

  
  return (
    <div className="h-full flex justify-center flex-col">
      <div className=" w-2/3 m-auto p-8 shadow-lg">
        <h1 className="text-4xl font-bold flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-4 h-12 transform rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </span>
          <span>Photoshoot Request Form</span>
        
        </h1>
        {message && (
          <div className={`my-4 text-white w-full p-4 ${message.class}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={submitForm} className="flex flex-col">
          
          <div className="my-2 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              onChange={updateFormControl}
              className="border-2 p-2"
              type="email"
              id="email"
              value={formState?.email}
            />
          </div>
          <div className="my-2 flex flex-col">
            <label htmlFor="message">Message and Predicted Total</label>
            <textarea
              onChange={updateFormControl}
              className="border-2 p-2"
              id="message"
              value={formState?.message}
            ></textarea>
          </div>

          <button
            disabled={submitting}
            className="mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default form;
