import PropTypes from "prop-types";

const CustomTitle = ({ title }) => {
  return (
    <h2
      className="font-bold text-[28px] text-custom-dark relative before:absolute before:content-[''] before:w-[6px] before:h-[33px] before:bg-custom-blue before:rounded-md
    pr-4  before:right-0"
    >
      {title}
    </h2>
  );
};

CustomTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomTitle;
