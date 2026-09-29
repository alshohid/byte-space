import type { SocialLinks } from "./common";

export interface Creator {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  coverImage?: string;
  title: string;
  bio: string;
  shortBio?: string;
  totalStudents: number;
  totalCourses: number;
  totalReviews: number;
  rating: number;
  socialLinks: SocialLinks;
  expertise: string[];
  joinedDate: string;
}
