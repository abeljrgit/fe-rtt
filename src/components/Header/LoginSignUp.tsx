const LoginSignUp = () => {
  return (
    <div className="w-full pt-2 border-t-2 mt-4 flex flex-col items-center md:flex-row md:w-auto md:border-none md:mt-0 md:pt-0">
      <a
        href="#"
        className="font-overpass font-bold text-center mt-5 mb-4 block md:my-0 md:mr-8 md:text-white md:hover:underline "
      >
        Login
      </a>
      <a
        href="#"
        className="font-overpass font-bold text-white text-center bg-bgGrad1 rounded-full pt-3 pb-2 px-8 block ease-linear duration-150 md:bg-none md:bg-white md:text-lightRed md:whitespace-nowrap md:hover:bg-VeryLightRed md:hover:text-white"
      >
        Sign Up
      </a>
    </div>
  );
};

export default LoginSignUp;
