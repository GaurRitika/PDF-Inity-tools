import { PDFDocument, PageSizes } from 'pdf-lib';

export type PageSize = 'a4' | 'letter' | 'fit';
export type Orientation = 'portrait' | 'landscape';

export interface ConversionOptions {
  pageSize: PageSize;
  orientation: Orientation;
}

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const isImageFile = (file: File): boolean => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  return validTypes.includes(file.type);
};

const getPageDimensions = (
  pageSize: PageSize,
  orientation: Orientation,
  imageWidth: number,
  imageHeight: number
): [number, number] => {
  if (pageSize === 'fit') {
    return orientation === 'portrait'
      ? [imageWidth, imageHeight]
      : [imageHeight, imageWidth];
  }

  const sizes = {
    a4: PageSizes.A4,
    letter: PageSizes.Letter,
  };

  const [width, height] = sizes[pageSize];
  return orientation === 'portrait' ? [width, height] : [height, width];
};

export const convertImagesToPdf = async (
  images: File[],
  options: ConversionOptions,
  onProgress?: (progress: number) => void
): Promise<Uint8Array> => {
  const pdfDoc = await PDFDocument.create();
  const totalImages = images.length;

  for (let i = 0; i < images.length; i++) {
    const imageFile = images[i];
    const imageBytes = await imageFile.arrayBuffer();
    
    let image;
    if (imageFile.type === 'image/png') {
      image = await pdfDoc.embedPng(imageBytes);
    } else {
      image = await pdfDoc.embedJpg(imageBytes);
    }

    const imgWidth = image.width;
    const imgHeight = image.height;

    const [pageWidth, pageHeight] = getPageDimensions(
      options.pageSize,
      options.orientation,
      imgWidth,
      imgHeight
    );

    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Calculate scaling to fit image within page while maintaining aspect ratio
    let drawWidth = imgWidth;
    let drawHeight = imgHeight;

    if (options.pageSize !== 'fit') {
      const scaleX = pageWidth / imgWidth;
      const scaleY = pageHeight / imgHeight;
      const scale = Math.min(scaleX, scaleY);
      drawWidth = imgWidth * scale;
      drawHeight = imgHeight * scale;
    }

    // Center the image on the page
    const x = (pageWidth - drawWidth) / 2;
    const y = (pageHeight - drawHeight) / 2;

    page.drawImage(image, {
      x,
      y,
      width: drawWidth,
      height: drawHeight,
    });

    if (onProgress) {
      onProgress(Math.round(((i + 1) / totalImages) * 100));
    }
  }

  const pdfBytes = await pdfDoc.save();
  return new Uint8Array(pdfBytes);
};

export const downloadPdfFile = (pdfBytes: Uint8Array, filename: string): void => {
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
