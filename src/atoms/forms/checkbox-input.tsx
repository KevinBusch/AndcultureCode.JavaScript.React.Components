import { InputTypes } from "../constants/input-types";
import React from "react";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const ELEMENT_CLASS = "e-checkbox";

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Interfaces
// -----------------------------------------------------------------------------------------

export interface CheckboxInputProperties {
    checked: boolean;
    disabled?: boolean;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// #endregion Interfaces

// -----------------------------------------------------------------------------------------
// #region Component
// -----------------------------------------------------------------------------------------

const CheckboxInput: React.FC<CheckboxInputProperties> = (
    props: CheckboxInputProperties
) => {
    const { checked, disabled, label, onChange } = props;

    let className = ELEMENT_CLASS;
    if (disabled) {
        className += " -disabled";
    }

    return (
        <label className={className}>
            {label}
            <input
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                type={InputTypes.Checkbox}
                value={checked.toString()}
            />
            <span className={`${ELEMENT_CLASS}__checkmark`}></span>
        </label>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Export
// -----------------------------------------------------------------------------------------

export { CheckboxInput };

// #endregion Export
