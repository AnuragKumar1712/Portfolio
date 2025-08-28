function Availability() {
  return (
    <>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* -- Current Availability -- */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse mr-3"></div>
                <h3 className="text-xl font-semibold">Current Availability</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-text-secondary">Status</span>
                  <span className="text-secondary font-medium">Available</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-text-secondary">Capacity</span>
                  <span className="text-text-primary">Taking new projects</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-text-secondary">Response Time</span>
                  <span className="text-text-primary">24-48 hours</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-text-secondary">Urgent Inquiries</span>
                  <span className="text-text-primary">Same day</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-text-secondary">
                    Earliest Start Date
                  </span>
                  <span className="text-text-primary">Today</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                <p className="text-sm text-secondary">
                  <svg
                    className="w-4 h-4 inline mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Currently accepting new projects starting January 2025. Book a
                  consultation to discuss your timeline.
                </p>
              </div>
            </div>

            {/* -- Location & Preferences -- */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-6">
                Location & Preferences
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-text-secondary text-sm">
                      Delhi, India (GMT+5:30)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="text-text-secondary text-sm">
                      9:00 AM - 6:00 PM IST (Mon-Fri)
                    </p>
                    <p className="text-text-secondary text-sm">
                      Flexible for global collaboration
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Remote Work</h4>
                    <p className="text-text-secondary text-sm">
                      100% remote-friendly
                    </p>
                    <p className="text-text-secondary text-sm">
                      Experience with global teams
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-medium">Communication</h4>
                    <p className="text-text-secondary text-sm">
                      Whatsapp, Discord, Zoom, Teams
                    </p>
                    <p className="text-text-secondary text-sm">
                      Regular updates & transparent process
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <h4 className="font-medium text-primary mb-2">
                  Collaboration Approach
                </h4>
                <p className="text-sm text-text-secondary">
                  I believe in transparent communication, regular updates, and
                  collaborative problem-solving. Every project starts with
                  understanding your goals and ends with exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Availability;
