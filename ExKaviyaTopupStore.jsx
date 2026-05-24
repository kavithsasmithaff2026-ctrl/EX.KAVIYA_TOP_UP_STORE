import React, { useState } from "react";

export default function ExKaviyaTopupStore() {
  const [uid, setUid] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("25 Diamonds — LKR 85");

  const packages = [
    "25 Diamonds — LKR 85",
    "50 Diamonds — LKR 170",
    "100 Diamonds — LKR 320",
    "200 Diamonds — LKR 640",
    "310 Diamonds — LKR 970",
    "520 Diamonds — LKR 1620",
    "1060 Diamonds — LKR 3200",
    "1580 Diamonds — LKR 4820",
    "2180 Diamonds — LKR 6480",
    "5000 Diamonds — LKR 14685",
    "5600 Diamonds — LKR 16000",
    "11500 Diamonds — LKR 32950",
  ];

  const handleOrder = () => {
    const message = `Hello EX.KAVIYA TOP UP STORE

UID: ${uid}
Package: ${selectedPackage}

Payment screenshot attached.`;

    window.open(
      `https://wa.me/94726198188?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center py-10">
          <h1 className="text-5xl font-black text-cyan-400">
            EX.KAVIYA
          </h1>
          <p className="text-2xl mt-3">Diamond Store</p>
          <p className="text-slate-300 mt-2">Fast • Safe • Trusted</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {packages.map((item) => (
            <div
              key={item}
              className="bg-white/10 rounded-3xl p-5 border border-cyan-500 text-xl"
            >
              {item}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/94726198188"
          target="_blank"
          rel="noreferrer"
          className="block bg-green-500 text-center rounded-3xl p-6 text-3xl font-bold mb-8"
        >
          WhatsApp Orders
          <br />
          0726198188
        </a>

        <div className="bg-orange-500 rounded-3xl p-6 mb-8">
          <h2 className="text-2xl font-bold">eZ Cash Wallet Top-Up</h2>
          <p className="mt-2 font-bold">Send payment to: 0779887708</p>
          <p className="mt-3">
            Payment screenshot එක සහ UID එක WhatsApp එකෙන් එවන්න.
          </p>
        </div>

        <div className="bg-white/10 rounded-3xl p-6">
          <h2 className="text-3xl font-bold mb-4">Place Your Order</h2>

          <input
            type="text"
            placeholder="Enter Free Fire UID"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            className="w-full p-4 rounded-xl text-black mb-4"
          />

          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="w-full p-4 rounded-xl text-black mb-4"
          >
            {packages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <input
            type="file"
            className="w-full mb-6"
          />

          <button
            onClick={handleOrder}
            className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-xl p-4 text-xl font-bold"
          >
            Order Now on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}
