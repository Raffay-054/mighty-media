import { useLocation, useNavigate } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";  
import Logo from "../assets/Logo.png";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const navigate = useNavigate(); // Use useNavigate for programmatic navigation
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  // Function to navigate to the contact page
  const goToContactPage = () => {
    handleClick();
    navigate("/contact");
  }; 
  const goToResultPage = () => {
    handleClick();
    navigate("/results");
  }; 
  const goToAboutPage = () => {
    handleClick();
    navigate("/about");
  };
  const goToArtistPage = () => {
    handleClick();
    navigate("/artist-development");
  }; 
  const goToWorkPage = () => {
    handleClick();
    navigate("/our-work");
  };
  const goToPromoPage = () => {
    handleClick();
    navigate("/promo-form");
  };
  const goToRoyaltiesPage = () => {
    handleClick();
    navigate("/royalties-calculator");
  };

  const goToInvoicePage = () => {
    handleClick();
    navigate("/invoice-form");
  };


  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4"> 
      <img className=" h-14 w-14 mt-2 ml-[-5px] md:h-16 md:w-16" src={'https://res.cloudinary.com/dlasb4krd/image/upload/v1772731188/v2olbsqnwzlxgslnvkkx.png'} alt="" />
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <h1 className="text-3xl md:ml-3 font-serif font-bold">MightyMedia</h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))} 
             <button
              onClick={goToAboutPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Our Company
            </button>
 <button
              onClick={goToResultPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Our Results
            </button>
            {/* Add Contact Us link */}
            <button
              onClick={goToContactPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Contact Us
            </button>

            <button
              onClick={goToArtistPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Artist Dev
            </button> 
            <button
              onClick={goToWorkPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Our Work
            </button>
            <button
              onClick={goToPromoPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Promo
            </button>
            <button
              onClick={goToRoyaltiesPage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Royalties Calculator
            </button>
            <button
              onClick={goToInvoicePage}
              className={`block relative font-code text-2xl uppercase text-n-2 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
            >
              Invoice Form
            </button>
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
