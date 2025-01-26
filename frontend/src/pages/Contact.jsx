import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [userData,setUserData]=useState(true);
    const {user} =useAuth();
    //getting the user info 
    if(userData && user)
    {
        setContact({
            username:user.username,
            email:user.email,
            message:"",
        })
        setUserData(false);
    }

    const handleInput = (e) => {
       const name = e.target.name;
       const value = e.target.value;
        setContact({
            ...contact,
            [name]: value,
        });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8001/api/form/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setContact({
                    username: "",
                    email: "",
                    message: "",
                });
                navigate("/Contact");
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    // Inline CSS for an enhanced dark theme
    const styles = {
        section: {
           
            color: "#f5f5f5",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
        },
        container: {
            maxWidth: "500px",
            width: "100%",
            padding: "20px",
            backgroundColor: "#1e1e2f",
            borderRadius: "8px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
        },
        heading: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            color: "#e0e0e0",
        },
        form: {
            display: "flex",
            flexDirection: "column",
        },
        label: {
            marginBottom: "8px",
            fontSize: "14px",
            color: "#a0a0a0",
        },
        input: {
            marginBottom: "15px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #333",
            backgroundColor: "#2b2b3c",
            color: "#f5f5f5",
            outline: "none",
            transition: "border-color 0.2s ease-in-out",
        },
        inputFocus: {
            borderColor: "#6200ea",
        },
        button: {
            padding: "12px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#6200ea",
            color: "#ffffff",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#3700b3",
        },
        image: {
            display: "block",
            margin: "0 auto 20px",
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <img
                    src="/images/network.png"
                    alt="Network"
                    width="150"
                    height="150"
                    style={styles.image}
                />
                <h1 style={styles.heading}>Contact Us</h1>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="username" style={styles.label}>
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        required
                        autoComplete="off"
                        value={contact.username}
                        onChange={handleInput}
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = "#333")}
                    />
                    <label htmlFor="email" style={styles.label}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        autoComplete="off"
                        value={contact.email}
                        onChange={handleInput}
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = "#333")}
                    />
                    <label htmlFor="message" style={styles.label}>
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Write your message"
                        required
                        autoComplete="off"
                        value={contact.message}
                        onChange={handleInput}
                        style={{ ...styles.input, height: "100px", resize: "none" }}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = "#333")}
                    />
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};
