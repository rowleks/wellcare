export default function ArrowRight() {
  return (
    <>
      <div className="border-1 rounded-full flex items-center justify-center border-primary-200 group-hover:bg-primary-200 p-3.5 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          className="group-hover:stroke-white stroke-primary-200 transition-all duration-300"
        >
          <path
            d="M10.0753 1.05859L17 8.05859L10.0753 15.0586"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M1.00059 8.05884L16.6309 8.05884"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </>
  );
}
