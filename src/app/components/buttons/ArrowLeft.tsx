export default function ArrowLeft() {
  return (
    <>
      <div className="border-1 rounded-full flex items-center justify-center border-primary-200 group-hover:bg-primary-200 p-4 transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          className="group-hover:stroke-white stroke-primary-200 transition-all duration-300"
        >
          <path
            d="M7.92474 1.05859L1 8.05859L7.92474 15.0586"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M16.9994 8.05884L1.36914 8.05884"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </>
  );
}
