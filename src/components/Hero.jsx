import { useEffect, useState, useRef } from 'react'

const useCountUp = (target, duration = 2000, decimals = 0) => {
  const [count, setCount] = useState(0)
  const started = useRef(false)
  const start = () => {
    if (started.current) return
    started.current = true
    const steps = 60
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(interval) }
      else { setCount(parseFloat(current.toFixed(decimals))) }
    }, duration / steps)
  }
  return [count, start]
}

const Hero = () => {
  const [count1, startCount1] = useCountUp(10, 2000, 0)
  const [count2, startCount2] = useCountUp(99.9, 2000, 1)
  const [count3, startCount3] = useCountUp(50, 2000, 0)
  const statsRef = useRef(null)
  const hasStarted = useRef(false)

  const [show, setShow] = useState({ badge: false, title: false, subtitle: false, buttons: false, stats: false })

  useEffect(() => {
    const timers = [
      setTimeout(() => setShow(s => ({ ...s, badge: true })), 100),
      setTimeout(() => setShow(s => ({ ...s, title: true })), 300),
      setTimeout(() => setShow(s => ({ ...s, subtitle: true })), 600),
      setTimeout(() => setShow(s => ({ ...s, buttons: true })), 800),
      setTimeout(() => setShow(s => ({ ...s, stats: true })), 1000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasStarted.current) {
        hasStarted.current = true
        startCount1(); startCount2(); startCount3()
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const gradientText = {
    background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'block',
  }

  const fadeUp = (visible, delay = '0ms') => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(36px)',
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  })

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%,100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,107,53,0.7); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 8px rgba(255,107,53,0); }
        }
        @keyframes float-badge {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); border-radius: 50% 40% 60% 50%; }
          33% { transform: translate(60px,-80px) scale(1.1); border-radius: 40% 60% 50% 60%; }
          66% { transform: translate(-40px,50px) scale(0.95); border-radius: 60% 50% 40% 55%; }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); border-radius: 40% 60% 50% 50%; }
          33% { transform: translate(-70px,50px) scale(1.08); border-radius: 60% 40% 55% 45%; }
          66% { transform: translate(50px,-60px) scale(0.92); border-radius: 50% 55% 40% 60%; }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,-40px) scale(1.12); }
        }
        .hero-btn-primary {
          padding: 15px 40px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          color: #fff; border: none; border-radius: 50px;
          font-size: 16px; font-weight: 700; cursor: pointer;
          box-shadow: 0 4px 20px rgba(255,107,53,0.35);
          transition: all 0.25s ease; letter-spacing: 0.3px;
          position: relative; overflow: hidden;
        }
        .hero-btn-primary::after {
          content: ''; position: absolute; top: 50%; left: 50%;
          width: 0; height: 0; background: rgba(255,255,255,0.25);
          border-radius: 50%; transform: translate(-50%,-50%);
          transition: width 0.5s ease, height 0.5s ease;
        }
        .hero-btn-primary:hover::after { width: 300px; height: 300px; }
        .hero-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(255,107,53,0.5); }
        .hero-btn-secondary {
          padding: 15px 40px; background: transparent; color: #1a1a2e;
          border: 2.5px solid #1a1a2e; border-radius: 50px;
          font-size: 16px; font-weight: 700; cursor: pointer;
          transition: all 0.25s ease; letter-spacing: 0.3px;
        }
        .hero-btn-secondary:hover { background: #1a1a2e; color: #fff; transform: translateY(-3px); box-shadow: 0 10px 30px rgba(26,26,46,0.25); }
        .stat-item { transition: transform 0.3s ease; }
        .stat-item:hover { transform: translateY(-4px); }
      `}</style>

      <section
        id="home"
        style={{
          minHeight: '100vh', width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #f8f4ff 0%, #fff5f0 50%, #f0f8ff 100%)',
          padding: '120px 24px 80px', boxSizing: 'border-box',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Blobs */}
        <div style={{ position:'absolute', top:'-15%', left:'-10%', width:'550px', height:'550px', background:'radial-gradient(circle, rgba(255,107,53,0.18), transparent 70%)', animation:'blob1 20s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-15%', right:'-10%', width:'480px', height:'480px', background:'radial-gradient(circle, rgba(167,139,250,0.18), transparent 70%)', animation:'blob2 25s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'40%', right:'15%', width:'280px', height:'280px', background:'radial-gradient(circle, rgba(255,107,53,0.1), transparent 70%)', borderRadius:'50%', animation:'blob3 18s ease-in-out infinite', pointerEvents:'none' }} />

        <div style={{ maxWidth:'880px', width:'100%', textAlign:'center', position:'relative', zIndex:1 }}>

          {/* Badge */}
          <div style={{
            ...fadeUp(show.badge),
            display:'inline-flex', alignItems:'center', gap:'10px',
            background:'#1a1a2e', color:'#fff', padding:'10px 24px',
            borderRadius:'50px', fontSize:'13px', fontWeight:'600',
            marginBottom:'36px', letterSpacing:'0.4px',
            boxShadow:'0 4px 24px rgba(0,0,0,0.2)',
            animation: show.badge ? 'float-badge 3s ease-in-out infinite' : 'none',
          }}>
            <span style={{ width:'10px', height:'10px', borderRadius:'50%', background:'#ff6b35', display:'inline-block', animation:'pulse-dot 2s infinite' }} />
            AI-Powered Business Automation
          </div>

          {/* Title */}
          <h1 style={{
            ...fadeUp(show.title, '0.05s'),
            fontSize:'clamp(44px, 7vw, 82px)',
            fontWeight:'900', lineHeight:'1.1',
            margin:'0 0 28px 0', letterSpacing:'-1px',
          }}>
            <span style={gradientText}>Build Smarter</span>
            <span style={{ display:'block', color:'#1a1a2e' }}>Automate Everything</span>
            <span style={{ display:'block', color:'#1a1a2e' }}>Convert More</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            ...fadeUp(show.subtitle, '0.05s'),
            fontSize:'clamp(15px, 1.8vw, 18px)', color:'#666',
            lineHeight:'1.75', maxWidth:'660px', margin:'0 auto 40px',
          }}>
            Build AI-powered conversational experiences with advanced AIML, natural language
            processing, and seamless automation. Transform customer engagement and streamline
            operations with ChatViq's intelligent platform.
          </p>

          {/* Buttons */}
          <div style={{ ...fadeUp(show.buttons, '0.05s'), display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginBottom:'64px' }}>
            <button className="hero-btn-primary">Start Free Trial</button>
            <button className="hero-btn-secondary">Watch Demo</button>
          </div>

          {/* Stats */}
          <div ref={statsRef} style={{ ...fadeUp(show.stats, '0.05s'), display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
            {[
              { num:`${count1}M+`, label:'Conversations/Month' },
              { num:`${count2}%`, label:'Uptime Guarantee' },
              { num:`${count3}+`, label:'Integrations' },
            ].map((stat, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center' }}>
                {i > 0 && <div style={{ width:'1px', height:'56px', background:'#ddd', margin:'0 40px' }} />}
                <div className="stat-item" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'6px' }}>
                  <span style={{ fontSize:'clamp(30px, 4vw, 44px)', fontWeight:'900', ...gradientText }}>{stat.num}</span>
                  <span style={{ fontSize:'11px', color:'#999', fontWeight:'600', letterSpacing:'1px', textTransform:'uppercase' }}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero