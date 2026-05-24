import React from "react";

export default function ExKaviyaTopupStore() {
  const prices = [
    ["25 Diamonds", "LKR 85"],
    ["50 Diamonds", "LKR 170"],
    ["100 Diamonds", "LKR 320"],
    ["200 Diamonds", "LKR 640"],
    ["310 Diamonds", "LKR 970"],
    ["520 Diamonds", "LKR 1620"],
    ["1060 Diamonds", "LKR 3200"],
    ["1580 Diamonds", "LKR 4820"],
    ["2180 Diamonds", "LKR 6480"],
    ["5000 Diamonds", "LKR 14685"],
    ["5600 Diamonds", "LKR 16000"],
    ["11500 Diamonds", "LKR 32950"],
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(#020b30,#071b58)",
        color: "white",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://i.imgur.com/z9K8mQx.jpeg"
          alt="logo"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <h1 style={{ fontSize: "48px", color: "#10d9ff" }}>EX.KAVIYA</h1>
        <p style={{ fontSize: "28px" }}>Diamond Store</p>
        <p>Fast • Safe • Trusted</p>
      </div>

      <a
        href="https://wa.me/94726198188"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          background: "#16a34a",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "20px",
          textDecoration: "none",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        WhatsApp Orders
        <br />
        0726198188
      </a>

      <div
        style={{
          background: "#ff6b00",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <h2>eZ Cash Wallet Top-Up</h2>
        <p>Send payment to: 0779887708</p>
      </div>

      <h2 style={{ marginTop: "30px", textAlign: "center" }}>Price List</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
        }}
      >
        {prices.map(([name, price]) => (
          <div
            key={name}
            style={{
              background: "#14224c",
              padding: "15px",
              borderRadius: "15px",
              border: "1px solid #10d9ff",
              textAlign: "center",
            }}
          >
            <div>{name}</div>
            <div style={{ fontWeight: "bold", marginTop: "6px" }}>{price}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#1e2a52",
          padding: "20px",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      >
        <h2>Place Your Order</h2>

        <input
          placeholder="Enter Free Fire UID"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />

        <select
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          {prices.map(([name, price]) => (
            <option key={name}>
              {name} — {price}
            </option>
          ))}
        </select>

        <input type="file" style={{ marginBottom: "20px" }} />

        <a
          href="https://wa.me/94726198188"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            background: "#06b6d4",
            color: "#fff",
            textAlign: "center",
            padding: "15px",
            borderRadius: "15px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Order Now on WhatsApp
        </a>
      </div>
    </div>
  );
}
