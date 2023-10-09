import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

export interface IInfoCardProps {
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
  numberOfItems: number;
}

export default function InfoCard({
  variant,
  icon: Icon,
  label,
  numberOfItems,
}: IInfoCardProps) {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
}
