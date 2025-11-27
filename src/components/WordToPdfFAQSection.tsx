import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WordToPdfFAQSection = () => {
  const faqs = [
    {
      question: "Is Word to PDF conversion free?",
      answer: "Yes, our Word to PDF converter is completely free to use. There are no hidden charges, no subscription required, and no limits on how many files you can convert. Convert unlimited DOC and DOCX files to PDF without any cost."
    },
    {
      question: "Will the formatting stay the same after conversion?",
      answer: "Our converter preserves the original formatting of your Word document as much as possible, including fonts, images, tables, and layouts. The resulting PDF will look professional and maintain the structure of your original document."
    },
    {
      question: "Is my file secure during conversion?",
      answer: "Absolutely! Your files are processed entirely in your browser using client-side technology. This means your documents never leave your device and are never uploaded to any server. Your data remains 100% private and secure."
    },
    {
      question: "Can I convert both DOC and DOCX files?",
      answer: "Yes, our converter supports both DOC (older Word format) and DOCX (modern Word format) files. Simply upload any Word document and it will be converted to a high-quality PDF instantly."
    },
    {
      question: "How long does conversion take?",
      answer: "Conversion is typically completed within seconds, depending on the size and complexity of your document. Most standard documents convert in under 5 seconds. Larger files with many images may take slightly longer."
    },
    {
      question: "Can I convert multiple Word files at once?",
      answer: "Yes, you can upload and convert multiple Word files simultaneously. Each file will be converted to its own PDF, and you can download them individually. This batch conversion feature saves time when you have multiple documents to convert."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Everything you need to know about converting Word documents to PDF
        </p>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-accent/50"
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <span className="font-medium text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WordToPdfFAQSection;
