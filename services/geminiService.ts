
import { GoogleGenAI, GenerateImageResponse } from "@google/genai";
import { DeviceType, GeneratedImage } from '../types';

const IMAGE_MODEL_NAME = 'imagen-3.0-generate-002';

export async function generateWallpaperImage(
  userPrompt: string,
  deviceType: DeviceType,
  apiKey: string
): Promise<GeneratedImage> {
  if (!apiKey || apiKey === "YOUR_API_KEY") {
    throw new Error("API Key is not configured. Please set the API_KEY environment variable or provide it.");
  }
  
  const ai = new GoogleGenAI({ apiKey });

  let detailedPrompt = `Create a visually stunning, high-resolution wallpaper. Theme: "${userPrompt}".`;

  if (deviceType === DeviceType.Smartphone) {
    detailedPrompt += " Emphasize a vertical, portrait orientation suitable for mobile phone screens. Aspect ratio should be tall, like 9:16 or 9:19.5.";
  } else { // Desktop
    detailedPrompt += " Emphasize a wide, landscape orientation suitable for computer monitors. Aspect ratio should be wide, like 16:9 or 21:9.";
  }
  detailedPrompt += " The image should be captivating and artistic.";

  try {
    const response: GenerateImageResponse = await ai.models.generateImages({
      model: IMAGE_MODEL_NAME,
      prompt: detailedPrompt,
      config: { 
        numberOfImages: 1,
        outputMimeType: 'image/jpeg' // jpeg for smaller size, or 'image/png' for potentially higher quality
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image.imageBytes) {
      return {
        imageBytes: response.generatedImages[0].image.imageBytes,
        mimeType: response.generatedImages[0].image.mimeType || 'image/jpeg',
      };
    } else {
      throw new Error('No image data received from API.');
    }
  } catch (error) {
    console.error('Gemini API error:', error);
    if (error instanceof Error) {
       // Check for common API key issues or model access issues
      if (error.message.includes('API_KEY_INVALID') || error.message.includes('PERMISSION_DENIED')) {
        throw new Error('Invalid API Key or permission denied. Please check your API key and ensure the model is enabled for your project.');
      }
      if (error.message.includes('quota')) {
        throw new Error('API quota exceeded. Please check your usage limits.');
      }
      throw new Error(`Gemini API request failed: ${error.message}`);
    }
    throw new Error('An unknown error occurred while communicating with the Gemini API.');
  }
}
