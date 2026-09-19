import Database from "better-sqlite3";
import path from "path";

import type {
  DatabaseProjectEnquiry,
  DatabaseProjectEnquiryStatus,
} from "./types";

const databasePath = path.join(
  process.cwd(),
  "data",
  "rapidlyon.db",
);

const database = new Database(databasePath);

database.pragma("journal_mode = WAL");

database.exec(`
  CREATE TABLE IF NOT EXISTS project_enquiries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL DEFAULT '',
    project_type TEXT NOT NULL,
    stage TEXT NOT NULL,
    services TEXT NOT NULL,
    budget TEXT NOT NULL,
    timeline TEXT NOT NULL,
    details TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new',
    created_at TEXT NOT NULL
  );
`);

export type DatabaseProvider = {
  getProjectEnquiries(): Promise<
    DatabaseProjectEnquiry[]
  >;

  getProjectEnquiryById(
    id: string,
  ): Promise<DatabaseProjectEnquiry | null>;

  createProjectEnquiry(
    data: Omit<
      DatabaseProjectEnquiry,
      "id" | "createdAt"
    >,
  ): Promise<DatabaseProjectEnquiry>;

  updateProjectEnquiryStatus(
    id: string,
    status: DatabaseProjectEnquiryStatus,
  ): Promise<DatabaseProjectEnquiry | null>;
};

type DatabaseRow = {
  id: string;
  name: string;
  email: string;
  company: string;
  project_type: string;
  stage: string;
  services: string;
  budget: string;
  timeline: string;
  details: string;
  status: DatabaseProjectEnquiryStatus;
  created_at: string;
};

function mapRow(
  row: DatabaseRow,
): DatabaseProjectEnquiry {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company,
    projectType: row.project_type,
    stage: row.stage,
    services: JSON.parse(row.services) as string[],
    budget: row.budget,
    timeline: row.timeline,
    details: row.details,
    status: row.status,
    createdAt: row.created_at,
  };
}

export const localDatabaseProvider: DatabaseProvider = {
  async getProjectEnquiries() {
    const rows = database
      .prepare(
        `
          SELECT *
          FROM project_enquiries
          ORDER BY created_at DESC
        `,
      )
      .all() as DatabaseRow[];

    return rows.map(mapRow);
  },

  async getProjectEnquiryById(id) {
    const row = database
      .prepare(
        `
          SELECT *
          FROM project_enquiries
          WHERE id = ?
        `,
      )
      .get(id) as DatabaseRow | undefined;

    return row ? mapRow(row) : null;
  },

  async createProjectEnquiry(data) {
    const enquiry: DatabaseProjectEnquiry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    };

    database
      .prepare(
        `
          INSERT INTO project_enquiries (
            id,
            name,
            email,
            company,
            project_type,
            stage,
            services,
            budget,
            timeline,
            details,
            status,
            created_at
          )
          VALUES (
            @id,
            @name,
            @email,
            @company,
            @projectType,
            @stage,
            @services,
            @budget,
            @timeline,
            @details,
            @status,
            @createdAt
          )
        `,
      )
      .run({
        id: enquiry.id,
        name: enquiry.name,
        email: enquiry.email,
        company: enquiry.company,
        projectType: enquiry.projectType,
        stage: enquiry.stage,
        services: JSON.stringify(enquiry.services),
        budget: enquiry.budget,
        timeline: enquiry.timeline,
        details: enquiry.details,
        status: enquiry.status,
        createdAt: enquiry.createdAt,
      });

    return enquiry;
  },

  async updateProjectEnquiryStatus(
    id,
    status,
  ) {
    const result = database
      .prepare(
        `
          UPDATE project_enquiries
          SET status = ?
          WHERE id = ?
        `,
      )
      .run(status, id);

    if (result.changes === 0) {
      return null;
    }

    const row = database
      .prepare(
        `
          SELECT *
          FROM project_enquiries
          WHERE id = ?
        `,
      )
      .get(id) as DatabaseRow | undefined;

    return row ? mapRow(row) : null;
  },
};
