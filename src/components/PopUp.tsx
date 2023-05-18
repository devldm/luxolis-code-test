interface PopUpProps {
  onClickFn: () => void;
  popUpText: string;
}

const PopUp = ({ onClickFn, popUpText }: PopUpProps) => (
  <div className="absolute left-0 right-0 m-auto flex w-10/12 flex-col items-center justify-center rounded-md border-2 bg-blue-900 p-6 shadow-lg md:w-2/6 lg:w-3/12">
    <h1>{popUpText}</h1>
    <button
      className="mt-4 w-full rounded-md bg-white p-2 font-semibold text-login-blue"
      onClick={onClickFn}
    >
      Try again
    </button>
  </div>
);

export default PopUp;
