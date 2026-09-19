export type DatabaseProjectEnquiryStatus =
  | "new"
  | "reviewing"
  | "contacted"
  | "closed";

export type DatabaseProjectEnquiry = {
  id: string;
  name: string;
  email: string;
  company: string;
  projectType: string;
  stage: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
  status: DatabaseProjectEnquiryStatus;
  createdAt: string;
};
