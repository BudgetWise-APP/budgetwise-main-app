const ProgressBar = ({initialValue, finalValue}) => {
    const percentage = Math.min(
        Math.max(((initialValue / finalValue) * 100).toFixed(2), 0),
        100
      );

      
    return (
        <div className="w-full max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 mr-2">Progress </span>
          <span className="text-sm font-medium text-gray-700">
            {percentage}% ({initialValue} / {finalValue})
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
};

export default ProgressBar;