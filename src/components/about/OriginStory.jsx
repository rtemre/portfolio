import { paragraphs } from './constants'
function OriginStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-display font-playfair mb-4 text-primary">
            Origin Story
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            How a curiosity about human behavior and technology led to a passion
            for user-centered design
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg text-secondary leading-relaxed ${
                index < paragraphs.length - 1 ? 'mb-6' : ''
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OriginStory
