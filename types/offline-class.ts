export interface OfflineClass {
  id: string;
  title: string;
  description: string;
  schedule: string;
  duration: string;
  location: string;
  price: string;
  category: 'Digital Marketing' | 'Web Development';
  startDate: string;
  batchSize: number;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  message: string;
}