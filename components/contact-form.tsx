"use client"

import { useState } from "react"
import { Mail, User, MessageSquare, Send, AlertCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ContactFormProps {
  children?: React.ReactNode
  trigger?: React.ReactNode
}

export default function ContactForm({ children, trigger }: ContactFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "EMS Contact Form",
          // Optional: redirect to a thank you page after successful submission
          // redirect: "https://yourdomain.com/thank-you"
        }),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setIsSubmitting(false)

        // Reset form after 2 seconds and close dialog
        setTimeout(() => {
          setFormData({ name: "", email: "", subject: "", message: "" })
          setIsSuccess(false)
          setIsOpen(false)
        }, 2500)
      } else {
        throw new Error(data.message || "Failed to send message")
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      )
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || children || (
          <Button variant="glass" size="lg">
            Contact Us
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Get in Touch
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Send className="size-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for contacting us. We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                <AlertCircle className="size-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="size-4" />
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="size-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="flex items-center gap-2">
                <MessageSquare className="size-4" />
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us more..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                rows={4}
              />
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
