"use client";

import ConfirmModal from "@/components/modals/confirm-modals";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export interface IChapterActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export default function ChapterActions({
  disabled,
  courseId,
  isPublished,
}: IChapterActionsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("Course unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success("Course published");
      }
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}`);
      toast.success("Course deleted");
      router.refresh();
      router.push(`/teacher/courses`);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant={"outline"}
        size={"sm"}
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>

      <ConfirmModal onConfirm={onDelete}>
        <Button size={"sm"} disabled={isLoading}>
          <Trash className="w-4 h-4" />
        </Button>
      </ConfirmModal>
    </div>
  );
}
