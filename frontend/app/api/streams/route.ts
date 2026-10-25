import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "@/app/lib/db";
//@ts-ignore
import youtubesearchapi from "youtube-search-api";

const YT_REGEX = /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[\w-]+/;

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());
    const isYt = YT_REGEX.test(data.url);

    if (!isYt)
      return NextResponse.json(
        { message: "Please enter a correct youtube url" },
        { status: 411 },
      );

    const extractedId = data.url.split("?v=")[1];

    const videoDetails = await youtubesearchapi.GetVideoDetails(extractedId);
    const thumbnailsArray = videoDetails.thumbnail.thumbnails;
    thumbnailsArray.sort((a: { width: number }, b: { width: number }) =>
      a.width < b.width ? -1 : 1,
    );
    const defaultImage =
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80";

    const stream = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: "YouTube",
        title: videoDetails.title ?? "No title found",
        smallImg:
          (thumbnailsArray.length > 1
            ? thumbnailsArray[thumbnailsArray.length - 2].url
            : thumbnailsArray[thumbnailsArray.lenght - 1].url) ?? defaultImage,
        bigImg: thumbnailsArray[thumbnailsArray.length - 1].url ?? defaultImage,
      },
    });

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
