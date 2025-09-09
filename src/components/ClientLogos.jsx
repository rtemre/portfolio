import { clients } from './constants.jsx'

function ClientLogos() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-secondary">
            Collaborating with forward-thinking companies to create exceptional
            digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="h-16 flex items-center justify-center bg-surface rounded-lg">
                <span className="font-playfair text-lg font-semibold text-secondary">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
