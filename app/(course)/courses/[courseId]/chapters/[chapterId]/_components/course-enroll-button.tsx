"use client";

import { Button } from "@/components/ui/button";
import formatPrice from "@/lib/format";

export interface ICourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export default function CourseEnrollButton({
  price,
  courseId,
}: ICourseEnrollButtonProps) {
  return (
    <Button className="w-full md:w-auto" size={"sm"}>
      Enroll for {formatPrice(price)}
    </Button>
  );
}
