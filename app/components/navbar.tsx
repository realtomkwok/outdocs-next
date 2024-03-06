import Link from "next/link";
import Logo from "@/app/components/logo";

interface NavLink {
    href: string;
    label: string;
}

const NavLink: NavLink[] = [
    {
        href: "/awards",
        label: "Awards"
    },
    {
        href: "/fest",
        label: "Fest"
    },
    {
        href: "/notes",
        label: "Notes"
    },
    {
        href: "/news",
        label: "News"
    },
    {
        href: "/about",
        label: "About"
    }
]

export default function Navbar() {
    return (
        <nav className="grid grid-cols-12">
            <div className="col-span-3">
                <Link href="/" className='relative'>
                    <Logo/>
                </Link>
            </div>
            <div className="grid grid-cols-subgrid col-start-8 col-end-13">
                {NavLink.map((link, key) => (
                    <Link href={link.href} key={key} className="uppercase col-span-1 text-base pt-3 pr-3 hover:bg-black hover:text-stone">{link.label}</Link>
                ))}
            </div>
        </nav>
    )
}