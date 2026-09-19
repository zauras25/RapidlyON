import { NextResponse } from "next/server";

import {
  getProjectEnquiryById,
  updateProjectEnquiryStatus,
} from "@/lib/db";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

type UpdateStatusBody = {
  status?: unknown;
};

const allowedStatuses = [
  "new",
  "reviewing",
  "contacted",
  "closed",
] as const;

type ProjectEnquiryStatus =
  (typeof allowedStatuses)[number];

function isValidStatus(
  value: unknown,
): value is ProjectEnquiryStatus {
  return (
    typeof value === "string" &&
    allowedStatuses.includes(
      value as ProjectEnquiryStatus,
    )
  );
}

export async function GET(
  _request: Request,
  { params }: RouteContext,
) {
  try {
    const { id } = await params;

    const enquiry =
      await getProjectEnquiryById(id);

    if (!enquiry) {
      return NextResponse.json(
        {
          error: "Project enquiry not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      enquiry,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to load the project enquiry.",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: RouteContext,
) {
  try {
    const { id } = await params;

    const body =
      (await request.json()) as UpdateStatusBody;

    if (!isValidStatus(body.status)) {
      return NextResponse.json(
        {
          error: "Invalid enquiry status.",
        },
        { status: 400 },
      );
    }

    const enquiry =
      await updateProjectEnquiryStatus(
        id,
        body.status,
      );

    if (!enquiry) {
      return NextResponse.json(
        {
          error: "Project enquiry not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      enquiry,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to update the project enquiry.",
      },
      { status: 500 },
    );
  }
}
