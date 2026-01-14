import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VideoSplitterFAQSection = () => {
  const faqs = [
    {
      question: "What is video splitting?",
      answer: "Video splitting is the process of dividing a single video file into multiple smaller segments. This is useful for creating clips for social media, breaking down long lectures, extracting specific scenes, or preparing content for platforms with duration limits."
    },
    {
      question: "When should I split videos?",
      answer: "Split videos when you need to: create short clips for Instagram Reels, TikTok, or YouTube Shorts; break down long lectures or tutorials into manageable chapters; extract specific highlights or scenes; share portions of a video without sending the entire file; or meet platform-specific duration requirements."
    },
    {
      question: "Why is browser-based processing safer?",
      answer: "Browser-based processing means your video files never leave your device. Unlike traditional online tools that upload your videos to remote servers, our tool processes everything locally using WebAssembly technology. This ensures complete privacy, faster processing for smaller files, and protection from data breaches or unauthorized access."
    },
    {
      question: "What video formats are supported?",
      answer: "We support all major video formats including MP4, MOV, AVI, MKV, and WebM. The output files are always in MP4 format for maximum compatibility across all devices and platforms."
    },
    {
      question: "What are the different splitting modes?",
      answer: "We offer three splitting modes: Time Range (select specific start and end times to extract a clip), Equal Parts (divide your video into a specific number of equal segments), and By Duration (split into segments of a specific length, like every 30 seconds)."
    },
    {
      question: "Is there a watermark on split videos?",
      answer: "No, absolutely not. All videos split using our tool are completely watermark-free. We believe in providing professional-quality output without any branding or restrictions."
    },
    {
      question: "What's the maximum file size supported?",
      answer: "You can process videos up to 500MB in size. For larger files, we recommend using desktop video editing software for better performance."
    },
    {
      question: "How long does splitting take?",
      answer: "Processing time depends on your video size and device capabilities. Small videos (under 50MB) typically take 1-3 minutes, medium videos (50-200MB) take 3-10 minutes, and larger videos (200-500MB) may take 10-20+ minutes. We use stream copying when possible for faster processing."
    },
    {
      question: "Can I preview the video before splitting?",
      answer: "Yes! Our tool includes a full video preview with playback controls. You can play, pause, and seek through your video to find the exact points where you want to split. For time range mode, you can preview both start and end points."
    },
    {
      question: "How do I download multiple split segments?",
      answer: "After splitting, you can download each segment individually, or use the 'Download All as ZIP' button to get all segments in a single compressed file. This is especially convenient when you've split your video into many parts."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* SEO Content */}
        <div className="mt-12 p-6 rounded-2xl bg-background border border-border">
          <h3 className="text-xl font-semibold mb-4">About Our Free Video Splitter</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Our online video splitter is designed for content creators, educators, marketers, 
              and anyone who needs to divide videos into smaller segments quickly and securely.
            </p>
            <p>
              <strong className="text-foreground">Perfect for Social Media:</strong> Create 
              bite-sized content for Instagram Reels, TikTok, YouTube Shorts, and other platforms 
              that favor short-form video content.
            </p>
            <p>
              <strong className="text-foreground">Educational Content:</strong> Break down 
              lengthy lectures, webinars, or tutorials into digestible chapters that are easier 
              for students to consume and review.
            </p>
            <p>
              <strong className="text-foreground">Privacy-First Approach:</strong> Unlike 
              traditional video editing tools that require uploading to cloud servers, our 
              browser-based solution processes everything on your device. Your videos never 
              leave your computer, ensuring complete privacy and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSplitterFAQSection;
