import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ICoursesPageProps {}

export default function CoursesPage(props: ICoursesPageProps) {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button>New Courses</Button>
      </Link>
    </div>
  );
}
