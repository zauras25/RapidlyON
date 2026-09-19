export type ProjectEnquiry = {
  id: string;
  name: string;
  email: string;
  projectType: string;
  stage: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
  status:
    | "new"
    | "reviewing"
    | "contacted"
    | "closed";
  createdAt: string;
};
