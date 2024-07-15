// import { ReactElement, useCallback, useState } from "react";
// import AdminSidebar from "../components/AdminSidebar"
// import TableHOC from "../components/TableHOC"
// import { Link } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";

// interface DataType{
//   photo: ReactElement;
//   name: string;
//   price: number;
//   stock: number;
//   action: ReactElement;
// }

// const columns: Column<DataType>[] = [
//   {
//     Header: "Photo",
//     accessor: "photo",
//   },

//   {
//     Header: "Name",
//     accessor: "name",
//   },

//   {
//     Header: "Price",
//     accessor: "price",
//   },

//   {
//     Header: "Stock",
//     accessor: "stock",
//   },

//   {
//     Header: "Action",
//     accessor: "action",
//   },
// ];

// const img1 =
//   "https://m.media-amazon.com/images/I/61BEhM3G1JL.jpg";

// const img2 = "https://images-cdn.ubuy.co.in/634e66890b676105a8290fa3-bombay-market-basmati-white-rice-4.jpg";

// const img3 = "https://m.media-amazon.com/images/I/71wVU7pgwAL.jpg";

// const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmRns7VOcc_oSnLDcEigPJA0Ky5FbgAzRUA&s";

// const img5 = "https://5.imimg.com/data5/ANDROID/Default/2020/11/XQ/OJ/SG/115733453/product-jpeg.jpeg";

// const img6 = "https://m.media-amazon.com/images/I/51QF8woKr5S._AC_UF894,1000_QL80_.jpg";

// const img7 = "https://www.jiomart.com/images/product/original/491553852/britannia-marie-gold-biscuits-950-g-product-images-o491553852-p491553852-1-202302260446.jpg?im=Resize=(420,420)";

// const img8 = "https://tiimg.tistatic.com/fp/1/007/678/white-smooth-natural-beauty-bar-natural-moisture-for-all-skin-dove-soap--609.jpg";

// const arr: DataType[] = [
//   {
//     photo: <img src={img1} alt="Flour" />,
//     name: "Premium Wheat Flour",
//     price: 32,
//     stock: 100,
//     action: <Link to="/admin/product/flour1">Manage</Link>,
//   },
//   {
//     photo: <img src={img2} alt="Rice" />,
//     name: "Basmati Rice",
//     price: 100,
//     stock: 50,
//     action: <Link to="/admin/product/rice1">Manage</Link>,
//   },
//   {
//     photo: <img src={img3} alt="Oil" />,
//     name: "Kachchi Ghaani Oil",
//     price: 140,
//     stock: 30,
//     action: <Link to="/admin/product/oil1">Manage</Link>,
//   },
//   {
//     photo: <img src={img4} alt="Sugar" />,
//     name: "Granulated Sugar",
//     price: 50,
//     stock: 75,
//     action: <Link to="/admin/product/sugar1">Manage</Link>,
//   },
//   {
//     photo: <img src={img5} alt="Spices" />,
//     name: "Mixed Spices Pack",
//     price: 200,
//     stock: 20,
//     action: <Link to="/admin/product/spices1">Manage</Link>,
//   },
//   {
//     photo: <img src={img6} alt="Tea" />,
//     name: "Tata Tea",
//     price: 150,
//     stock: 40,
//     action: <Link to="/admin/product/tea1">Manage</Link>,
//   },
//   {
//     photo: <img src={img7} alt="Biscuits" />,
//     name: "Assorted Biscuits",
//     price: 80,
//     stock: 60,
//     action: <Link to="/admin/product/biscuits1">Manage</Link>,
//   },
//   {
//     photo: <img src={img8} alt="Soap" />,
//     name: "Herbal Soap",
//     price: 25,
//     stock: 120,
//     action: <Link to="/admin/product/soap1">Manage</Link>,
//   },
// ];

// const products = () => {
//   const [data] = useState<DataType[]>(arr);

//   const Table = useCallback(
//     TableHOC<DataType>(columns,
//     data,
//     "dashboard-product-box", 
//     "Products",
//     true
//     ),[]
//   );

//     return (
//       <div className="adminContainer">
//         <AdminSidebar />
//         <main>
//           {Table()}
//         </main>
//         <Link to={"/admin/product/new"} className="create-product-btn">
//         <FaPlus/>
//         </Link>
//       </div>
//     )
// };

// export default products


import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const images = [
  "https://m.media-amazon.com/images/I/61BEhM3G1JL.jpg",

  "https://images-cdn.ubuy.co.in/634e66890b676105a8290fa3-bombay-market-basmati-white-rice-4.jpg",

  "https://m.media-amazon.com/images/I/71wVU7pgwAL.jpg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmRns7VOcc_oSnLDcEigPJA0Ky5FbgAzRUA&s",

  "https://5.imimg.com/data5/ANDROID/Default/2020/11/XQ/OJ/SG/115733453/product-jpeg.jpeg",

  "https://m.media-amazon.com/images/I/51QF8woKr5S._AC_UF894,1000_QL80_.jpg",

  "https://www.jiomart.com/images/product/original/491553852/britannia-marie-gold-biscuits-950-g-product-images-o491553852-p491553852-1-202302260446.jpg?im=Resize=(420,420)",

  "https://tiimg.tistatic.com/fp/1/007/678/white-smooth-natural-beauty-bar-natural-moisture-for-all-skin-dove-soap--609.jpg",

  "https://www.jiomart.com/images/product/original/490003796/surf-excel-easy-wash-detergent-powder-1-5-kg-product-images-o490003796-p490003796-0-202306240656.jpg?im=Resize=(420,420)",//9

  "https://driftbasket.com/wp-content/uploads/2018/10/masala-maggi.jpg",

  "https://www.jiomart.com/images/product/original/492519500/bajaj-100-pure-coconut-oil-600-ml-product-images-o492519500-p590860228-0-202311031841.jpg?im=Resize=(1000,1000)",//11
  
  "https://www.bigbasket.com/media/uploads/p/l/40002077_9-sunsilk-stunning-black-shine-shampoo-with-amla-oil-pearl-protein-vitamin-e-for-long-lasting-shine.jpg",
  
  "https://cdn.fcglcdn.com/brainbees/images/products/583x720/10257885a.webp",
  
  "https://www.jiomart.com/images/product/original/490002184/colgate-max-fresh-peppermint-ice-blue-gel-toothpaste-150-g-product-images-o490002184-p490002184-0-202306061334.jpg?im=Resize=(420,420)",
  
  "https://healthyhome.co.in/cdn/shop/products/1_3bde2d50-17de-42c4-95b8-82059a70a9bd_1024x1024.jpg?v=1627446914",
  
  "https://m.media-amazon.com/images/I/61BYqhOPA2L.jpg",//hu uhu h
  
  "https://m.media-amazon.com/images/I/81utAEfrk0L._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/91QK1u+ByVL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/81IuZ9fZ9LL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/81+u4gxX2BL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/91Q5Lao+xJL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/81nCAm7CAQL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/91hxDSzWq3L._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/91QKD+3P4tL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/81GD6UVopLL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/81A+oq3pNLL._SX679_.jpg",
  
  "https://m.media-amazon.com/images/I/81uCMs4H2ZL._SX679_.jpg",

  "https://m.media-amazon.com/images/I/81JThVN2g3L._SX679_.jpg"
];

const productNames = [
  "Premium Wheat Flour",
  "Basmati Rice",
  "Kachchi Ghaani Oil",
  "Granulated Sugar",
  "Mixed Spices Pack",
  "Tata Tea",
  "Assorted Biscuits",
  "Herbal Soap",
  "Detergent Powder",
  "Instant Noodles",
  "Coconut Oil",
  "Shampoo",
  "Conditioner",
  "Toothpaste",
  "Hand Wash",
  "Dish Soap",
  "Cooking Oil",
  "Pasta",
  "Salt",
  "Pepper",
  "Tomato Ketchup",
  "Soya Sauce",
  "Vinegar",
  "Olive Oil",
  "Muesli",
  "Corn Flakes",
  "Peanut Butter",
  "Honey"
];

const productPrices = [
  32, 100, 140, 50, 200, 150, 80, 25, 45, 20, 60, 70, 70, 30, 40, 35, 120, 60, 15, 25, 45, 60, 35, 200, 150, 50, 200, 150
];

const productStock = [
  100, 50, 30, 75, 20, 40, 60, 120, 110, 90, 80, 60, 60, 50, 70, 100, 80, 40, 70, 90, 50, 60, 50, 70, 40, 60, 50, 80
];

const arr: DataType[] = productNames.map((name, index) => ({
  photo: <img src={images[index]} alt={name} />,
  name,
  price: productPrices[index],
  stock: productStock[index],
  action: <Link to={`/admin/product/${name.toLowerCase().replace(/ /g, "")}${index + 1}`}>Manage</Link>
}));

const products = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(columns,
      data,
      "dashboard-product-box",
      "Products",
      true
    ), []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>
        {Table()}
      </main>
      <Link to={"/admin/product/new"} className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  )
};

export default products;