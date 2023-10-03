"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.snow.css";

export interface IEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: IEditorProps) {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
      }),
    []
  );

  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
}
