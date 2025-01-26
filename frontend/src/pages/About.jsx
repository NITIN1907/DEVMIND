import React from 'react';
import { useAuth } from '../store/auth';
import { NavLink } from 'react-router-dom';
export const About = () => {
    const {user} =useAuth();
    
    // Inline CSS for black-themed About page
    const styles = {
        section: {
            backgroundColor: "#000", // Black background for the page
            color: "#f5f5f5", // Light text for contrast
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            fontFamily: "'Roboto', sans-serif", // Modern font for a clean look
        },
        container: {
            maxWidth: "900px",
            width: "100%",
            padding: "40px",
            backgroundColor: "#1e2a47", // Dark blue background for the container
            borderRadius: "12px", // Rounded corners for a softer appearance
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // Larger shadow for depth
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out", // Fade-in animation for smooth entrance
        },
        heading: {
            fontSize: "40px", // Larger heading
            fontWeight: "700", // Bold weight
            marginBottom: "20px",
            color: "#ffffff", // White color for the heading
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Subtle text shadow
        },
        paragraph: {
            fontSize: "18px",
            lineHeight: "1.8", // Improved line spacing
            color: "#d1d1d1", // Light gray text color for paragraphs
            marginBottom: "30px",
            textAlign: "justify", // Justified text for a neat look
        },
        button: {
            padding: "15px 40px", // Larger padding for the button
            fontSize: "18px", // Bigger font size
            fontWeight: "600", // Bold text on the button
            borderRadius: "30px", // Round button shape
            border: "none",
            backgroundColor: "#008CBA", // Blue background for button
            color: "#ffffff",
            cursor: "pointer",
            transition: "background-color 0.3s ease, transform 0.2s", // Smooth hover effect with scale transform
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Slight shadow for button
        },
        buttonHover: {
            backgroundColor: "#006f8c", // Darker blue when hovering
            transform: "scale(1.05)", // Slight scale effect on hover
        },
        image: {
            width: "150px", // Fixed width for image
            marginBottom: "30px",
            borderRadius: "50%", // Circular image
            border: "4px solid #008CBA", // Border matching the button color
        },
        redText: {
            color: "red", // Red color for the username
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <img
                    src="/images/network.png"
                    alt="Network"
                    style={styles.image}
                />
                <h1 style={styles.heading}>About Us</h1>
                <p style={styles.paragraph}>
                    Welcome <span style={styles.redText}>{user.username}</span> to our website! We are passionate about delivering top-quality services and solutions
                    to help businesses thrive in the digital age. Our team is dedicated to creating user-friendly
                    applications and providing exceptional customer support.
                </p>
                <p style={styles.paragraph}>
                    Our goal is to help you build a strong online presence, whether you're a small business or a
                    large enterprise. We take pride in our work and are always striving to improve.
                </p>
                <NavLink to="/Contact">  <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
>Contact Us
                   
                </button></NavLink>
            </div>
        </section>
    );
};


