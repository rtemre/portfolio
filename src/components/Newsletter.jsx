import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup here
    setIsSubmitted(true);
    setEmail("");
    // In a real app, you would send the email to your backend
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-display font-playfair mb-4">Stay Updated</h2>
        <p className="text-xl mb-8 opacity-90">
          Get insights on design trends, process improvements, and industry
          perspectives delivered to your inbox monthly.
        </p>

        {isSubmitted ? (
          <div className="max-w-md mx-auto">
            <p className="text-xl font-semibold mb-2">
              Thank you for subscribing!
            </p>
            <p className="opacity-90">
              You will receive our latest updates soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button
              type="submit"
              className="btn-primary bg-accent hover:bg-accent/90 px-8 py-4 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-sm opacity-70 mt-4">
          No spam, unsubscribe at any time. Read our
          <a href="#" className="underline hover:no-underline ml-1">
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Newsletter;
