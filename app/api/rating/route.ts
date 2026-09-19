import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      projectId,
      overallRating,
      communication,
      understanding,
      designQuality,
      process,
      outcome,
      feedback,
      testimonial,
      testimonialConsent,
    } = body;

    if (!projectId || !overallRating) {
      return NextResponse.json(
        { message: "Project and overall rating are required." },
        { status: 400 }
      );
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return NextResponse.json(
        { message: "Project not found." },
        { status: 404 }
      );
    }

    const rating = await prisma.clientRating.upsert({
      where: {
        projectId,
      },
      update: {
        overallRating: Number(overallRating),
        communication:
          communication !== undefined ? Number(communication) : null,
        understanding:
          understanding !== undefined ? Number(understanding) : null,
        designQuality:
          designQuality !== undefined ? Number(designQuality) : null,
        process: process !== undefined ? Number(process) : null,
        outcome: outcome !== undefined ? Number(outcome) : null,
        feedback: feedback || null,
        testimonial: testimonial || null,
        testimonialConsent: Boolean(testimonialConsent),
      },
      create: {
        projectId,
        overallRating: Number(overallRating),
        communication:
          communication !== undefined ? Number(communication) : null,
        understanding:
          understanding !== undefined ? Number(understanding) : null,
        designQuality:
          designQuality !== undefined ? Number(designQuality) : null,
        process: process !== undefined ? Number(process) : null,
        outcome: outcome !== undefined ? Number(outcome) : null,
        feedback: feedback || null,
        testimonial: testimonial || null,
        testimonialConsent: Boolean(testimonialConsent),
      },
    });

    return NextResponse.json(
      {
        success: true,
        ratingId: rating.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Rating creation error:", error);

    return NextResponse.json(
      { message: "Unable to save rating." },
      { status: 500 }
    );
  }
}
