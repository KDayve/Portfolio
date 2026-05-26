import React from 'react';

export default function Footer() {
  // Replace these placeholders with your actual handles/numbers
  const whatsappNumber = "1234567890"; // Include country code, no spaces or plus signs (e.g., 15551234567)
  const tiktokUsername = "@phresh15";
  const instagramUsername = "yourusername";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          Designed & Built by Dave © {new Date().getFullYear()}
        </div>
        <div className="footer-socials">
          {/* WhatsApp Click-to-Chat Link */}
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            WhatsApp
          </a>

          {/* TikTok Link */}
          <a 
            href={`https://www.tiktok.com/@${tiktokUsername}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            TikTok
          </a>

          {/* Instagram Link */}
          <a 
            href={`https://www.instagram.com/${instagramUsername}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}