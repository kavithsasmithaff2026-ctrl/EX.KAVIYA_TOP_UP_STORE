import React, { useState } from "react";

export default function ExKaviyaTopupStore() {
  const [uid, setUid] = useState("");
  const [pkg, setPkg] = useState("25 Diamonds — LKR 85");

  const packages = [
    "25 Diamonds — LKR 85",
    "50 Diamonds — LKR 170",
    "100 Diamonds — LKR 320",
    "200 Diamonds — LKR 640",
    "310 Diamonds — LKR 970",
    "520 Diamonds — LKR 1620",
    "1060 Diamonds — LKR 3200",
    "1580 Diamonds — LKR 4820"
  ];

  const orderNow = () => {
    const msg =
      `🔥 EX.KAVIYA TOP-UP ORDER 🔥\n\n` +
      `UID: ${uid}\n` +
      `Package: ${pkg}`;

    window.open(
      `https://wa.me/94726198188?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        background: "#071738",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://i.imgur.com/5x4m2Yz.jpeg"
          alt="logo"
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #a855f7"
          }}
        />

        <h1 style={{ fontSize: "50px", color: "#00d9ff" }}>EX.KAVIYA</h1>
        <h2>Diamond Store</h2>
      </div>

      <div
        style={{
          background: "#16a34a",
          padding: "20px",
          borderRadius: "20px",
          textAlign: "center",
          marginTop: "25px",
          fontSize: "32px",
          fontWeight: "bold"
        }}
      >
        WhatsApp Orders
        <br />
        0726198188
      </div>

      <div
        style={{
          background: "#f97316",
          padding: "20px",
          borderRadius: "20px",
          textAlign: "center",
          marginTop: "20px",
          fontSize: "28px",
          fontWeight: "bold"
        }}
      >
        eZ Cash Wallet
        <br />
        0779887708
      </div>

      <h2 style={{ textAlign: "center", marginTop: "35px" }}>
        Price List
      </h2>

      {packages.map((item) => (
        <div
          key={item}
          onClick={() => setPkg(item)}
          style={{
            background: pkg === item ? "#06b6d4" : "#1e2c63",
            padding: "18px",
            margin: "12px 0",
            borderRadius: "16px",
            fontSize: "26px",
            cursor: "pointer"
          }}
        >
          {item}
        </div>
      ))}

      <div style={{ marginTop: "35px" }}>
        <h2 style={{ textAlign: "center" }}>Place Your Order</h2>

        <input
          placeholder="Enter Free Fire UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          style={{
            width:
