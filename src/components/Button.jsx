const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[12px] text-primary outline-none ${styles} hover:brightness-75 transition duration-500`}
    >
      Get Started
    </button>
  );
};

export default Button;
