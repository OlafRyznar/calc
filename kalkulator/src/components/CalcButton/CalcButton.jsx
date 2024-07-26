export default function CalcButton({ value, isFlexOne, onClick }) {
    const handleClick = () => {
        if (value.isCalculate) {
            value.method();
        } else {
            onClick(value);
        }
    }

    return (
        <button 
            className={`${value.bgColor} ${value.textColor} ${isFlexOne ? `flex-1` : ``} h-16 rounded-lg shadow-md`}
            onClick={handleClick} 
        >
            {value.name}
        </button>
    );
}
