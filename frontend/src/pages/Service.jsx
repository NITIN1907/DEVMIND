import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <section style={styles.section}>
       <center> <h1 style={styles.heading}>SERVICES</h1></center>
      <div className="container">
      </div>
      <div className="container grid grid-three-cols" style={styles.grid}>
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;
          return (
            <div className="card" key={index} style={styles.card}>
              <div className="card-img" style={styles.cardImg}>
                <img
                  src="/images/design.png"
                  alt="our services info"
                  width="500"
                  style={styles.img}
                />
              </div>
              <div className="card-details" style={styles.cardDetails}>
                <div className="grid-two-cols" style={styles.gridTwoCols}>
                  <p style={styles.provider}>{provider}</p>
                  <p style={styles.price}>{price}</p>
                </div>
                <h2 style={styles.service}>{service}</h2>
                <p style={styles.description}>{description}</p>
                <button style={styles.paymentButton}>
                  Pay Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#1d1d1d",
    color: "#fff",
    padding: "40px 0",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#f4f4f4",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "36px",
    marginTop: "-70px",
  },
  card: {
    backgroundColor: "#2c2c2c",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  cardImg: {
    width: "100%",
    height: "auto",
  },
  img: {
    width: "100%",
    borderRadius: "8px",
  },
  cardDetails: {
    padding: "20px",
    color: "#bbb",
  },
  gridTwoCols: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginBottom: "20px",
  },
  provider: {
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    textAlign: "right",
  },
  service: {
    fontSize: "1.6rem",
    color: "#fff",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.1rem",
    color: "#ddd",
  },
  paymentButton: {
    backgroundColor: "#ff6b6b",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
  },
};
