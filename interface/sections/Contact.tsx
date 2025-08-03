import { useState } from "react";
import { ListField, ModelField, StringField, useBuilderContext } from "../builder";
import { BuilderComp, BuilderMedia, WC, WCList } from "../builder/types";
import { Link, MediaComp } from "../comps";

interface Props {
    title: WC<string>;
    huge_title: WC<string>;
    button: WC<string>;
    formm: {
        firstname: WC<string>;
        lastname: WC<string>;
        email: WC<string>;
        subject: WC<string>;
        message: WC<string>;
    }
}

const props = {
    title: StringField({ default: "Contact Me" }),
    huge_title: StringField({ type: "styled", default: "Realize your dream with us" }),
    button: StringField({ default: "Send Message" }),
    formm: {
        firstname: StringField({ default: "First Name" }),
        lastname: StringField({ default: "Last Name" }),
        email: StringField({ default: "Email Address" }),
        subject: StringField({ default: "Subject" }),
        message: StringField({ default: "Message" }),
    }
}


const contact = ({ formm, title, huge_title, button, ...props }: Props) => {
    const { c } = useBuilderContext();
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        email: "",
        objective: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    f_name: "",
                    l_name: "",
                    email: "",
                    objective: "",
                    message: "",
                });
            } else if (response.status === 429) {
                alert("Too many requests. Please try again later.");
            }
            else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred while sending the message.");
        }
    };
    return (
        <div {...c(props)} id="contact" className="contact segments">
            <div className="container">
                <div className="box-content">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="content-left">
                                <div className="section-title section-title-left">
                                    <h3 {...c(title)}>{title[0]}</h3>
                                </div>
                                <h2 {...c(huge_title)} dangerouslySetInnerHTML={{ __html: huge_title[0] }}></h2>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-google" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="content-right">
                                <form
                                    className="contact-form"
                                    id="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col">
                                            <div id="first-name-field">
                                                <input
                                                    type="text"
                                                    placeholder={"first name"}
                                                    className="form-control"
                                                    name="f_name"
                                                    value={formData.f_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div id="last-name-field">
                                                <input
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    name="l_name"
                                                    value={formData.l_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div id="email-field">
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div id="subject-field">
                                                <input
                                                    type="text"
                                                    placeholder="Subject"
                                                    className="form-control"
                                                    name="objective"
                                                    value={formData.objective}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div id="message-field">
                                                <textarea
                                                    cols={30}
                                                    rows={5}
                                                    className="form-control"
                                                    id="form-message"
                                                    name="message"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        {...c(button)}
                                        className="button"
                                        type="submit"
                                        id="submit"
                                        name="submit"
                                    >
                                        {button[0]}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}




export const contactComp: BuilderComp = {
    name: 'contact',
    comp: contact,
    props
};
