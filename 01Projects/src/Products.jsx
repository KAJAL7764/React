import "./Product.css";
import PropTypes from 'prop-types';

function Products({ title, price, features }) {
  const discountPrice =  price > 90 ? price : "Discount of 5% ";
  return (
    <div className="product">
      <h2>{title}</h2>
      <p> rice: ${price}</p>
      <p>Discounted Price: {discountPrice}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

// Add default props
Products.defaultProps = {
  features: [], // Default to an empty array
};

// Add prop types validation
Products.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
};

export default Products;
