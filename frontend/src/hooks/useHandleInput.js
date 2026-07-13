import { useState } from "react";

const useHandleInput = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const [inputType, setInputType] = useState("text");

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);

        // Определяем тип ввода
        if (newValue.includes('@')) {
            setInputType("email");
        } else if (/^\d+$/.test(newValue)) {
            setInputType("tel"); // лучше tel, чем number
        } else {
            setInputType("text");
        }
    };

    return {
        value,
        inputType,
        onChange: handleChange
    };
};

export default useHandleInput;