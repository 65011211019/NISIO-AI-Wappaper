
import React, { useState, useCallback } from 'react';
import { DeviceType, GeneratedImage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PromptInput } from './components/PromptInput';
import { DeviceSelector } from './components/DeviceSelector';
import { GenerateButton } from './components/GenerateButton';
import { WallpaperDisplay } from './components/WallpaperDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { generateWallpaperImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [deviceType, setDeviceType] = useState<DeviceType>(DeviceType.Smartphone);
  const [generatedImage, setGeneratedImage] = useState<GeneratedImage | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateWallpaper = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt to describe your wallpaper.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Simulate API_KEY for environments where process.env is not directly available in the browser
      // In a real build setup, process.env.API_KEY would be replaced or handled by the bundler/environment.
      // For this example, we'll use a placeholder if not found, and geminiService will check.
      const apiKey = process.env.API_KEY || "YOUR_API_KEY"; // Fallback for local dev if not set
       if (apiKey === "YOUR_API_KEY" || !apiKey) {
        console.warn("API Key is not configured. Please set the API_KEY environment variable.");
        setError("API Key not configured. Cannot generate images.");
        setIsLoading(false);
        return;
      }

      const image = await generateWallpaperImage(prompt, deviceType, apiKey);
      setGeneratedImage(image);
    } catch (err) {
      console.error('Error generating wallpaper:', err);
      if (err instanceof Error) {
        setError(`Failed to generate wallpaper: ${err.message}. Check console for details.`);
      } else {
        setError('An unknown error occurred while generating the wallpaper.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, deviceType]);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col selection:bg-brand-accent selection:text-dark-bg">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-dark-surface shadow-2xl rounded-lg p-6 md:p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-brand-accent">Craft Your AI Wallpaper</h2>
          
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            disabled={isLoading}
          />
          
          <DeviceSelector
            selectedDevice={deviceType}
            onChange={setDeviceType}
            disabled={isLoading}
          />
          
          <GenerateButton
            onClick={handleGenerateWallpaper}
            isLoading={isLoading}
            disabled={!prompt.trim() || isLoading}
          />

          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          
          {generatedImage && !isLoading && !error && (
            <WallpaperDisplay
              image={generatedImage}
              prompt={prompt}
              deviceType={deviceType}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
