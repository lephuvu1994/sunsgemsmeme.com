import Socials from "../Social/Social"

const Header = () => {
  return (
    <header className="px-8 h-20 flex items-center justify-between bg-[rgb(12,17,64)]">
      <a href="/" className="flex navbar-brand gap-4 items-center hover:opacity-80"><img src="/Logo.jpeg" className="w-8 rounded-full" /><strong className="text-white">Dyan</strong></a>
      <Socials/>
    </header>
  )
}

export default Header