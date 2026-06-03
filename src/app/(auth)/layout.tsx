import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0f0d]">

      {/* Animated Dot Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="#10b981" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      {/* Flowing animated dots */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* Large glowing blobs */}
        <div
          className="absolute rounded-full"
          style={{
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
            top: "-100px", left: "-100px",
            animation: "floatBlob1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)",
            bottom: "-80px", right: "-80px",
            animation: "floatBlob2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "300px", height: "300px",
            background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            top: "40%", left: "60%",
            animation: "floatBlob3 10s ease-in-out infinite",
          }}
        />

        {/* Animated floating dots */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-400"
            style={{
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              opacity: 0.25 + (i % 5) * 0.1,
              left: `${(i * 317) % 100}%`,
              top: `${(i * 213) % 100}%`,
              animation: `floatDot${(i % 4) + 1} ${8 + (i % 5) * 2}s ease-in-out infinite`,
              animationDelay: `${(i * 0.7) % 6}s`,
              boxShadow: "0 0 8px rgba(16,185,129,0.6)",
            }}
          />
        ))}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
          <path
            d="M 0 200 Q 400 100 800 300 T 1600 200"
            stroke="#10b981" strokeWidth="1.5" fill="none"
            style={{ animation: "drawLine 8s ease-in-out infinite" }}
          />
          <path
            d="M 0 500 Q 300 350 700 500 T 1400 400"
            stroke="#10b981" strokeWidth="1" fill="none"
            style={{ animation: "drawLine 11s ease-in-out infinite", animationDelay: "2s" }}
          />
          <path
            d="M 200 0 Q 400 300 600 150 T 1000 400"
            stroke="#14b8a6" strokeWidth="1" fill="none"
            style={{ animation: "drawLine 9s ease-in-out infinite", animationDelay: "4s" }}
          />
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes floatBlob1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, 30px) scale(1.05); }
          66% { transform: translate(-20px, 50px) scale(0.97); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-50px, -30px) scale(1.08); }
          66% { transform: translate(30px, -50px) scale(0.95); }
        }
        @keyframes floatBlob3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-40px, 40px); }
        }
        @keyframes floatDot1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes floatDot2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(25px) translateX(-20px); }
        }
        @keyframes floatDot3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-25px); }
        }
        @keyframes floatDot4 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(35px) translateX(20px); }
        }
        @keyframes drawLine {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}