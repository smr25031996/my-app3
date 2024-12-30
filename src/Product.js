const Product = () => {
  return (
    <div>
      <div className={"thumbnail"}>
        <img
          src="Images/Laptop.jpg"
          class="img img-rounded imgresponsive"
          alt="no Image"
        />
        <div class="caption">
          {/* Hardcoded value for a product  */}
          <a href="/productDetails">
            {" "}
            <h3> Gamia Laptop </h3>
          </a>
           
          <h4>
            <span style={{ color: "red" }}>Rs. 33000</span>
          </h4>
          <p>An excellent choice for an awesome gamingexperience.</p>
          <span style={{ fontSize: "9px" }}>3/5</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
