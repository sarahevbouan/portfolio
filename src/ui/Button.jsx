const Button = ({ children, onButtonClick }) => {
  if (onButtonClick) {
    return (
      <button onClick={onButtonClick} className="cursor-pointer">
        {children}
      </button>
    );
  } else {
    return (
      <button
        className="bg-stone-950 dark:bg-stone-50
      py-3 px-12 rounded-3xl
      text-stone-50 dark:text-stone-800 max-w-fit
      font-bold"
      >
        <a href="mailto:sarahevbouan@gmail.com">{children}</a>
      </button>
    );
  }
};

export default Button;
