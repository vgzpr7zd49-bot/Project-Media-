import React from 'react';
import { Instagram, Youtube, Linkedin, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const InstagramFeed: React.FC = () => {
  const placeholders = [
    'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
    'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #5ee7df 0%, #b490d2 100%)',
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[32px] font-semibold text-white mb-2">Segue o nosso trabalho</h2>
          <a 
            href="https://www.instagram.com/project.media.inc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors text-sm tracking-widest"
          >
            @project.media.inc · Instagram
          </a>
        </div>

        {/* 
          BEHOLD.SO WIDGET REPLACEMENT:
          Replace the grid below with the Behold.so widget script/div.
          Example: <div data-behold-id="YOUR_WIDGET_ID"></div>
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {placeholders.map((gradient, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="aspect-square relative group cursor-pointer overflow-hidden rounded-sm"
              style={{ background: gradient }}
            >
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                <Heart size={20} className="text-white fill-white" />
                <span className="text-white font-medium">{Math.floor(Math.random() * 500) + 100}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a 
            href="https://www.instagram.com/project.media.inc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm uppercase tracking-widest text-xs font-semibold"
          >
            <Instagram size={18} />
            <span>Ver mais no Instagram</span>
          </a>

          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/project.media.inc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FAE1BB] transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@ProjectMediaInc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FAE1BB] transition-colors duration-300"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/project-mediainc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#FAE1BB] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
