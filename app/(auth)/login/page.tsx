function Login() {
  return (
    <div className="bg-[#f7f7f2] px-5 py-14 text-[#17140f] sm:px-8">
      <section className="mx-auto max-w-md rounded-lg border border-[#ddd6c8] bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f6b27]">
          Client Access
        </p>
        <h1 className="mt-3 text-3xl font-bold">Sign in</h1>

        <form className="mt-6 space-y-4">
          <label className="block text-sm font-semibold text-[#4f473c]">
            Email
            <input
              className="mt-2 w-full rounded-md border border-[#ddd6c8] px-3 py-3 outline-none transition focus:border-[#c9a45d]"
              type="email"
            />
          </label>
          <label className="block text-sm font-semibold text-[#4f473c]">
            Password
            <input
              className="mt-2 w-full rounded-md border border-[#ddd6c8] px-3 py-3 outline-none transition focus:border-[#c9a45d]"
              type="password"
            />
          </label>
          <button
            className="w-full rounded-md bg-[#17140f] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#2a251d]"
            type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
