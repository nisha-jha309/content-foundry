import { FiArrowUpRight } from "react-icons/fi";
import Logo from "../../public/content-foundry.png";

const Navbar = () => {
    return(
      <div className="w-full sticky inset-0 bg-cream z-1000000 ">
           <header className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-5 border-b border-line scroll:border-none  px-[5vw] ">
           <a href="#top" className="h-auto w-[60px]" >
            <img src={Logo} alt="content" className="w-full h-full object-cover" />
           </a>
   
           <nav className="flex items-center gap-3 text-[14px] font-bold sm:gap-[30px]">
             <a href="#stories" className="hidden transition-opacity hover:opacity-60 md:block"  >
               Micro-dramas
             </a>
             <a href="#offer" className="hidden transition-opacity hover:opacity-60 md:block" >
               For companies
             </a>
             <a href="#amplify" className="hidden transition-opacity hover:opacity-60 md:block" >
               Amplification
             </a>
             <a href="#work" className="hidden transition-opacity hover:opacity-60 md:block" >
               Our work
             </a>
             <a href="#founder" className="hidden transition-opacity hover:opacity-60 md:block">
               Founder
             </a>
             <a href="#clients" className="hidden transition-opacity hover:opacity-60 md:block" >
               Clients
             </a>
             <a href="mailto:info@contentfoundry.in" className="inline-flex items-center justify-center bg-violet px-[22px] py-[15px] text-[14px] font-extrabold text-white transition-opacity hover:opacity-85" >
               Start a project ↗
             </a>
           </nav>
         </header>
      </div>
      
    )
   
}
export default Navbar;
