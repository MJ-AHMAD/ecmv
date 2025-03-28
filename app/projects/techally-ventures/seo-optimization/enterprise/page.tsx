"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SimpleFooter } from "@/components/simple-footer"
import Link from "next/link"
import Image from "next/image"

export default function EnterpriseSEOPlanPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-muted flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/logo.png"
                alt="TRUSTED-ALLY Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">TRUSTED-ALLY</span>
            </Link>
          </div>
        </header>

        <main className="container py-12 flex-grow flex flex-col items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h2>
              <p className="mt-2 text-sm text-gray-600">
                Your Enterprise SEO Plan request has been submitted successfully. We'll get back to you soon.
              </p>
            </div>
            <div className="mt-5">
              <Button asChild className="w-full">
                <Link href="/">Back to Home Page</Link>
              </Button>
            </div>
          </div>
        </main>

        <SimpleFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/logo.png"
              alt="TRUSTED-ALLY Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl">TRUSTED-ALLY</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="/projects" className="font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="/environmental-development" className="font-medium hover:text-primary">
              News + Media
            </Link>
            <Link href="/about" className="font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Enterprise SEO Plan</h1>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Plan Details</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Everything in Professional Plan</li>
              <li>Unlimited Keyword Research</li>
              <li>International SEO</li>
              <li>Custom Strategy Development</li>
              <li>Advanced Link Building (30+ quality backlinks)</li>
              <li>Content Creation and Optimization</li>
              <li>Conversion Rate Optimization</li>
              <li>24/7 Support</li>
            </ul>
            <p className="text-2xl font-bold">Price: $1999</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input id="name" name="name" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input id="email" name="email" type="email" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <Input id="company" name="company" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <Input id="website" name="website" type="url" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <Input id="industry" name="industry" type="text" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="current-seo" className="block text-sm font-medium text-gray-700">
                Current SEO Efforts
              </label>
              <Textarea
                id="current-seo"
                name="current-seo"
                rows={3}
                className="mt-1"
                placeholder="Describe your current SEO efforts and challenges"
              />
            </div>
            <div>
              <label htmlFor="competitors" className="block text-sm font-medium text-gray-700">
                Main Competitors
              </label>
              <Textarea
                id="competitors"
                name="competitors"
                rows={3}
                className="mt-1"
                placeholder="List your main competitors (if known)"
              />
            </div>
            <div>
              <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                SEO Goals
              </label>
              <Textarea
                id="goals"
                name="goals"
                rows={3}
                className="mt-1"
                placeholder="What are your main SEO goals?"
                required
              />
            </div>
            <div>
              <label htmlFor="international" className="block text-sm font-medium text-gray-700">
                International SEO Needs
              </label>
              <Textarea
                id="international"
                name="international"
                rows={3}
                className="mt-1"
                placeholder="Describe your international SEO needs (if applicable)"
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}

