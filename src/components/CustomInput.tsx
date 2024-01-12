import { forwardRef } from "react";
type TCustomInputProps = {
  className: string;
};
const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, myRef) => {
    return (
      <input
        ref={myRef}
        className={className}
        type="text"
        name="name"
        id="name"
      />
    );
  }
);

export default CustomInput;
