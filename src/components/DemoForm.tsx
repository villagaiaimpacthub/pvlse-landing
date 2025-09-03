'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface DemoFormProps {
  className?: string
}

export default function DemoForm({ className }: DemoFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Form submission error:', result.error)
        // Handle error (you might want to show an error message to the user)
        alert('Sorry, there was an error submitting your request. Please try again.')
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('Sorry, there was a network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className={`bg-panel border border-hairline rounded-lg p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-textPrimary mb-2">Demo Request Received</h3>
        <p className="text-textSecondary mb-6">
          Thank you for your interest in PVLSE. Our team will contact you within 24 hours to schedule your personalized demo.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: '', email: '', company: '', employees: '', phone: '', message: ''
            })
          }}
          variant="outline"
        >
          Request Another Demo
        </Button>
      </div>
    )
  }

  return (
    <div className={`bg-panel border border-hairline rounded-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-textPrimary mb-4">
          Request <span className="text-accent">enterprise consultation</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-hairline rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-textPrimary"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
              Business Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-hairline rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-textPrimary"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-textPrimary mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-hairline rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-textPrimary"
              placeholder="Acme Corporation"
            />
          </div>

          <div>
            <label htmlFor="employees" className="block text-sm font-medium text-textPrimary mb-2">
              Number of Employees *
            </label>
            <select
              id="employees"
              name="employees"
              required
              value={formData.employees}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-hairline rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-textPrimary"
            >
              <option value="">Select range</option>
              <option value="50-100">50-100 employees</option>
              <option value="100-250">100-250 employees</option>
              <option value="250-500">250-500 employees</option>
              <option value="500-1000">500-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-textPrimary mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background border border-hairline rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-textPrimary"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-2">
            Tell us about your current challenges
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background border border-hairline rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-textPrimary resize-none"
            placeholder="Executive burnout, high turnover rates, workplace stress management..."
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Request...
            </div>
          ) : (
            'Schedule Enterprise Consultation'
          )}
        </Button>

        <p className="text-sm text-muted text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}