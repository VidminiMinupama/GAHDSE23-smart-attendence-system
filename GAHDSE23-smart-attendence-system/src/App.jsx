import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <div style={{
        backgroundColor: "#110877",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px"
      }}>
        {/* Left Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f6/NIBM_Sri_Lanka_logo.png"
          alt="Logo"
          style={{ height: "40px" }}
        />

        {/* Center Links */}
        <div>
          {["Home", "Profile", "Service"].map((text, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: "white",
                margin: "0 15px",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Right Logout Button */}
        <button style={{
          backgroundColor: "#2b1f67",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Logout
        </button>
      </div>

      {/* Main Image */}
      <img
        src="/lecture.png" // put lecture.png inside public folder
        alt="Hero"
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          opacity: "0.8"
        }}
      />

      {/* Card Section */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        marginTop: "-100px",
        padding: "20px"
      }}>
        {/* Cards */}
        {[
          {
            title: "Attendance Record",
            img: "https://cdn-icons-png.flaticon.com/512/5997/5997421.png",
          },
          {
            title: "Mark Attendance",
            img: "https://cdn-icons-png.flaticon.com/512/1308/1308659.png",
          }
        ].map((card, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <img
              src={card.img}
              alt={card.title}
              style={{
                width: "250px",
                borderRadius: "10px"
              }}
            />
            <br />
            <button style={{
              marginTop: "15px",
              backgroundColor: "#110877",
              color: "white",
              border: "none",
              padding: "15px 20px",
              fontSize: "18px",
              borderRadius: "12px",
              cursor: "pointer"
            }}>
              {card.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
