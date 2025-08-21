import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export async function GET() {
  return NextResponse.json(siteConfig.links);
}