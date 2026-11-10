import Link from "next/link";
import type { NavLink, Profile } from "@/types/portfolio";

type Props = { profile: Profile; nav: NavLink[] };

export function Nav({ profile, nav }: Props) {
  return (
    <nav className="nav">
      <Link className="brand" href="/">
        {profile.wordmark}
        <span className="dot">.</span>
      </Link>

      <div className="navlinks">
        <span className="slash">{"//"}</span>
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="status">
        <span className="pulse" aria-hidden />
        {profile.status.label} <span className="detail">/ {profile.status.detail}</span>
      </div>
    </nav>
  );
}

export default Nav;
