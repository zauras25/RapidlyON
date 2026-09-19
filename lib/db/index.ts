import { localDatabaseProvider } from "./provider";

import type {
  DatabaseProjectEnquiryStatus,
} from "./types";

export type {
  DatabaseProjectEnquiry,
  DatabaseProjectEnquiryStatus,
} from "./types";

export type {
  DatabaseProvider,
} from "./provider";

export { localDatabaseProvider };

export async function getProjectEnquiries() {
  return localDatabaseProvider.getProjectEnquiries();
}

export async function getProjectEnquiryById(
  id: string,
) {
  return localDatabaseProvider.getProjectEnquiryById(
    id,
  );
}

export async function createProjectEnquiry(
  data: {
    name: string;
    email: string;
    company: string;
    projectType: string;
    stage: string;
    services: string[];
    budget: string;
    timeline: string;
    details: string;
  },
) {
  return localDatabaseProvider.createProjectEnquiry({
    ...data,
    status: "new",
  });
}

export async function updateProjectEnquiryStatus(
  id: string,
  status: DatabaseProjectEnquiryStatus,
) {
  return localDatabaseProvider.updateProjectEnquiryStatus(
    id,
    status,
  );
}
