
import React from 'react';
import { GeneratedImage, DeviceType } from '../types';

interface WallpaperDisplayProps {
  image: GeneratedImage;
  prompt: string;
  deviceType: DeviceType;
}

export const WallpaperDisplay: React.FC<WallpaperDisplayProps> = ({ image, prompt, deviceType }) => {
  const imageUrl = `data:${image.mimeType};base64,${image.imageBytes}`;

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    const promptSnippet = prompt.substring(0, 20).replace(/\s+/g, '_').toLowerCase() || 'wallpaper';
    const fileExtension = image.mimeType.split('/')[1] || 'jpg';
    link.download = `nisio_ai_${deviceType}_${promptSnippet}.${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const previewContainerBaseClasses = "relative mx-auto border-4 border-gray-700 rounded-lg overflow-hidden shadow-xl";
  const smartphoneClasses = "w-48 h-96"; // Approx 9:19.5 ratio
  const desktopClasses = "w-full max-w-lg aspect-[16/9]"; // 16:9 ratio

  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-semibold text-brand-accent mb-4 text-center">Your AI Wallpaper is Ready!</h3>
      <div className={`
        ${previewContainerBaseClasses}
        ${deviceType === DeviceType.Smartphone ? smartphoneClasses : desktopClasses}
        bg-gray-900
      `}>
        <img
          src={imageUrl}
          alt={`AI generated wallpaper for ${deviceType}: ${prompt}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={downloadImage}
        className="mt-6 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-dark-bg bg-brand-accent hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-surface focus:ring-yellow-500 transition-colors duration-150"
      >
        <DownloadIcon className="w-5 h-5 mr-2" />
        Download Wallpaper
      </button>
    </div>
  );
};

// SVG Icon for Download
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}
