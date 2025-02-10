import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h3 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h3>
      <Separator />
    </div>
  );
}

export default SectionTitle;
