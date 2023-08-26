// /api/chapter/getInfo

import { prisma } from "@/lib/db";
import { strict_output } from "@/lib/gpt";
import { getTranscript, searchYoutube } from "@/lib/youtube";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodyParsed = z.object({
  chapterId: z.string(),
});

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { chapterId } = bodyParsed.parse(body);
    const chapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });
    if (!chapter) {
      return NextResponse.json(
        {
          success: false,
          error: "Chapter not found",
        },
        { status: 400 }
      );
    }
    const videoId = await searchYoutube(chapter.youtubeSearchQuery);
    let transcript = await getTranscript(videoId);
    let maxLength = 250;
    transcript = transcript?.split(" ").slice(0, maxLength).join(" ");

    const summary = await strict_output(
      "You are an AI capable of summarizing a youtube transcript",
      "Please summarize in 250 or less words, and do not talk of the sponsors or anything unrelated to the main topic, also do not introduce what the summary is about. \n" +
        transcript,
      {
        summary: "a summary of the transcript",
      }
    );
    return NextResponse.json({ videoId, transcript, summary });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid body",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Unknown",
        },
        { status: 500 }
      );
    }
  }
}
