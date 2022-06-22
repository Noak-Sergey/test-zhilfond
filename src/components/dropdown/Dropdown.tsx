import { useState } from "react";
import SuperSelect from "./SuperSelect";

const arr = ['Click Me', 'Click Me 2', 'Click Me 3', 'Click Me 4', 'Click Me 5']

const Dropdown = () => {
    const [value, onChangeOption] = useState(arr[1]);

    return(
        <div>
            <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
        </div>
    )
}

export default Dropdown;