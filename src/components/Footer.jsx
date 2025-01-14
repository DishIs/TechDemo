import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} border-t-[1px] border-t-[#3F3E45] pt-10 md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src="https://raw.githubusercontent.com/DIAHANT12/gowithtech/main/171076656381808290.png"
          alt="GoWithTech"
          className="w-[120px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to get the software development work easily and reliably.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink, index) => (
          <div
            key={index}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>

            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={index}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                    ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}
                  `}
                >
                  <Link to={link.link} className="hover:text-secondary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; {new Date().getFullYear()} <a href="https://gowith.tech">GoWithTech</a>. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={index}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer 
              ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}
            `}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
