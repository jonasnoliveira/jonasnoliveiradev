import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" aria-label={'button-menu'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a href={'#hero'}>Início</a></li>
            <li><a href={'#about'}>Sobre mim</a></li>
            <li><a href={'#technologies'}>Tecnologias</a></li>
            <li><a href={'#contactUs'}>Fale Conosco</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        
        <Link href={'/'} className="btn btn-ghost text-xl" aria-label="Logo">
          <Image src={'/logo.png'} width={'50'} height={'50'} alt={'Logo'}/>
          <span className={'text-3xl text-base-800'}>
          </span>
          Jonas Oliveira
        </Link>
      </div>
      <div className="navbar-end">
        
        <ThemeToggle/>
      </div>
    </header>
  );
};

export default Header;