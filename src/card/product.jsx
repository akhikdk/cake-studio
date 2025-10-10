import React from "react";
import "./product.css";

function ProductCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="container">
        <h4>{name}</h4>
          <p className="price">₹{price}</p>
        <button className="order-button">Order Now</button>
        
      </div>
    </div>
  );
}

function Product() {
  const cakes = [
    {
      name: "Vancho",
      image: "https://wallpapercat.com/w/full/e/3/0/595506-3840x2160-desktop-4k-cake-wallpaper-image.jpg",
      Price:550
      
    },
    {
      name: "Choco Fruit Nut",
      image: "https://autumnlotus.in/wp-content/uploads/2021/03/Choco-Fruit-N-Nut-Cake-1-Kg.-510x510.jpg",
      Price:600
    },
    {
      name: "Butter Scotch",
      image: "https://cdn.thomsonline.in/wp-content/uploads/2019/08/BUTTERSCOTCH-CAKE-3-750x500.jpg",
      Price:700
    },
     {
      name: "Pineapple",
      image: "https://theobroma.in/cdn/shop/files/FreshCreamPineappleCakeonekg.jpg?v=1711124712",
      Price:650
    }
  ];

  return (
    <div className="product-section">
      <h1 className="section-title">Our Cakes</h1>
      <div className="card-grid">
        {cakes.map((cake, index) => (
          <ProductCard key={index} name={cake.name} image={cake.image} price={cake.Price} />
        ))}
      </div>
    </div>
  );
}

export default Product;
