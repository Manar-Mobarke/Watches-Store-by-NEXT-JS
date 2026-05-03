function About() {
  return (
    <div className="bg-[#f7f7f2] px-5 py-14 text-[#17140f] sm:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
          About
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          Watches chosen for daily precision.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f564a]">
          Chrono Atelier curates modern wristwatches with balanced proportions,
          reliable movement, and finishes that work from weekday meetings to
          weekend travel.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Precision", "Materials", "Fit"].map((item) => (
            <div
              className="rounded-lg border border-[#ddd6c8] bg-white p-6"
              key={item}
            >
              <h2 className="text-lg font-bold">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-[#6f6658]">
                Every piece is selected for a clean dial, comfortable strap, and
                a finish that keeps its character over time.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
