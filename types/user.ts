export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  enrolledCourses?: string[];
  joinedDate: string;
}

export type UserRole = "student" | "instructor" | "admin";
