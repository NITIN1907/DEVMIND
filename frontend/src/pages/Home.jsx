import { useAuth } from "../store/auth";
export const Home = () => {
    const {user} = useAuth();
    const styles = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
        },
        sectionHero: {
            borderRadius: '25px',
            marginTop:"-181px",
            padding: '6rem 6rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
            color: '#fff',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gap: '2rem',
            alignItems: 'center',
        },
        gridTwoCols: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        text: {
            margin: '1rem 0',
            fontSize: '1.9rem',
        },
        heading: {
            fontSize: '3.8rem',
            margin: '1rem 0',
            fontWeight: 'bold',
        },
        btnGroup: {
            marginTop: '1.5rem',
        },
        button: {
            padding: '0.75rem 1.5rem',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            margin: '0 0.5rem',
        },
        primaryButton: {
            backgroundColor: '#ff6f61',
            color: '#fff',
        },
        primaryButtonHover: {
            backgroundColor: '#ff483b',
        },
        secondaryButton: {
            backgroundColor: '#fff',
            color: '#2575fc',
            border: '2px solid #2575fc',
        },
        secondaryButtonHover: {
            backgroundColor: '#2575fc',
            color: '#fff',
        },
        heroImage: {
            textAlign: 'center',
        },
        image: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '10px',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        },
        redText: {
            color: "red", // Red color for the username
        },
    };

    return (
        <main style={styles.main}>
            <section style={styles.sectionHero}>
                <div style={{ ...styles.container, ...styles.gridTwoCols }}>
                    <div>
                        <h2>Hello <span style={styles.redText}>{user.username}</span> </h2>
                        <p style={styles.text}>Unlock Your Web Development Career </p>
                        <h1 style={styles.heading}>Welcome to DevMind</h1>
                        <p style={styles.text}>
                        Learn the skills to build modern, responsive websites and apps from scratch with our comprehensive course offerings.Whether you're a beginner or looking to enhance your skills, our courses are tailored to help you succeed.
                        </p>
                        <div style={styles.btnGroup}>
                            <a href="/service">
                                <button
                                    style={{ ...styles.button, ...styles.primaryButton }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.backgroundColor = styles.primaryButtonHover.backgroundColor)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.backgroundColor = styles.primaryButton.backgroundColor)
                                    }
                                >
                                    Connect Now
                                </button>
                            </a>
                            <a href="/about">
                                <button
                                    style={{ ...styles.button, ...styles.secondaryButton }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.backgroundColor = styles.secondaryButtonHover.backgroundColor)
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.backgroundColor = styles.secondaryButton.backgroundColor)
                                    }
                                >
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                    <div style={styles.heroImage}>
                        <img
                            src="/images/home.png"
                            alt="coding together"
                            style={styles.image}
                            width="400"
                            height="500"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};
