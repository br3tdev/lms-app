"use client";

import qs from "query-string";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { IconType } from "react-icons";

export interface ICategoryItemProps {
  label: string;
  icon: IconType;
  value?: string;
}

export default function CategoryItem({
  label,
  icon: Icon,
  value,
}: ICategoryItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: isSelected ? null : value,
          title: currentTitle,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <button
      className={cn(
        "flex items-center gap-x-1 py-2 px-3 text-sm border border-slate-200 hover:border-slate-700 rounded-full transition",
        isSelected && "bg-sky-200/20 border-sky-700 text-sky-800"
      )}
      type="button"
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
}
