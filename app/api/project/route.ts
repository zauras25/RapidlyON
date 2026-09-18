import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      projectStage,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !projectType ||
      !projectStage ||
      !message
    ) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        name,
        email,
        company: company || null,
        projectType,
        projectStage,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        projectId: project.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Project creation error:", error);

    return NextResponse.json(
      { message: "Unable to create project." },
      { status: 500 }
    );
  }
}
