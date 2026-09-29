import type { Review, Testimonial } from "@/types/review";

export const reviews: Review[] = [
  {
    id: "r1",
    courseId: "1",
    userId: "u1",
    userName: "Rahim Uddin",
    userAvatar: "/images/users/user-1.jpg",
    rating: 5,
    title: "সেরা ওয়েব ডেভেলপমেন্ট কোর্স!",
    comment:
      "এত সুন্দর করে বাংলায় ওয়েব ডেভেলপমেন্ট শেখানো হয়েছে, আমি সত্যিই মুগ্ধ। কোর্স শেষ করে আমি একটি জব পেয়েছি।",
    createdAt: "2024-03-10",
    helpful: 42,
    isVerifiedPurchase: true,
  },
  {
    id: "r2",
    courseId: "1",
    userId: "u2",
    userName: "Fatema Akter",
    userAvatar: "/images/users/user-2.jpg",
    rating: 5,
    title: "Beginner দের জন্য পারফেক্ট",
    comment:
      "আমি কোন প্রোগ্রামিং জানতাম না। এই কোর্স থেকে শুরু করে এখন আমি নিজের ওয়েবসাইট বানাতে পারি।",
    createdAt: "2024-02-25",
    helpful: 35,
    isVerifiedPurchase: true,
  },
  {
    id: "r3",
    courseId: "1",
    userId: "u3",
    userName: "Kamal Hossain",
    userAvatar: "/images/users/user-3.jpg",
    rating: 4,
    comment:
      "ভালো কোর্স, তবে কিছু advanced topic আরেকটু বিস্তারিত হলে ভালো হতো। Overall satisfied।",
    createdAt: "2024-01-18",
    helpful: 12,
    isVerifiedPurchase: true,
  },
  {
    id: "r4",
    courseId: "2",
    userId: "u4",
    userName: "Nusrat Jahan",
    userAvatar: "/images/users/user-4.jpg",
    rating: 5,
    title: "Next.js শেখার সেরা রিসোর্স",
    comment:
      "Server Components, App Router — সব কিছু খুব ক্লিয়ারভাবে explain করা হয়েছে। Must-do course!",
    createdAt: "2024-04-05",
    helpful: 28,
    isVerifiedPurchase: true,
  },
  {
    id: "r5",
    courseId: "3",
    userId: "u5",
    userName: "Tanvir Ahmed",
    userAvatar: "/images/users/user-5.jpg",
    rating: 5,
    title: "Data Science বাংলায়!",
    comment:
      "বাংলায় এত ভালো Data Science কোর্স আগে পাইনি। প্র্যাক্টিক্যাল প্রজেক্ট গুলো অসাধারণ।",
    createdAt: "2024-03-02",
    helpful: 56,
    isVerifiedPurchase: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    userName: "Rahim Uddin",
    userAvatar: "/images/users/user-1.jpg",
    userTitle: "Junior Web Developer at TechCorp",
    courseName: "Complete Web Development Bootcamp",
    rating: 5,
    comment:
      "ByteSpace থেকে কোর্স করে আমি আমার স্বপ্নের ক্যারিয়ার শুরু করতে পেরেছি। শূন্য থেকে শুরু করে এখন আমি একজন ওয়েব ডেভেলপার।",
  },
  {
    id: "t2",
    userName: "Fatema Akter",
    userAvatar: "/images/users/user-2.jpg",
    userTitle: "Freelance Designer",
    courseName: "UI/UX Design Masterclass",
    rating: 5,
    comment:
      "Figma কোর্সটি আমার ফ্রিল্যান্সিং ক্যারিয়ার বদলে দিয়েছে। এখন আমি international clients এর সাথে কাজ করছি।",
  },
  {
    id: "t3",
    userName: "Kamal Hossain",
    userAvatar: "/images/users/user-3.jpg",
    userTitle: "Data Analyst at DataDrive",
    courseName: "Python for Data Science",
    rating: 5,
    comment:
      "Data Science কোর্সটি আমার ক্যারিয়ার সুইচে সাহায্য করেছে। প্র্যাক্টিক্যাল অ্যাপ্রোচ সত্যিই কার্যকর।",
  },
  {
    id: "t4",
    userName: "Nusrat Jahan",
    userAvatar: "/images/users/user-4.jpg",
    userTitle: "Mobile App Developer",
    courseName: "Flutter Mobile App Development",
    rating: 5,
    comment:
      "Flutter কোর্স থেকে শিখে আমি নিজের অ্যাপ Google Play Store এ পাবলিশ করেছি। ByteSpace কে ধন্যবাদ!",
  },
];
