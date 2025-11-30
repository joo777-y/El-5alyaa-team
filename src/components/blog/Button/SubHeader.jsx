import React from "react";
import blogpic from "./images/1461f3d6ff74c027a1888544144abe4be6e02cbf.jpg";
import p from "./images/logo.png";
export default function BlogHeader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "200px",
        backgroundImage: "url('https://via.placeholder.com/1600x300')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center text-white"
        style={{
          width: "100%",
          minHeight: "300px",
          backgroundImage: `url(${blogpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "50px 0",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 1,
          }}
        ></div>

        <h1
          style={{
            margin: 0,
            fontSize: "3rem",
            zIndex: 2,
            position: "relative",
            color: "black",
          }}
        >
          Blog
        </h1>
        <p
          style={{
            margin: 0,
            zIndex: 2,
            position: "relative",
            color: "black",
          }}
        >
          <img
        src={p}
        alt="Logo"
        style={{
          position: "absolute",
          top: "-100px",
          left: "30px",
          height: "40px",
          zIndex: 2,
        }}
      />
          <span style={{ fontWeight: "bold" }}>Home &gt;</span> Blog
        </p>
      </div>
    </div>
  );
}
