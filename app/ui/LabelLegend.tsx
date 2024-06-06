import { cn } from "../../@/lib/utils";

interface LabelLegendInterface {
  label: string;
  className?: string;
}
function LabelLegend({ label, className }: LabelLegendInterface) {
  return (
    <label
      className={cn(
        "flex min-h-6 min-w-[30vw] max-w-[80vw] w-fit items-center justify-center rounded-full border px-3 py-1 text-lg font-normal",
        className,
      )}
    >
      {label}
    </label>
  );
}

export default LabelLegend;
