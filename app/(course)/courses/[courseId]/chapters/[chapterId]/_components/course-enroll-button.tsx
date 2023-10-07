"use client";

import { Button } from "@/components/ui/button";
import formatPrice from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export interface ICourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export default function CourseEnrollButton({
  price,
  courseId,
}: ICourseEnrollButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(`/api/courses/${courseId}/checkout`);

      window.location.assign(response.data.url);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button className="w-full md:w-auto" size={"sm"} onClick={onClick}>
      Enroll for {formatPrice(price)}
    </Button>
  );
}
