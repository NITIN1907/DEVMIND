import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    const navigate = useNavigate();
    const { storeTokenLs } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8001/api/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            if (response.ok) {
                storeTokenLs(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                toast.success("Registered successfully");
                navigate("/login");
            } else {
                toast.error(
                    res_data.extraDetails ? res_data.extraDetails : res_data.message
                );
            }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section style={styles.section}>
            <main>
                <div style={styles.container}>
                    <div style={styles.imageContainer}>
                        <img
                            src="/images/register.png"
                            alt="A person is trying to do registration"
                            style={styles.image}
                        />
                    </div>
                    <div style={styles.formContainer}>
                        <h1 style={styles.heading}>Registration Form</h1>
                        <form onSubmit={handleSubmit} style={styles.form}>
                            <div style={styles.inputContainer}>
                                <label htmlFor="username" style={styles.label}>
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                    style={styles.input}
                                />
                            </div>

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
                                <label htmlFor="phone" style={styles.label}>
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    id="phone"
                                    required
                                    autoComplete="off"
                                    value={user.phone}
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
            </main>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: "#1a1a1a",
        padding: "40px 0",
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
        maxWidth: "500px",
        borderRadius: "8px",
    },
    formContainer: {
        backgroundColor: "#222222",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    },
    heading: {
        color: "#fff",
        fontSize: "32px",
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

