import { Link } from "../components";

const links = [
  { href: "#linkedin", label: "LinkedIn" },
  { href: "#github", label: "GitHub" },
];

export const Header = () => {
  return (
    <header className="w-full max-w-screen-max mx-auto py-6">
      <nav className="flex items-center justify-between text-neutral-600">
        <Link
          href="/"
          className="text-2xl font-semibold hover:text-neutral-900"
        >
          HBS
        </Link>
        <div className="flex space-x-6 text-base font-normal">
          {links.map(({ href, label }) => (
            <span
              key={href}
              className="cursor-pointer decoration-2 decoration-neutral-900 underline-offset-4 hover:underline hover:text-neutral-900"
            >
              {label}
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
};
