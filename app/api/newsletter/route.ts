import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email }
    })

    if (existingSubscriber) {
      if (existingSubscriber.subscribed) {
        return NextResponse.json(
          { message: "Already subscribed" },
          { status: 200 }
        )
      } else {
        // Resubscribe
        await prisma.newsletter.update({
          where: { email },
          data: { subscribed: true }
        })
        return NextResponse.json(
          { message: "Successfully resubscribed" },
          { status: 200 }
        )
      }
    }

    // Create new subscriber
    await prisma.newsletter.create({
      data: { email }
    })

    // In production, you would also add to Mailchimp or your email service here
    // Example:
    // await addToMailchimp(email)

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
