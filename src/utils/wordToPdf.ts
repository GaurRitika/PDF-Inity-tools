import mammoth from 'mammoth';
import html2pdf from 'html2pdf.js';

export interface ConversionResult {
  blob: Blob;
  filename: string;
}

export const convertWordToPdf = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<ConversionResult> => {
  try {
    onProgress?.(10);
    
    // Read the file as ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    onProgress?.(30);
    
    // Convert DOCX to HTML using mammoth
    const result = await mammoth.convertToHtml({ arrayBuffer });
    const html = result.value;
    onProgress?.(60);
    
    // Create a styled HTML document
    const styledHtml = `
      <div style="
        font-family: 'Times New Roman', Times, serif;
        font-size: 12pt;
        line-height: 1.5;
        padding: 20px;
        max-width: 100%;
        word-wrap: break-word;
      ">
        ${html}
      </div>
    `;
    
    // Create a temporary container
    const container = document.createElement('div');
    container.innerHTML = styledHtml;
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '210mm'; // A4 width
    document.body.appendChild(container);
    
    onProgress?.(80);
    
    // Convert HTML to PDF
    const opt = {
      margin: [10, 10, 10, 10] as [number, number, number, number],
      filename: file.name.replace(/\.(docx?|DOCX?)$/, '.pdf'),
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm' as const, 
        format: 'a4' as const, 
        orientation: 'portrait' as const
      }
    };
    
    const pdfBlob = await html2pdf().set(opt).from(container).outputPdf('blob');
    
    // Clean up
    document.body.removeChild(container);
    
    onProgress?.(100);
    
    return {
      blob: pdfBlob,
      filename: opt.filename
    };
  } catch (error) {
    console.error('Error converting Word to PDF:', error);
    throw new Error('Failed to convert Word document to PDF');
  }
};

export const downloadPdfFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

export const isWordFile = (file: File): boolean => {
  const validTypes = [
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  const validExtensions = ['.doc', '.docx'];
  
  const hasValidType = validTypes.includes(file.type);
  const hasValidExtension = validExtensions.some(ext => 
    file.name.toLowerCase().endsWith(ext)
  );
  
  return hasValidType || hasValidExtension;
};
