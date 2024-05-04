import LogoImage from "./assets/images/logo.jpg";

function Logo() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <img src={LogoImage} alt="eshop ecommerce logo" width={50} height={50} />
    </div>
  );
}

export default Logo;
