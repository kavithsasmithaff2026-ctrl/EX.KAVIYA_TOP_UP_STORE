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
