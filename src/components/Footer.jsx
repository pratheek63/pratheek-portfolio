import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
        <p className="mb-2">&copy; {new Date().getFullYear()} Pratheek H.S. All rights reserved.</p>
        <p className="font-mono text-xs">
          Designed & Built with <span className="text-red-500 mx-1">♥</span> and React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer