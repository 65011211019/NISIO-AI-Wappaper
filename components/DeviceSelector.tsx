
import React from 'react';
import { DeviceType } from '../types';

interface DeviceSelectorProps {
  selectedDevice: DeviceType;
  onChange: (device: DeviceType) => void;
  disabled: boolean;
}

const deviceOptions = [
  { id: DeviceType.Smartphone, label: 'Smartphone', icon: SmartphoneIcon },
  { id: DeviceType.Desktop, label: 'Desktop', icon: DesktopIcon },
];

export const DeviceSelector: React.FC<DeviceSelectorProps> = ({ selectedDevice, onChange, disabled }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-dark-subtext mb-2">
        Select device type:
      </label>
      <div className="grid grid-cols-2 gap-4">
        {deviceOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            disabled={disabled}
            className={`
              flex flex-col items-center justify-center p-4 border rounded-lg shadow-sm 
              transition-all duration-150 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-surface focus:ring-brand-accent
              ${selectedDevice === option.id 
                ? 'bg-brand-primary text-white border-brand-primary ring-2 ring-brand-accent' 
                : 'bg-gray-800 hover:bg-gray-700 border-gray-700 text-dark-subtext hover:text-dark-text'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <option.icon className="w-8 h-8 mb-1" />
            <span className="text-sm font-medium">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// SVG Icons
function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function DesktopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
    </svg>
  );
}
