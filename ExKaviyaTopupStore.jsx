import React, { useState } from "react";

export default function ExKaviyaTopupStore() {
  const [uid, setUid] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(
    "25 Diamonds — LKR 85"
  );

  const orderNow = () => {
    const msg =
      `EX.KAVIYA Order\n` +
      `UID: ${uid}\n` +
      `Package: ${selectedPackage}`;

    window.open(
      `https://wa.me/94726198188?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const prices = [
    "25 Diamonds — LKR 85",
    "50 Diamonds — LKR 170",
    "100 Diamonds — LKR 320",
    "200 Diamonds — LKR 640",
    "310 Diamonds — LKR 970",
    "520 Diamonds — LKR 1620",
    "1060 Diamonds — LKR 3200",
    "1580 Diamonds — LKR 4820"
  ];

  return (
    <div
      style={{
        background: "#08153a",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src="https://i.ibb.co/5xJ0r0K/exkaviya-logo.jpg"
          alt="EX.KAVIYA"
          style={{
            width: "160px",
            borderRadius: "50%"
          }}
        />

        <h1 style={{ color: "#10d9ff", fontSize: "52px" }}>EX.KAVIYA</h1>
        <h2>Diamond Store</h2>
        <p>Fast • Safe • Trusted</p>
      </div>

      <div
        style={{
          background: "#16a34a",
          padding: "25px",
          borderRadius: "20px",
          margin
marginTop: "20px",
          textAlign: "center"
        }}
      >
        <h2>WhatsApp Orders</h2>
        <a
          href="https://wa.me/94726198188"
          style={{ color: "white", fontSize: "34px", fontWeight: "bold" }}
        >
          0726198188
        </a>
      </div>

      <div
        style={{
          background: "#f97316",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "20px"
        }}
      >
        <h2>eZ Cash Wallet Top-Up</h2>
        <p>Send payment to: 0779887708</p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Diamond Price List
        </h2>

        {prices.map((item) => (
          <div
            key={item}
            onClick={() => setSelectedPackage(item)}
            style={{
              background: selectedPackage === item ? "#10d9ff" : "#24345d",
              color: "white",
              padding: "18px",
              marginBottom: "12px",
              borderRadius: "14px",
              cursor: "pointer",
              fontSize: "22px"
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div
        style={{
          background: "#1e2a52",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "30px"
        }}
      >
        <h2>Place Your Order</h2>

        <input
          type="text"
          placeholder="Enter Free Fire UID"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            fontSize: "18px",
            marginBottom: "15px"
          }}
        />

        <select
          value={selectedPackage}
          onChange={(e) => setSelectedPackage(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            fontSize: "18px",
            marginBottom: "15px"
          }}
        >
          {prices.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <button
          onClick={orderNow}
          style={{
            width: "100%",
            background: "#10d9ff",
            color: "white",
            padding: "18px",
            border: "none",
            borderRadius: "12px",
            fontSize: "22px",
            fontWeight: "bold"
          }}
        >
          Order Now on WhatsApp
        </button>
      </div>
    </div>
  );
}
