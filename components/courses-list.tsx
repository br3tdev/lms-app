import { Category, Course } from "@prisma/client";
import Image from "next/image";
import CourseCard from "./course-card";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: {
    id: string;
  }[];
  progress: number | null;
};

export interface ICoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export default function CoursesList({ items }: ICoursesListProps) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            progress={item.progress}
            category={item?.category?.name!}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="flex flex-col items-center text-center text-sm text-muted-foreground mt-10">
          <Image
            src={
              "/Achievement_and_Success_achievement,_accomplishment,_flag,_clothing,_clothes,_target,_goal.svg"
            }
            alt="No_courses_found"
            width={400}
            height={400}
          />
          No courses found, go to Browse.
        </div>
      )}
    </div>
  );
}
