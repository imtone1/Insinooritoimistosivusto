import React, { useState } from 'react'


const Fullimage = ({ imagePath, alt, classn , width, height }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openFullscreen = () => {
    setIsOpen(true)
  }

  const closeFullscreen = () => {
    setIsOpen(false)
  }
  return (
    <>
      <img className={classn} src={imagePath} alt={alt} width={width} height={height} onClick={openFullscreen} />

      {isOpen && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img className="fullscreen-image" src={imagePath} alt={alt} />
          <span className="close-button" onClick={closeFullscreen}>&times;</span>
        </div>
      )}
    </>
  )
}

export default Fullimage