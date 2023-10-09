import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

export interface ICourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

export default function CourseProgress({
  value,
  variant,
  size,
}: ICourseProgressProps) {
  return (
    <div>
      <Progress value={value} className="h-2" variant={variant} />
      <p
        className={cn(
          "mt-2 font-medium text-sky-700",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
}
