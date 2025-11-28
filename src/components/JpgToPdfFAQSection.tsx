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
      "Yes! Our JPG to PDF converter is 100% free to use with no hidden costs, watermarks, or signup required. Convert as many images as you need.",
  },
  {
    question: "Can I convert multiple images to one PDF?",
    answer:
      "Absolutely! You can upload multiple JPG, JPEG, or PNG images and combine them into a single PDF document. You can also reorder the images before conversion.",
  },
  {
    question: "Will the image quality be preserved?",
    answer:
      "Yes, our converter maintains the original image quality. Images are embedded in the PDF at their full resolution without any compression or quality loss.",
  },
  {
    question: "Are my files safe?",
    answer:
      "Your files are completely safe. All processing happens in your browser - your images never leave your device or get uploaded to any server.",
  },
  {
    question: "What image formats are supported?",
    answer:
      "We support JPG, JPEG, and PNG image formats. These cover the most common image types used for documents, photos, and graphics.",
  },
  {
    question: "Can I choose the page size for my PDF?",
    answer:
      "Yes! You can select from A4, Letter, or 'Fit to Image' page sizes. You can also choose between portrait and landscape orientation.",
  },
];

const JpgToPdfFAQSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
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
