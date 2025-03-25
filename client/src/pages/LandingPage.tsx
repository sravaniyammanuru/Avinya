import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function LandingPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation('/home'); // Auto-redirect after 4 seconds
    }, 8000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [setLocation]);

  return (
    <>
      <style>{`
        body {
            background-color: #02021b;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            text-align: center;
            color: white;
            margin: 0;
            overflow: hidden;
            font-family: 'Arial', sans-serif;
            position: relative;
            cursor: pointer;
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }

        .logo-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1;
            width: 100%;
        }

        .landing-img {
            max-width: 205px;
            height: auto;
            display: block;
            margin: 0 auto;
            opacity: 0;
            transform: scale(0) rotate(-10deg);
            animation: reveal-image 2s ease-out 0.5s forwards;
        }

        .landing-title {
            font-size: 60px;
            letter-spacing: 3px;
            color: rgb(230, 243, 242);
            text-shadow: 
                2px 2px 2px white,
                2px 2px 2px pink,
                2px 2px 2px pink, 
                2px 2px 2px white;
            margin: 10px 0;
            opacity: 0;
            width: 100%;
            animation: reveal-heading 2s ease-out 2.5s forwards;
        }

        .landing-subtitle {
            font-size: 24px;
            color: #8eb8e5;
            font-family: 'Quicksand', sans-serif;
            line-height: 1.5;
            margin: 10px 0 20px;
            opacity: 0;
            width: 100%;
            animation: reveal-paragraph 2s ease-out 3.5s forwards;
        }
        
        @keyframes reveal-image {
            0% {
                opacity: 0;
                transform: scale(0) rotate(-10deg);
            }
            60% {
                opacity: 0.8;
                transform: scale(1.2) rotate(5deg);
            }
            80% {
                transform: scale(0.9) rotate(-2deg);
            }
            100% {
                opacity: 1;
                transform: scale(1) rotate(0);
            }
        }

        @keyframes reveal-heading {
            0% {
                opacity: 0;
                transform: translateY(-30px);
                letter-spacing: 10px;
            }
            60% {
                opacity: 0.8;
                transform: translateY(5px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
                letter-spacing: 3px;
            }
        }

        @keyframes reveal-paragraph {
            0% {
                opacity: 0;
                transform: translateY(30px);
                letter-spacing: 2px;
            }
            30% {
                letter-spacing: 3px;
            }
            100% {
                opacity: 1;
                transform: translateY(0);
                letter-spacing: normal;
            }
        }

        .circle {
            position: absolute;
            border-radius: 50%;
            background: gray;
            animation: moveCircle 10s infinite linear;
            opacity: 0.5;
        }

        @keyframes moveCircle {
            0% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(50px, -50px) scale(1.2); }
            50% { transform: translate(-50px, 50px) scale(0.8); }
            75% { transform: translate(30px, -30px) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
      
      <div className="background">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="circle"
            style={{
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="logo-container">
        <img 
          src="https://res.cloudinary.com/dxxz4qcy9/image/upload/v1742484768/avinya_2k25_uhhptt.png" 
          alt="Avinya 2K25 Logo"
          className="landing-img"
        />
        <h3 className="landing-title">Avinya</h3>
        <p className="landing-subtitle">Ignite your passion, Shape your future</p>
      </div>
    </>
  );
}
