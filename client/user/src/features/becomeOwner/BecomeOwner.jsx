import React from "react";
import FormField from "../../components/common/FormField";
import Button from "../../components/common/Button";
import useBecomeOwner from "../../hooks/useBecomeOwner";
import { Building2, Users, Wallet, Calendar, Bell, Shield, ChevronRight, CheckCircle, BarChart3 } from "lucide-react";

const BecomeOwner = () => {
  const { register, handleSubmit, errors, onSubmit, loading } = useBecomeOwner();

  const benefits = [
    { icon: Building2, title: "Manage Multiple Turfs", description: "Add and manage multiple sports facilities from one dashboard" },
    { icon: Calendar, title: "Booking Management", description: "Efficient booking system with real-time availability updates" },
    { icon: Wallet, title: "Payment Handling", description: "Secure payment processing and transaction management" },
    { icon: BarChart3, title: "Analytics & Reports", description: "Detailed insights and performance metrics for your business" },
    { icon: Users, title: "Customer Management", description: "Build and maintain relationships with your customers" },
    { icon: Bell, title: "Instant Notifications", description: "Real-time alerts for bookings and important updates" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-focus bg-clip-text text-transparent">
            Become a Turf Owner
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Join our growing network of turf owners and transform your sports facility 
            management with our cutting-edge platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-focus rounded-2xl blur opacity-20"></div>
            <div className="relative bg-base-100 p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-semibold">Application Form</h2>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  register={register}
                  error={errors.name}
                  placeholder="Enter your full name"
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email}
                  placeholder="Enter your email address"
                />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="text"
                  register={register}
                  error={errors.phone}
                  placeholder="Enter your phone number"
                />
                
                <Button 
                  className="btn btn-primary w-full gap-2 text-lg" 
                  loading={loading}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Process Section */}
          <div>
            <div className="bg-base-100 rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Application Process</h2>
              
              <div className="space-y-6">
                {[
                  { step: 1, title: "Submit Application", description: "Fill out the form with your details" },
                  { step: 2, title: "Review Process", description: "Our team will review your application" },
                  { step: 3, title: "Email Confirmation", description: "Receive decision via email" },
                  { step: 4, title: "Account Setup", description: "Create your owner account if approved" },
                ].map((step) => (
                  <div key={step.step} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">{step.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-base-content/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-base-100 p-4 rounded-lg shadow-md">
                  <benefit.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-base-content/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Increased Revenue", stat: "40%" },
              { title: "Booking Rate", stat: "95%" },
              { title: "Customer Satisfaction", stat: "4.8/5" }
            ].map((feature, index) => (
              <div key={index} className="bg-base-100 p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                <div className="text-base-content/70">{feature.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "How long does the application process take?", a: "Usually 2-3 business days" },
              { q: "What are the requirements?", a: "Legal ownership of a sports facility and proper documentation" },
              { q: "Is there a subscription fee?", a: "We operate on a commission-based model with no upfront fees" }
            ].map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-base-100">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title font-medium">{faq.q}</div>
                <div className="collapse-content text-base-content/70">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeOwner;