import PropTypes from "prop-types";

const OfferTitle = ({ title, icon: Icon }) => {
  return (
    <div className="bg-[#3074F014] rounded-lg flex items-center gap-2 p-3">
      <Icon className="text-custom-blue" size={24} />

      <h4 className="font-medium text-sm md:text-[20px] text-custom-gray">
        {title}{" "}
      </h4>
    </div>
  );
};

OfferTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default OfferTitle;
