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
    },
    {
      name:"Red Velvet",
      image:"https://t4.ftcdn.net/jpg/03/33/11/05/360_F_333110548_FlBGumb5xN7XLvo31S5n9Kq5PHa20Yp5.jpg",
      Price:850
    },
    {
      name:"Strawberry",
      image:"https://png.pngtree.com/background/20230613/original/pngtree-strawberry-cake-with-icing-decorating-picture-image_3394391.jpg",
      Price:700
    },
    {
      name:"Coconut",
      image:"https://static.vecteezy.com/system/resources/thumbnails/028/140/156/small_2x/whole-coconut-cake-on-tplate-photo.jpg",
      Price:900
    },
    {
      name:"Black Forest",
      image:"https://media.istockphoto.com/id/1214305490/photo/blackforest-cake.jpg?s=612x612&w=0&k=20&c=yxQZHJ6HSGamPFo5UId6JeC0RICcuZo1DuXfYWIdpyY=",
      Price:600
    },
    {
      name:"Caramel",
      image:"https://assets.winni.in/product/primary/2014/8/42520.jpeg?dpr=1&w=500",
      Price:800
    },
    {
      name:"Vanilla",
      image:"https://thecaketown.com/wp-content/uploads/2020/11/Vanilla-Cake-with-Buttercream.jpg",
      Price:550
    },
    {
      name:"Chocolate",
      image:"https://t4.ftcdn.net/jpg/03/08/40/43/360_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg",
      Price:650
    },
    {
      name:"Peanut",
      image:"https://i0.wp.com/cdn.sweetzivile.com/wp-content/uploads/2022/06/22163316/Pineapple-and-peanut-cake-whole-resized.jpg?w=840&ssl=1",
      Price:750
    },
   {
    name:"Pistachio",
    image:"https://i.ytimg.com/vi/D1F14NXjWTs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYwPn2SlIGBpBJ_lJ0yVGGxziZwg",
    Price:650
   },
   {
    name:"White Forest",
    image:"https://neerumittal.com/upload/Neeru-36315Flaky%20White%20Forest%20Cake.JPG",
    Price:650
   },
   {
    name:"Ice cream cake",
    image:"https://www.shutterstock.com/shutterstock/videos/3827453157/thumb/1.jpg?ip=x480",
    Price:650
   },
   {
    name:"Oreo",
    image:"https://yummycake.in/wp-content/uploads/2022/06/oreo-cream-cake.webp",
    Price:600
   }
  ];

  return (
    <div className="product-section">
      <h1 className="section-title">
          <span style={{ color: 'violet' }}>O</span>
  <span style={{ color: 'indigo' }}>u</span>
  <span style={{ color: 'blue' }}>r</span>
  <span> </span>
  <span style={{ color: 'green' }}>C</span>
  <span style={{ color: 'black' }}>a</span>
  <span style={{ color: 'orange' }}>k</span>
  <span style={{ color: 'red' }}>e</span>
  <span style={{ color: 'violet' }}>s</span>
      </h1>
      <div className="card-grid">
        {cakes.map((cake, index) => (
          <ProductCard key={index} name={cake.name} image={cake.image} price={cake.Price} />
        ))}
      </div>
            <footer className="footer">
        <div className="footer-content">
          <h2>Cake Studio</h2>
          <p>Sweet moments, beautifully baked.</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="https://e7.pngegg.com/pngimages/750/461/png-clipart-instagram-application-logo-logo-computer-icons-instagram-miscellaneous-text-thumbnail.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png" alt="Twitter" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <img src="https://img.freepik.com/premium-vector/vector-logo-pinterest-icon-logotype-vector-social-media-icon_901408-459.jpg" alt="Pinterest" />
            </a>
          </div>

          <p className="copyright">
            &copy; 2025 Cake Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Product;
