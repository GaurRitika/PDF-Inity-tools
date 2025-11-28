import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is JPG to PDF conversion free?",
    answer:
      "Yes, our JPG to PDF converter is completely free to use. There are no hidden fees, subscriptions, or limits on the number of conversions you can perform.",
  },
  {
    question: "Can I convert multiple images?",
    answer:
      "Absolutely! You can upload multiple JPG, JPEG, or PNG images and combine them all into a single PDF document. Perfect for creating photo albums, portfolios, or document collections.",
  },
  {
    question: "Will the image quality be preserved?",
    answer:
      "Yes, we preserve the original quality of your images when converting to PDF. The images are embedded at their full resolution to ensure crisp, clear output.",
  },
  {
    question: "Are my files safe?",
    answer:
      "Completely safe. All conversion happens directly in your browser using client-side processing. Your files are never uploaded to our servers or stored anywhere, ensuring complete privacy and security.",
  },
  {
    question: "What page sizes are available?",
    answer:
      "We offer three page size options: A4 (standard document size), Letter (US standard), and Fit to Image (automatically sizes the page to match your image dimensions).",
  },
  {
    question: "Can I choose portrait or landscape orientation?",
    answer:
      "Yes! You can select either portrait or landscape orientation for your PDF pages. This is especially useful when working with images of different orientations.",
  },
];

const JpgToPdfFAQSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
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
      </div>
    </section>
  );
};

export default JpgToPdfFAQSection;
