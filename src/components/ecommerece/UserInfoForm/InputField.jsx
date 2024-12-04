const InputField = ({ id, label, type, placeholder, icon: Icon, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[#63636E] font-medium text-sm">
        {label}{" "}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          aria-label={placeholder}
          placeholder={placeholder}
          className="font-normal text-sm  rounded-lg border border-[#DEDEDE] py-4 px-5 pr-10
     w-full outline-none"
          onChange={onChange}
        />
        <Icon className="absolute top-1/2 -translate-y-1/2 right-4 text-custom-blue w-5" />
      </div>
    </div>
  );
};

export default InputField;
