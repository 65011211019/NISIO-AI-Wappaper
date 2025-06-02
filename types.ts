
export enum DeviceType {
  Smartphone = 'smartphone',
  Desktop = 'desktop',
}

export interface GeneratedImage {
  imageBytes: string; // Base64 encoded image string
  mimeType: string; // e.g., 'image/jpeg'
}
