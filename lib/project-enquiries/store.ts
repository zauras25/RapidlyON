import type {
  ProjectEnquiry,
} from "./types";

const enquiries: ProjectEnquiry[] = [];

export function createProjectEnquiry(
  data: Omit<
    ProjectEnquiry,
    "id" | "status" | "createdAt"
  >,
): ProjectEnquiry {
  const enquiry: ProjectEnquiry = {
    ...data,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: new Date().toISOString(),
  };

  enquiries.push(enquiry);

  return enquiry;
}

export function getProjectEnquiries(): ProjectEnquiry[] {
  return [...enquiries];
}

export function getProjectEnquiryById(
  id: string,
): ProjectEnquiry | null {
  return (
    enquiries.find(
      (enquiry) => enquiry.id === id,
    ) ?? null
  );
}

export function updateProjectEnquiryStatus(
  id: string,
  status: ProjectEnquiry["status"],
): ProjectEnquiry | null {
  const enquiry = enquiries.find(
    (item) => item.id === id,
  );

  if (!enquiry) {
    return null;
  }

  enquiry.status = status;

  return enquiry;
}
