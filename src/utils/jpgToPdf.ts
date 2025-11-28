import { PDFDocument, PageSizes } from "pdf-lib";

export type PageSize = "a4" | "letter" | "fit";
export type Orientation = "portrait" | "landscape";

export interface ConversionOptions {
  pageSize: PageSize;
  orientation: Orientation;
}

export interface ConversionResult {
  blob: Blob;
  filename: string;
}

const getPageDimensions = (
  pageSize: PageSize,
  orientation: Orientation,
  imageWidth: number,
  imageHeight: number
): [number, number] => {
  let width: number;
  let height: number;

  if (pageSize === "fit") {
    // Use image dimensions directly
    width = imageWidth;
    height = imageHeight;
  } else if (pageSize === "a4") {
    [width, height] = PageSizes.A4;
  } else {
    [width, height] = PageSizes.Letter;
  }

  // Swap for landscape if needed (except for fit mode)
  if (orientation === "landscape" && pageSize !== "fit") {
    [width, height] = [height, width];
  }

  return [width, height];
};

export const convertImagesToPdf = async (
  files: File[],
  options: ConversionOptions,
  onProgress?: (progress: number) => void
): Promise<ConversionResult> => {
  const pdfDoc = await PDFDocument.create();
  const totalFiles = files.length;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);

    let image;
    const fileType = file.type.toLowerCase();

    try {
      if (fileType === "image/png") {
        image = await pdfDoc.embedPng(uint8Array);
      } else if (fileType === "image/jpeg" || fileType === "image/jpg") {
        image = await pdfDoc.embedJpg(uint8Array);
      } else {
        // Try to embed as JPEG by default for other formats
        image = await pdfDoc.embedJpg(uint8Array);
      }
    } catch (error) {
      console.error(`Failed to embed image ${file.name}:`, error);
      continue;
    }

    const imageDims = image.scale(1);
    const [pageWidth, pageHeight] = getPageDimensions(
      options.pageSize,
      options.orientation,
      imageDims.width,
      imageDims.height
    );

    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Calculate scaling to fit image within page while maintaining aspect ratio
    let scale = 1;
    if (options.pageSize !== "fit") {
      const scaleX = pageWidth / imageDims.width;
      const scaleY = pageHeight / imageDims.height;
      scale = Math.min(scaleX, scaleY, 1); // Don't upscale, only downscale if needed
    }

    const scaledWidth = imageDims.width * scale;
    const scaledHeight = imageDims.height * scale;

    // Center the image on the page
    const x = (pageWidth - scaledWidth) / 2;
    const y = (pageHeight - scaledHeight) / 2;

    page.drawImage(image, {
      x,
      y,
      width: scaledWidth,
      height: scaledHeight,
    });

    if (onProgress) {
      onProgress(Math.round(((i + 1) / totalFiles) * 100));
    }
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" });

  return {
    blob,
    filename: "converted-images.pdf",
  };
};

export const downloadPdfFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const isImageFile = (file: File): boolean => {
  const validTypes = ["image/jpeg", "image/jpg", "image/png"];
  return validTypes.includes(file.type.toLowerCase());
};
