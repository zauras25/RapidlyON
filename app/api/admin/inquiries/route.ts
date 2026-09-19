import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const allowedStatuses = [
  "NEW",
  "IN_PROGRESS",
  "REVIEW",
  "COMPLETED",
] as const;

type ProjectStatus = (typeof allowedStatuses)[number];

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      projects,
    });
  } catch (error) {
    console.error("Admin inquiries GET error:", error);

    return NextResponse.json(
      { message: "Unable to load inquiries." },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();

    const projectId =
      typeof body?.projectId === "string" ? body.projectId.trim() : "";

    const status = body?.status as ProjectStatus;

    if (!projectId) {
      return NextResponse.json(
        { message: "Project ID is required." },
        { status: 400 },
      );
    }

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        { message: "Invalid project status." },
        { status: 400 },
      );
    }

    const existingProject = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!existingProject) {
      return NextResponse.json(
        { message: "Project inquiry not found." },
        { status: 404 },
      );
    }

    const project = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        status,
        completedAt:
          status === "COMPLETED"
            ? existingProject.completedAt ?? new Date()
            : null,
      },
    });

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Admin inquiries PATCH error:", error);

    return NextResponse.json(
      { message: "Unable to update inquiry." },
      { status: 500 },
    );
  }
}
