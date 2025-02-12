import React from "react";
import sDrive_1 from "../../assets/anbester.jpg";
import sDrive_2 from "../../assets/anbester_1.jpg"; // Add your second image

const PersonalProject = () => {
  // Replace these with your Google Drive direct links
  const video1Link =
    "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_1_ID";
  const video2Link =
    "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_2_ID";

  return (
    <section style={{ padding: "2rem 0", textAlign: "center" }}>
      <h2
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Personal Project - Startup Initiative
      </h2>
      <span
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "2rem",
          display: "block",
        }}
      >
        AI-Powered Business Insights Platform
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "1rem",
            padding: "1.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Developed a prototype for a commercial platform based on my
            end-of-studies project, aiming to provide AI-powered business
            insights.
          </h3>
          <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                <strong>Team Formation & Leadership:</strong> Built and managed
                a dynamic team to tackle complex AI challenges.
              </li>
              <li style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                <strong>AI Open Challenge 2022 Winner:</strong> Led a team to
                1st place, showcasing innovation, problem-solving, and technical
                excellence.
              </li>
              <li style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                <strong>Tools Used:</strong> Angular, Python (Web Scraping, AI),
                Power BI
              </li>
            </ul>
          </div>

          {/* Media Section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {/* Image 1 */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={sDrive_1}
                alt="Project Screenshot 1"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Image 2 */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={sDrive_2}
                alt="Project Screenshot 2"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Video 1 */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <video
                controls
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <source src={video1Link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video 2 */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "1rem",
                overflow: "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <video
                controls
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                <source src={video2Link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProject;
