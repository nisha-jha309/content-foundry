  import { FaLinkedin , FaInstagram , FaYoutube , FaFacebook  } from "react-icons/fa";
  import { CgMail } from "react-icons/cg";

  const Footer = () =>{
    return(
          <footer className="bg-[#171613] py-[35px] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-5 px-[5vw] text-[13px]">
          <b>CONTENT FOUNDRY</b>
          <span>FBD One Corporate Park, Faridabad, Haryana</span>
          <span>Concept design · not the live website</span>  
        <div className="flex gap-4">
        <a href=""><FaLinkedin size={20}/></a>
        <a href=""><FaInstagram size={20}/></a>
        <a href=""><FaYoutube size={20}/></a>
        <a href=""><FaFacebook size={20}/></a>
        <a href=""><CgMail size={20}/></a>
        </div>
        </div>
      
      </footer>
    )
  }

  export default Footer;