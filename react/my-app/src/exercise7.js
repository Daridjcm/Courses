export default function Button({ text, style }) {
    let appliedClasses = '';

    if (style === 'soft') {
        appliedClasses = 'bg-pink-200 text-pink-800 border-none py-2 px-4 rounded shadow-md hover:bg-pink-500';
    } else if (style === 'hard') {
        appliedClasses = 'bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition-all';
    }

    return (
        <>
            <h1 className="text-2xl font-bold">Button with style {style}</h1>
            <button type="button" className={appliedClasses}>
                {text}
            </button>
        </>
    );
}
