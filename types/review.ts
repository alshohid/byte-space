export interface Review {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  title?: string;
  comment: string;
  createdAt: string;
  helpful: number;
  isVerifiedPurchase?: boolean;
}

export interface Testimonial {
  id: string;
  userName: string;
  userAvatar: string;
  userTitle: string;
  courseName?: string;
  rating: number;
  comment: string;
}
