import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

const CoursesPage = async () => {
  const { userId } = await auth();
  const courses = await getCourses();
  const userProgress = await getUserProgress();

  if (!userId) {
    return redirect("/");
  }

  if (!courses) {
    return redirect("/");
  }

  return (
    <div className="h-full max-w-[912px] px-3 mx-auto" suppressHydrationWarning>
      <h1 className="text-2xl font-bold text-neutral-700">Cursos</h1>
      <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
