import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VideoCompressorFAQSection = () => {
  const faqs = [
    {
      question: "How does the video compressor work?",
      answer:
        "Our video compressor uses FFmpeg, a powerful video processing library, running directly in your browser using WebAssembly technology. This means your videos are never uploaded to any server - all compression happens locally on your device, ensuring complete privacy and fast processing.",
    },
    {
      question: "What video formats are supported?",
      answer:
        "We support the most popular video formats including MP4, MOV (QuickTime), AVI, MKV (Matroska), and WebM. The compressed output is always in MP4 format, which offers the best compatibility across all devices and platforms.",
    },
    {
      question: "What's the difference between compression levels?",
      answer:
        "High Compression reduces file size by up to 70% with a slight reduction in quality - great for sharing online. Balanced (recommended) reduces size by about 50% while maintaining excellent quality. Low Compression keeps the best quality with around 30% size reduction.",
    },
    {
      question: "How long does compression take?",
      answer:
        "Processing time depends on the video size, length, and your device's processing power. A 100MB video typically takes 2-5 minutes. The first compression may take slightly longer as the video processor needs to load initially.",
    },
    {
      question: "Is there a file size limit?",
      answer:
        "Yes, currently we support videos up to 500MB. This limit ensures smooth processing in the browser. For larger files, we recommend splitting the video first or using desktop software.",
    },
    {
      question: "Will I lose video quality?",
      answer:
        "Our compression algorithms are optimized to minimize quality loss. Using the 'Low' compression setting, the difference is virtually unnoticeable. Even with 'High' compression, the video remains very watchable for most use cases like social media sharing.",
    },
    {
      question: "Is my video data safe?",
      answer:
        "Absolutely! Your videos never leave your device. All processing happens in your browser using WebAssembly technology. We don't upload, store, or have access to any of your video files. This is the most private way to compress videos online.",
    },
    {
      question: "Can I compress multiple videos at once?",
      answer:
        "Currently, we support compressing one video at a time to ensure optimal performance. After downloading your compressed video, you can immediately start compressing another one.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Frequently Asked</span>{" "}
              <span className="text-foreground">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our video compressor
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-strong rounded-2xl border-none px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VideoCompressorFAQSection;
