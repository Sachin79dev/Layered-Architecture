import React from "react";

const Homepage = () => {

  const doodles = [
    {
      emoji: "📚",
      className:
        "top-[8%] right-[4%] rotate-[12deg] text-[150px] md:text-[190px]",
    },
    {
      emoji: "✏️",
      className:
        "top-[12%] right-[28%] rotate-[-25deg] text-[100px] md:text-[140px]",
    },
    {
      emoji: "🎒",
      className:
        "bottom-[4%] left-[7%] rotate-[-12deg] text-[130px] md:text-[170px]",
    },
    {
      emoji: "🏀",
      className:
        "bottom-[1%] right-[5%] rotate-[10deg] text-[120px] md:text-[160px]",
    },
    {
      emoji: "📐",
      className:
        "bottom-[10%] right-[25%] rotate-[15deg] text-[100px] md:text-[140px]",
    },
    {
      emoji: "🧪",
      className:
        "top-[30%] right-[15%] rotate-[-10deg] text-[80px] md:text-[110px]",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#55aaf3] text-white">
      {/* Background doodle shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large white organic shape */}
        <div className="absolute right-[-8%] top-[20%] h-[520px] w-[520px] rounded-[45%_55%_60%_40%] bg-white/10 blur-[2px]" />

        {/* Decorative circles */}
        <div className="absolute left-[8%] top-[10%] h-10 w-10 rounded-full bg-yellow-300/80" />
        <div className="absolute left-[18%] top-[24%] h-6 w-6 rounded-full bg-red-400/80" />
        <div className="absolute right-[31%] top-[7%] h-8 w-8 rounded-full bg-orange-400/90" />
        <div className="absolute bottom-[18%] left-[43%] h-8 w-8 rounded-full bg-green-400/70" />

        {/* Hand drawn lines */}
        <div className="absolute left-[-5%] top-[35%] h-[3px] w-[300px] rotate-[-8deg] rounded-full bg-white/20" />
        <div className="absolute bottom-[20%] left-[35%] h-[3px] w-[200px] rotate-[15deg] rounded-full bg-white/20" />
      </div>

      {/* Doodle objects */}
      {doodles.map((item, index) => (
        <div
          key={index}
          className={`pointer-events-none absolute select-none drop-shadow-xl ${item.className}`}
        >
          {item.emoji}
        </div>
      ))}

      {/* Edit button */}
      <button className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#173b57] text-xl shadow-xl transition hover:scale-110">
        ✎
      </button>

      {/* Credit */}
      <div className="fixed bottom-5 left-5 z-40 hidden rounded-lg bg-[#173b57]/90 px-3 py-2 text-xs shadow-lg sm:block">
        <div className="font-semibold">Learning Space</div>
        <div className="text-white/70">Creative Edition</div>
      </div>
    </main>
  );
};

export default Homepage;
