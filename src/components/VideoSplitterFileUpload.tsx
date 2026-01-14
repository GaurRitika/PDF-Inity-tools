import { useState, useCallback, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Video, Trash2, Download, Loader2, Scissors, Clock, Info, Play, Pause, Archive, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import {
  splitVideoByTimeRange,
  splitVideoIntoEqualParts,
  splitVideoByDuration,
  downloadAsZip,
  downloadSingleFile,
  formatFileSize,
  formatTime,
  getVideoDuration,
  SplitResult
} from "@/utils/videoSplitter";

type SplitMode = 'time-range' | 'equal-parts' | 'by-duration';

const VideoSplitterFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentPart, setCurrentPart] = useState(0);
  const [totalParts, setTotalParts] = useState(0);
  const [splitResults, setSplitResults] = useState<SplitResult[]>([]);
  const [splitMode, setSplitMode] = useState<SplitMode>('time-range');
  
  // Time range mode
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  
  // Equal parts mode
  const [numberOfParts, setNumberOfParts] = useState(2);
  
  // Duration mode
  const [segmentDuration, setSegmentDuration] = useState(30);
  
  // Video preview
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const videoFile = acceptedFiles[0];
    if (videoFile) {
      if (videoFile.size > 500 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Maximum file size is 500MB",
          variant: "destructive",
        });
        return;
      }
      
      try {
        const duration = await getVideoDuration(videoFile);
        setVideoDuration(duration);
        setEndTime(duration);
        setFile(videoFile);
        setVideoUrl(URL.createObjectURL(videoFile));
        setSplitResults([]);
        setProgress(0);
        
        toast({
          title: "Video loaded",
          description: `Duration: ${formatTime(duration)}`,
        });
      } catch (error) {
        toast({
          title: "Error loading video",
          description: "Could not read video metadata",
          variant: "destructive",
        });
      }
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.mkv', '.webm']
    },
    maxFiles: 1,
    disabled: isProcessing
  });

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
      splitResults.forEach(result => URL.revokeObjectURL(result.url));
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const seekTo = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSplit = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    setProgress(0);
    setSplitResults([]);
    
    try {
      let results: SplitResult[] = [];
      
      switch (splitMode) {
        case 'time-range':
          const result = await splitVideoByTimeRange(
            file,
            startTime,
            endTime,
            (p) => setProgress(p)
          );
          results = [result];
          break;
          
        case 'equal-parts':
          results = await splitVideoIntoEqualParts(
            file,
            numberOfParts,
            (p, current, total) => {
              setProgress(p);
              setCurrentPart(current);
              setTotalParts(total);
            }
          );
          break;
          
        case 'by-duration':
          results = await splitVideoByDuration(
            file,
            segmentDuration,
            (p, current, total) => {
              setProgress(p);
              setCurrentPart(current);
              setTotalParts(total);
            }
          );
          break;
      }
      
      setSplitResults(results);
      
      toast({
        title: "Video split successfully!",
        description: `Created ${results.length} segment${results.length > 1 ? 's' : ''}`,
      });
    } catch (error) {
      console.error('Split error:', error);
      toast({
        title: "Split failed",
        description: "An error occurred while splitting the video",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      setProgress(0);
      setCurrentPart(0);
      setTotalParts(0);
    }
  };

  const handleDownloadAll = async () => {
    if (splitResults.length > 0) {
      await downloadAsZip(splitResults, `${file?.name.replace(/\.[^/.]+$/, '')}_split.zip`);
      toast({
        title: "Download started",
        description: "Your ZIP file is downloading",
      });
    }
  };

  const removeFile = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    splitResults.forEach(result => URL.revokeObjectURL(result.url));
    setFile(null);
    setVideoUrl("");
    setVideoDuration(0);
    setSplitResults([]);
    setStartTime(0);
    setEndTime(0);
  };

  const getEstimatedTime = () => {
    if (!file) return '';
    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB < 50) return '1-3 minutes';
    if (sizeMB < 200) return '3-10 minutes';
    return '10-20+ minutes';
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {!file ? (
          <div
            {...getRootProps()}
            className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer
              ${isDragActive 
                ? 'border-violet-500 bg-violet-500/10' 
                : 'border-border hover:border-violet-500/50 hover:bg-violet-500/5'
              }`}
          >
            <input {...getInputProps()} />
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                <Upload className="w-10 h-10 text-violet-500" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {isDragActive ? "Drop your video here" : "Drag & drop your video"}
                </h3>
                <p className="text-muted-foreground">
                  or click to browse • MP4, MOV, AVI, MKV, WebM • Max 500MB
                </p>
                
                {/* Processing Time Warning */}
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left max-w-md mx-auto">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-medium text-amber-600 dark:text-amber-400">Processing Time Estimates</p>
                      <ul className="text-muted-foreground mt-1 space-y-0.5">
                        <li>• Small videos (under 50MB): 1-3 minutes</li>
                        <li>• Medium videos (50-200MB): 3-10 minutes</li>
                        <li>• Large videos (200-500MB): 10-20+ minutes</li>
                      </ul>
                      <p className="text-muted-foreground mt-1 italic">Times vary based on your device's processing power</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="mt-4">
                <Scissors className="w-4 h-4 mr-2" />
                Split Video Now
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Video Preview */}
            <div className="rounded-2xl overflow-hidden bg-black/90 border border-border">
              <div className="relative aspect-video">
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className="w-full h-full object-contain"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                />
                
                {/* Play/Pause Overlay */}
                <button
                  onClick={togglePlayPause}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>
              
              {/* Timeline */}
              <div className="p-4 bg-background/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-mono text-muted-foreground w-20">
                    {formatTime(currentTime)}
                  </span>
                  <Slider
                    value={[currentTime]}
                    max={videoDuration}
                    step={0.1}
                    onValueChange={(value) => seekTo(value[0])}
                    className="flex-1"
                  />
                  <span className="text-sm font-mono text-muted-foreground w-20 text-right">
                    {formatTime(videoDuration)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* File Info */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                  <Video className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <p className="font-medium truncate max-w-[200px] md:max-w-[400px]">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatFileSize(file.size)} • {formatTime(videoDuration)}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={removeFile} disabled={isProcessing}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
            
            {splitResults.length === 0 && (
              <>
                {/* Split Mode Selection */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { mode: 'time-range' as SplitMode, label: 'Time Range', desc: 'Select start & end' },
                    { mode: 'equal-parts' as SplitMode, label: 'Equal Parts', desc: 'Split into N parts' },
                    { mode: 'by-duration' as SplitMode, label: 'By Duration', desc: 'Every X seconds' },
                  ].map(({ mode, label, desc }) => (
                    <button
                      key={mode}
                      onClick={() => setSplitMode(mode)}
                      disabled={isProcessing}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        splitMode === mode
                          ? 'border-violet-500 bg-violet-500/10'
                          : 'border-border hover:border-violet-500/50'
                      }`}
                    >
                      <p className="font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </button>
                  ))}
                </div>
                
                {/* Split Options */}
                <div className="p-6 rounded-xl bg-muted/30 border border-border space-y-4">
                  {splitMode === 'time-range' && (
                    <>
                      <h3 className="font-semibold">Select Time Range</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Start: {formatTime(startTime)}</span>
                            <span>End: {formatTime(endTime)}</span>
                          </div>
                          <Slider
                            value={[startTime, endTime]}
                            max={videoDuration}
                            step={0.1}
                            onValueChange={(values) => {
                              setStartTime(values[0]);
                              setEndTime(values[1]);
                            }}
                            className="mt-2"
                          />
                        </div>
                        <div className="flex gap-4">
                          <Button variant="outline" size="sm" onClick={() => seekTo(startTime)}>
                            Preview Start
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => seekTo(endTime)}>
                            Preview End
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Segment duration: {formatTime(endTime - startTime)}
                        </p>
                      </div>
                    </>
                  )}
                  
                  {splitMode === 'equal-parts' && (
                    <>
                      <h3 className="font-semibold">Number of Parts</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Parts: {numberOfParts}</span>
                            <span>~{formatTime(videoDuration / numberOfParts)} each</span>
                          </div>
                          <Slider
                            value={[numberOfParts]}
                            min={2}
                            max={20}
                            step={1}
                            onValueChange={(values) => setNumberOfParts(values[0])}
                            className="mt-2"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {[2, 3, 4, 5].map((n) => (
                            <Button
                              key={n}
                              variant={numberOfParts === n ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setNumberOfParts(n)}
                            >
                              {n} parts
                            </Button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  
                  {splitMode === 'by-duration' && (
                    <>
                      <h3 className="font-semibold">Segment Duration (seconds)</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Every {segmentDuration} seconds</span>
                            <span>~{Math.ceil(videoDuration / segmentDuration)} segments</span>
                          </div>
                          <Slider
                            value={[segmentDuration]}
                            min={5}
                            max={300}
                            step={5}
                            onValueChange={(values) => setSegmentDuration(values[0])}
                            className="mt-2"
                          />
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {[15, 30, 60, 120].map((n) => (
                            <Button
                              key={n}
                              variant={segmentDuration === n ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setSegmentDuration(n)}
                            >
                              {n}s
                            </Button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Time Estimate Warning */}
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-muted-foreground">
                      <p>
                        <span className="font-medium text-blue-600 dark:text-blue-400">Estimated time:</span>{' '}
                        {getEstimatedTime()} for {formatFileSize(file.size)} video
                      </p>
                      <p className="mt-1">
                        Processing happens entirely on your device for privacy. Larger files take longer.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Split Button */}
                <Button
                  onClick={handleSplit}
                  disabled={isProcessing}
                  className="w-full h-14 text-lg bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {totalParts > 0 
                        ? `Splitting part ${currentPart} of ${totalParts}... ${progress}%`
                        : `Splitting... ${progress}%`
                      }
                    </>
                  ) : (
                    <>
                      <Scissors className="w-5 h-5 mr-2" />
                      Split Video Now
                    </>
                  )}
                </Button>
                
                {isProcessing && (
                  <Progress value={progress} className="h-2" />
                )}
              </>
            )}
            
            {/* Results */}
            {splitResults.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Split Complete! ({splitResults.length} segment{splitResults.length > 1 ? 's' : ''})
                  </h3>
                  {splitResults.length > 1 && (
                    <Button onClick={handleDownloadAll} variant="outline">
                      <Archive className="w-4 h-4 mr-2" />
                      Download All as ZIP
                    </Button>
                  )}
                </div>
                
                <div className="space-y-3">
                  {splitResults.map((result, index) => (
                    <div
                      key={result.segment.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-violet-500">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{result.filename}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatTime(result.segment.startTime)} → {formatTime(result.segment.endTime)} 
                            ({formatTime(result.segment.duration)})
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() => downloadSingleFile(result)}
                        variant="outline"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button
                  onClick={removeFile}
                  variant="outline"
                  className="w-full"
                >
                  Split Another Video
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSplitterFileUpload;
