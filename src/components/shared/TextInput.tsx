type Props = {
  type: string;
  placeholder: string;
  required?: boolean;
  mt?: string;
  text?: string;
};

export const TextInput = ({ type, placeholder, required, mt, text }: Props) => (
  <input
    type={type}
    placeholder={placeholder}
    required={required}
    className={`input bg-base-200 w-full max-w-xs focus:bg-base-300 focus:outline-none`}
    style={{
      marginTop: mt,
      textAlign: text,
    }}
  />
);
