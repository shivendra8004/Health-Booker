import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
    return (
        <>
            <section className="container">
                <h2 className="page-heading about-heading">About Us</h2>
                <div className="about">
                    <div className="hero-img">
                        <img src={image} alt="hero" />
                    </div>
                    <div className="hero-content">
                        <p style={{ textAlign: "justify" }}>
                            Welcome to Health Booker Platform, where we believe in making healthcare simpler for both doctors and patients. Founded with the
                            vision of improving healthcare accessibility, our platform offers a comprehensive solution for appointment scheduling, patient
                            management, and practice optimization. We are passionate about leveraging technology to foster better health outcomes and more
                            efficient medical practices. Join us in transforming the healthcare experience for the better.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
