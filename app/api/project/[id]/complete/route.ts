import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found." },
        { status: 404 }
      );
    }

    const completedProject = await prisma.project.update({
      where: { id },
      data: {
        status: "COMPLETED",
        completedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      projectId: completedProject.id,
      ratingUrl: `/client-rating?project=${completedProject.id}`,
    });
  } catch (error) {
    console.error("Project completion error:", error);

    return NextResponse.json(
      { message: "Unable to complete project." },
      { status: 500 }
    );
  }
}
