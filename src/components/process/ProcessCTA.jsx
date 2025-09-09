import { Link } from 'react-router-dom'

function ProcessCTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-display font-playfair mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Let us discuss how our proven methodology can help you achieve your
          goals through strategic design and collaborative partnership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="btn-primary bg-accent hover:bg-accent/90 text-lg px-8 py-4"
          >
            Start a Conversation
          </Link>
          <Link
            to="/work"
            className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessCTA
