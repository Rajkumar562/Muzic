import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "@/app/lib/db";

const YT_REGEX = new RegExp(
  "https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[\w-]+",
);

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    console.log("-------------------------", req)
    const data = CreateStreamSchema.parse(await req.json());
    const isYt = YT_REGEX.test(data.url);

    console.log(data, isYt)

    if (!isYt)
      return NextResponse.json(
        { message: "Please enter a correct youtube url" },
        { status: 411 },
      );

    const extractedId = data.url.split("?v=")[1];

    const stream = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: "YouTube",
      },
    });
    console.log("stream------------------------------------", stream)
    return NextResponse.json({
      message: "Stream added",
      id: stream.id,
    });
  } catch (e) {
    return NextResponse.json(
      { message: "Error while adding a stream" },
      { status: 411 },
    );
  }
}

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prismaClient.stream.findMany({
    where: {
      userId: creatorId ?? "",
    },
  });

  try {
    return NextResponse.json({ streams });
  } catch (e) {
    return NextResponse.json(
      { message: "Error while fetching streams" },
      { status: 411 },
    );
  }
}
