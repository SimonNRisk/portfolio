export const TriviaOptions = ({
  options,
  handleOptionClick,
}: {
  options: string[];
  handleOptionClick: (option: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <button
          key={option}
          className="w-full text-black border-2 border-black p-4 my-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
