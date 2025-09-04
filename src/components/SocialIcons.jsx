import React from 'react'

export default function SocialIcons({ className = '' }) {
  const iconCls = 'size-5 fill-current'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/prosetelevator/"
        target="_blank" rel="noreferrer"
        className="text-neutral-400 hover:text-white transition"
        aria-label="Instagram - Proset Elevator"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" className={iconCls}>
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm0 2.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zM17.8 6.2a1 1 0 110 2 1 1 0 010-2z"/>
        </svg>
      </a>
    </div>
  )
}
