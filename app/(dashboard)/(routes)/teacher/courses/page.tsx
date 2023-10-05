import { auth } from "@clerk/nextjs";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export interface ICoursesPageProps {}

export default async function CoursesPage(props: ICoursesPageProps) {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // const data = courses.map((course) => ({

  // }))

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
}
