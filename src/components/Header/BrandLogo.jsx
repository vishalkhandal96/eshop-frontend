import { Link } from "react-router-dom";

function BrandLogo() {
  return (
    <>
      <Link className="flex flex-shrink-0 items-center" to={"/"}>
        <img
          className="h-8 w-auto hidden sm:block"
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="Eshop ecommerce"
        />
      </Link>
    </>
  );
}

export default BrandLogo;
