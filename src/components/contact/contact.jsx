import React, { useState } from "react";

export default function ContactPage() {
  // FORM STATES
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", form);

    setSuccess("Your message has been sent successfully! ✅");

    // Reset form fields
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Hero */}
      <section
        className="bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30')] bg-cover bg-center py-20 mt-8"
      >
        <div className="container mx-auto px-6 text-center bg-white/40 py-10 rounded-xl">
          <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
          <p className="text-sm text-gray-600 mt-2">Home &gt; Contact</p>
        </div>
      </section>

      {/* Main contact area */}
      <main className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center">Get In Touch With Us</h3>
        <p className="text-center text-md text-gray-400 mt-2 max-w-xl mx-auto">
          For more information about our product & services please feel free to drop us an email. Our staff always
          be there to help you out.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Left column - contact info */}
          <div className="lg:col-span-1 space-y-8">

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-full">📍</div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm text-gray-500">
                  Bani suef - Egypt
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-full">📞</div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-gray-500">
                  Mobile: ‪(+20) 1117045874‬<br />
                  Hotline: ‪(+20) 1012478726‬
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-full">⏰</div>
              <div>
                <h4 className="font-semibold">Working Time</h4>
                <p className="text-sm text-gray-500">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right column - form */}
          <div className="lg:col-span-2">

            {success && (
              <p className="mb-4 bg-green-100 text-green-700 p-3 rounded-md text-sm">
                {success}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Abc"
                    className="w-full border rounded-md px-4 py-3 text-sm bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Abc@d@e.com"
                    className="w-full border rounded-md px-4 py-3 text-sm bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="This is an optional"
                  className="w-full border rounded-md px-4 py-3 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi I'd like to ask about..."
                  className="w-full border rounded-md px-4 py-3 text-sm bg-white"
                  required
                />
              </div>

              <div>
                <button type="submit" className="inline-block rounded-full border px-6 py-2 text-sm">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      {/* Info features */}
      <section className="bg-pink-50 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div>
            <h4 className="font-semibold">Free Delivery</h4>
            <p className="text-sm text-gray-500">For all orders over $50, consectetur adipim scing elit.</p>
          </div>

          <div>
            <h4 className="font-semibold">90 Days Return</h4>
            <p className="text-sm text-gray-500">If goods have problems, consectetur adipim scing elit.</p>
          </div>

          <div>
            <h4 className="font-semibold">Secure Payment</h4>
            <p className="text-sm text-gray-500">100% secure payment, consectetur adipim scing elit.</p>
          </div>

        </div>
      </section>

    </div>
  );
}