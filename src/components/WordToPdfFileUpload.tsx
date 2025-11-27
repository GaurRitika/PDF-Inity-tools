import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, Upload, AlertCircle } from "lucide-react";

interface WordToPdfFileUploadProps {
  onFileSelected: (files: File[]) => void;
  disabled?: boolean;
}

const WordToPdfFileUpload = ({ onFileSelected, disabled }: WordToPdfFileUploadProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelected(acceptedFiles);
    }
  }, [onFileSelected]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: {
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    disabled,
    multiple: true
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative overflow-hidden rounded-2xl border-2 border-dashed 
          transition-all duration-300 cursor-pointer
          ${isDragActive 
            ? 'border-primary bg-primary/5 scale-[1.02]' 
            : 'border-border hover:border-primary/50 hover:bg-accent/50'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <input {...getInputProps()} />
        
        <div className="relative p-8 md:p-12 text-center">
          <div className={`
            w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center
            transition-all duration-300
            ${isDragActive 
              ? 'bg-primary text-primary-foreground scale-110' 
              : 'bg-primary/10 text-primary'
            }
          `}>
            {isDragActive ? (
              <FileText className="w-8 h-8 animate-pulse" />
            ) : (
              <Upload className="w-8 h-8" />
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {isDragActive ? 'Drop your Word files here' : 'Upload Word Documents'}
          </h3>
          
          <p className="text-muted-foreground mb-4">
            Drag & drop your DOC or DOCX files here, or click to browse
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
            <FileText className="w-4 h-4" />
            <span>DOC, DOCX supported • Max 50MB</span>
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-4">
        Files convert securely and are never stored.
      </p>
      
      {fileRejections.length > 0 && (
        <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <div className="flex items-center gap-2 text-destructive">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Some files were rejected</span>
          </div>
          <ul className="mt-2 text-sm text-muted-foreground">
            {fileRejections.map(({ file, errors }) => (
              <li key={file.name}>
                {file.name}: {errors.map(e => e.message).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordToPdfFileUpload;
