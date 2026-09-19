import { NextResponse } from "next/server";

import {
  createProjectEnquiry,
  getProjectEnquiries,
} from "@/lib/db";

type CreateProjectEnquiryBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  stage?: unknown;
  services?: unknown;
  budget?: unknown;
  timeline?: unknown;
  details?: unknown;
};

type ValidProjectEnquiryBody = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  stage: string;
  services: string[];
  budget: string;
  timeline: string;
  details: string;
};

function isValidBody(
  body: CreateProjectEnquiryBody,
): body is ValidProjectEnquiryBody {
  return (
    typeof body.name === "string" &&
    typeof body.email === "string" &&
    typeof body.company === "string" &&
    typeof body.projectType === "string" &&
    typeof body.stage === "string" &&
    Array.isArray(body.services) &&
    body.services.every(
      (service) => typeof service === "string",
    ) &&
    typeof body.budget === "string" &&
    typeof body.timeline === "string" &&
    typeof body.details === "string"
  );
}

export async function GET() {
  try {
    const enquiries = await getProjectEnquiries();

    return NextResponse.json({ enquiries });
  } catch {
    return NextResponse.json(
      { error: "Unable to load project enquiries." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body =
      (await request.json()) as CreateProjectEnquiryBody;

    if (!isValidBody(body)) {
      return NextResponse.json(
        { error: "Invalid project enquiry data." },
        { status: 400 },
      );
    }

    const enquiry = await createProjectEnquiry(body);

    return NextResponse.json(
      {
        success: true,
        enquiry,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to create project enquiry." },
      { status: 500 },
    );
  }
}
