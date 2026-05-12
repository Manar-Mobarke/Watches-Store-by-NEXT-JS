function Contact() {
  return (
    <div className="bg-[#f7f7f2] px-5 py-14 text-[#17140f] sm:px-8">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Find the right watch.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#5f564a]">
            Ask about sizing, finishes, reservations, or pairing a watch with a
            specific occasion.
          </p>
          <div className="mt-8 space-y-3 text-sm font-semibold text-[#4f473c]">
            <p>support@chronoatelier.com</p>
            <p>Sunday to Thursday, 10:00 AM - 6:00 PM</p>
            <p>Cairo, Egypt</p>
          </div>
        </div>

        <form className="rounded-lg border border-[#ddd6c8] bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[#4f473c]">
              Name
              <input
                className="mt-2 w-full rounded-md border border-[#ddd6c8] px-3 py-3 outline-none transition focus:border-[#c9a45d]"
                type="text"
              />
            </label>
            <label className="text-sm font-semibold text-[#4f473c]">
              Email
              <input
                className="mt-2 w-full rounded-md border border-[#ddd6c8] px-3 py-3 outline-none transition focus:border-[#c9a45d]"
                type="email"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-[#4f473c]">
            Message
            <textarea className="mt-2 min-h-36 w-full rounded-md border border-[#ddd6c8] px-3 py-3 outline-none transition focus:border-[#c9a45d]" />
          </label>
          <button
            className="mt-5 rounded-md bg-[#17140f] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#2a251d]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
