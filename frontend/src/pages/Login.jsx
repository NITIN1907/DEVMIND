import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const { storeTokenLs } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8001/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            console.log("login form", response);

            const res_data = await response.json();
            if (response.ok) {
                storeTokenLs(res_data.token);
                toast.success("Login successful");
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("Invalid credentials");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.imageContainer}>
                    <img
                        src="/images/login.png"
                        alt="Login"
                        style={styles.image}
                    />
                </div>
                <div style={styles.formContainer}>
                    <h1 style={styles.heading}>Login</h1>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.inputContainer}>
                            <label htmlFor="email" style={styles.label}>
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                id="email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.inputContainer}>
                            <label htmlFor="password" style={styles.label}>
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.buttonContainer}>
                            <button type="submit" style={styles.submitButton}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: "#121212",
        padding: "50px 0",
    },
    container: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        maxWidth: "450px",
        borderRadius: "8px",
    },
    formContainer: {
        backgroundColor: "#1e1e1e",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    },
    heading: {
        color: "#fff",
        fontSize: "28px",
        textAlign: "center",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        color: "#fff",
        marginBottom: "8px",
        fontWeight: "bold",
    },
    input: {
        padding: "12px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        backgroundColor: "#333333",
        color: "#fff",
        outline: "none",
    },
    buttonContainer: {
        textAlign: "center",
    },
    submitButton: {
        padding: "15px 30px",
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
};

