import type { CourseLevel } from "./common";

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  previewVideo?: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  totalRatings: number;
  totalStudents: number;
  totalLessons: number;
  totalDuration: string;
  level: CourseLevel;
  language: string;
  category: string;
  isFeatured: boolean;
  isBestseller: boolean;
  isNew?: boolean;
  instructor: InstructorPreview;
  lastUpdated: string;
  tags: string[];
  curriculum?: CurriculumSection[];
  requirements?: string[];
  whatYouWillLearn?: string[];
}

export interface InstructorPreview {
  id: string;
  name: string;
  avatar: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: LessonType;
  isPreview: boolean;
  isCompleted?: boolean;
  videoUrl?: string;
}

export type LessonType = "video" | "article" | "quiz" | "assignment";
