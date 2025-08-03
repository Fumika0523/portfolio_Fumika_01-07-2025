"use client";

import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext"


const Contact = () => {
  const formName = "Fumika Mikami"; // Form name to keep it consistent with the API
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

const [errorMessage, setErrorMessage] = useState("");


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


    const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail size={22} />,
      label: "Email",
      value: "fumikamikami523@gmail.com",
      link: "mailto:fumikamikami523@gmail.com",
    },
    {
      icon: <FiPhone size={22} />,
      label: "Phone",
      value: "+817041134429",
      link: "tel:+817041134429",
    },
    {
      icon: <FiMapPin size={22} />,
      label: "Location",
      value: "Norwich, Northfolk, UK",
      link: "https://g.co/kgs/G3T2iAV",
    },
  ];

  const { isDarkMode} = useTheme("")
        const styleBg = isDarkMode
        ? "bg-gradient-to-br text-gray-200 from-[#e86b80]  to-pink-700/80"
        :
        "bg-gradient-to-br text-gray-100 from-pink-400/60  to-[#e86b80]"
  return (
    <section id="contact" className={` section-padding ${
      isDarkMode? "bg-gray-950 text-white":"bg-gray-50 text-gray-900"
    }`}>
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-3 py-1 text-sm font-medium 
            ${isDarkMode? " text-pink-200 bg-pink-500/40 ":"text-pink-500 bg-pink-100 "}rounded-full mb-4`}>Let's Connect</span>
          <h2 className="heading-lg mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-[#e86b80] mx-auto"></div>
          <p className={`paragraph  max-w-2xl mx-auto mt-4 ${isDarkMode? "text-gray-400 " : "text-gray-700"}`}>
            I'm always open to new opportunities and projects. Feel free to reach out if you want to collaborate or have any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-center mb-8">
              {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-400 dark:from-[#e86b80] dark:to-pink-900 text-white flex items-center justify-center shadow-md mr-4"> */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br  flex items-center justify-center shadow-md mr-4  ${styleBg}`}>
                <FiMail size={20} />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Contact Information
              </h3>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border
                    ${ isDarkMode ?"border-gray-800 group bg-[#070c1b]":"border-gray-100 bg-white"}`}
                >
                 
                <div className={`flex-shrink-0 h-12 w-12 rounded-xl mr-2
                     ${isDarkMode ? "text-pink-200 bg-pink-500/40 group-hover:bg-[#e86b80] group-hover:text-pink-100 " : "text-pink-500 bg-pink-100 group-hover:bg-pink-300 group-hover:text-white "} flex items-center justify-center  transition-colors duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold  mb-1 ${isDarkMode ? "text-white": "text-gray-900 "}`}>
                      {info.label}
                    </h4>
                    <a
                      href={info.link}
                      className={` ${isDarkMode? "hover:text-orange-300 text-gray-300" : " text-gray-600 hover:text-yellow-600 "}
                       transition-colors`}
                      target={info.label === "Location" ? "_blank" : undefined}
                      rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`pt-8 border-t ${isDarkMode? "dark:border-gray-700 " : "border-gray-200 "}`}
            >
              <div className="flex items-center mb-5">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700 ml-4"></div>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/asma019/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className={`  ${ isDarkMode ?"border-pink-100/20 group bg-[#070c1b]":"border-gray-100 bg-white"}
             rounded-2xl shadow-xl p-8 border  relative overflow-hidden`}>
              
              {/* Decorative elements */}
              <div className={`absolute -top-24 -right-24 w-48 h-48rounded-full blur-3xl ${isDarkMode? " bg-blue-100/30 ":"bg-blue-900/20"}`}></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl border-4 border-amber-500"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center shadow-md mr-4 
                    ${styleBg}`}>
                    <FiSend size={20} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold  ${isDarkMode? "text-white" :"text-gray-800 "}`}>
                      Send Me a Message
                    </h3>
                    <p className={`text-sm  ${isDarkMode? "text-gray-400" :"text-gray-500"}`}>
                      Form: {formName}
                    </p>
                  </div>
                </div>
                
         
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium  mb-2 ${isDarkMode ? "text-gray-300": "text-gray-600 " }`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 border rounded-xl  brounded-xl focus:ring-2 focus:border-blue-500 focus:ring-blue-500 transition-colors
                        ${ isDarkMode ? "border-pink-100/20 bg-gray-900/40 text-white" :" border-gray-300 "}`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium  mb-2 ${isDarkMode ? "text-gray-300": "text-gray-600 " }`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                         className={`w-full px-4 py-3 border rounded-xl  brounded-xl focus:ring-2 focus:border-blue-500 focus:ring-blue-500 transition-colors
                       ${ isDarkMode ? "border-pink-100/20 bg-gray-900/40 text-white" :" border-gray-300 "}`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium  mb-2 ${isDarkMode ? "text-gray-300": "text-gray-600 " }`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                       className={`w-full px-4 py-3 border rounded-xl  brounded-xl focus:ring-2 focus:border-blue-500 focus:ring-blue-500 transition-colors
                        ${ isDarkMode ? "border-pink-100/20 bg-gray-900/40 text-white" :" border-gray-300 "}`}
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium  mb-2 ${isDarkMode ? "text-gray-300": "text-gray-600 " }`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                       className={`w-full px-4 py-3 border rounded-xl  brounded-xl focus:ring-2 focus:border-blue-500 focus:ring-blue-500 transition-colors
                        ${ isDarkMode ? "border-pink-100/20 bg-gray-900/40 text-white"  :" border-gray-300 "}`}
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 bg-gradient-to-r  rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center
                        ${isSubmitting ? "opacity-70 cursor-not-allowed" : "", styleBg}`}
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <FiSend className="mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <FiArrowRight className="ml-2" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 