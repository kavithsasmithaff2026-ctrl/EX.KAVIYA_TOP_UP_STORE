export default function ExKaviyaTopupStore() {
  const packages = [
    ["25 Diamonds", "LKR 85"],
    ["50 Diamonds", "LKR 170"],
    ["100 Diamonds", "LKR 320"],
    ["200 Diamonds", "LKR 640"],
    ["310 Diamonds", "LKR 970"],
    ["520 Diamonds", "LKR 1620"],
    ["1060 Diamonds", "LKR 3200"],
    ["1580 Diamonds", "LKR 4820"],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center py-10">
          <h1 className="text-5xl font-black tracking-wide text-cyan-400">EX.KAVIYA</h1>
          <p className="text-2xl font-semibold mt-2">Diamond Store</p>
          <p className="mt-3 text-slate-300">Fast • Safe • Trusted</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {packages.map(([name, price]) => (
            <div key={name} className="bg-white/10 rounded-3xl p-5 border border-cyan-500 shadow-xl flex justify-between text-xl">
              <span>{name}</span>
              <span className="font-bold text-cyan-300">{price}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-green-600 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">WhatsApp Orders</h2>
            <p className="mt-2 text-3xl font-black">0726198188</p>
          </div>
          <div className="bg-orange-500 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">eZ Cash Wallet Top-Up</h2>
            <p className="mt-2 text-xl font-bold">Send payment to: 0779887708</p>
            <p className="mt-2">Payment එක eZ Cash wallet එකට දාපු පස්සේ WhatsApp එකෙන් payment screenshot එක සහ UID එක එවන්න. Payment confirm වුණාම diamonds drop කරනවා.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
