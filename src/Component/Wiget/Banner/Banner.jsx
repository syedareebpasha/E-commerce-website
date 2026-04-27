import React, { useEffect, useRef, useState } from 'react'
import bannerimg from '../../../assets/banner.jpg'

const Banner = () => {
  const initialtime = 48 * 60 * 60

  const [timeleft, settimeleft] = useState(() => {
    const storetime = localStorage.getItem('timeremain')
    return storetime && parseInt(storetime, 10) > 0
      ? parseInt(storetime, 10)
      : initialtime
  })

  const timerref = useRef(null)

  useEffect(() => {
    if (timeleft <= 0) {
      localStorage.setItem('timeremain', 0)
      return
    }

    timerref.current = setInterval(() => {
      settimeleft(prev => {
        if (prev <= 1) {
          clearInterval(timerref.current)
          localStorage.setItem('timeremain', 0)
          return 0
        }
        const timeremain = prev - 1
        localStorage.setItem('timeremain', timeremain)
        return timeremain
      })
    }, 1000)

    return () => clearInterval(timerref.current)
  }, []) 

  const formattime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    }
  }

  const { hours, minutes, seconds } = formattime(timeleft)

  return (
    <section
      className=' bg-cover bg-center relative h-[88vh] min-h-[500px] flex items-center overflow-hidden'
      style={{ backgroundImage: `url(${bannerimg})` }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent' />

      <div className='absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d4a843] via-[#f0c96a] to-transparent' />

      <div className='relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 w-full'>

        {/* Sale badge */}
        <div className='inline-flex items-center gap-2 bg-[#d4a843]/15 border border-[#d4a843]/40 rounded-full px-4 py-1.5 mb-5'>
          <span className='w-2 h-2 rounded-full bg-[#d4a843] animate-pulse' />
          <span className='text-[#d4a843] text-[11px] font-black tracking-[2px] uppercase'>
            Limited Time Offer
          </span>
        </div>

        {/* Heading */}
        <h1 className='text-white text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-3'
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Big<br />
          <span className='text-[#d4a843]'>Sale!</span>
        </h1>

        {/* Subheading */}
        <p className='text-white/70 text-base sm:text-xl font-medium mt-4 mb-8 tracking-wide'>
          Up to <span className='text-[#d4a843] font-black'>50% OFF</span> — Limited Time Only!
        </p>

        {/* Countdown */}
        <div className='flex items-end gap-2 sm:gap-3'>
          {[{ val: hours, label: 'Hours' }, { val: minutes, label: 'Mins' }, { val: seconds, label: 'Secs' }].map(({ val, label }, i) => (
            <React.Fragment key={label}>
              <div className='flex flex-col items-center'>
                <div className='bg-[#0a2e1f]/80 backdrop-blur-sm border border-[#d4a843]/30 rounded-xl sm:rounded-2xl w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]'>
                  <span
                    className='text-white text-2xl sm:text-3xl lg:text-4xl font-black tabular-nums'
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {val}
                  </span>
                </div>
                <span className='text-white/40 text-[9px] sm:text-[10px] font-bold tracking-[1.5px] uppercase mt-1.5'>
                  {label}
                </span>
              </div>
              {i < 2 && (
                <span className='text-[#d4a843] text-2xl sm:text-3xl font-black mb-5 sm:mb-6 select-none'>:</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <button className='mt-8 px-7 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#d4a843] to-[#b8892e] text-[#0a2e1f] font-black text-sm sm:text-base uppercase tracking-widest rounded-full shadow-[0_8px_24px_rgba(212,168,67,0.4)] hover:shadow-[0_8px_32px_rgba(212,168,67,0.6)] hover:from-[#e0b550] hover:to-[#c49535] active:scale-95 transition-all duration-200 cursor-pointer'>
          Shop Now →
        </button>

      </div>
    </section>
  )
}

export default Banner