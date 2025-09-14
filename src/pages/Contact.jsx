import React, { useState } from "react";
import { MailCheck, CircleUserRound, MapPin, Send, Loader2 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }


        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Method 1: Web3Forms (most reliable for local testing)
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "4e4152de-dfb3-4ca7-b5b3-674c3e432ff1", // Get free key from web3forms.com
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New message from ${formData.name}`,
                    from_name: formData.name,
                    to: "k.mano75005@gmail.com"
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);

            // Fallback: Use mailto as backup
            const subject = encodeURIComponent(`Message from ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Message:\n${formData.message}`
            );

            window.open(`mailto:k.mano75005@gmail.com?subject=${subject}&body=${body}`, '_blank');
            setSubmitStatus('fallback');
            setFormData({ name: '', email: '', message: '' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { icon: <RiInstagramFill />, url: "https://www.instagram.com/mr_manoj_200/", label: "Instagram" },
        { icon: <FaFacebook />, url: "#", label: "Facebook" },
        { icon: <IoLogoWhatsapp />, url: "https://wa.me/6374299318", label: "WhatsApp" },
        { icon: <BsLinkedin />, url: "https://www.linkedin.com/in/manoj-k-17407b360/", label: "LinkedIn" },
        { icon: <BsGithub />, url: "https://github.com/Manoj7505", label: "GitHub" }
    ];

    return (
        <div id="contact" className="min-h-screen py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-center font-bold text-4xl mb-4 text-gray-800">Contact Me</h1>
                <p className="text-center text-gray-600 mb-12">Let's connect and create something amazing together!</p>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-gray-300 rounded-3xl shadow-xl p-8 h-fit">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

                        <div className="space-y-6">

                            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-2xl">
                                <MailCheck className="text-black-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">k.mano75005@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-2xl">
                                <CircleUserRound className="text-black-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Phone</h3>
                                    <p className="text-gray-600">6374299318</p>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-2xl">
                                <MapPin className="text-black-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Location</h3>
                                    <p className="text-gray-600">Kurippan Kulam, Alangulam, Tenkasi</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="font-semibold text-gray-800 mb-4">Connect with me</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12  rounded-full flex items-center justify-center  text-3xl hover:scale-110 transition-transform duration-200 shadow-lg"
                                        title={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-300 rounded-3xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                                ❌ Failed to send message. Please try again or contact me directly.
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        disabled={isSubmitting}
                                        className={`w-full bg-gray-100 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        disabled={isSubmitting}
                                        className={`w-full bg-gray-100 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 ${errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here..."
                                    rows="5"
                                    disabled={isSubmitting}
                                    className={`w-full bg-gray-100 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 ${errors.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                )}
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-black text-white font-semibold py-3 px-6 rounded-xl hover:bg-white hover:text-black cursor-pointer  transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-center py-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
                <p className="text-gray-600">© 2025 Manoj. All Rights Reserved. Made with ❤️</p>
            </footer>
        </div>
    );
}

export default Contact;