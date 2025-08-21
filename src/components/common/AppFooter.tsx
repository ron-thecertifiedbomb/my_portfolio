

export function AppFooter() {
  return (
    <footer className="w-full py-6 px-4 flex flex-col items-center gap-5">
      <p className="text-center text-sm md:text-base">
        © {new Date().getFullYear()} Ronan Ramos Sibunga
      </p>
    </footer>
  );
}
