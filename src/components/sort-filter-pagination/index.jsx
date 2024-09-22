import { useEffect, useState } from "react";
import "./style.css";

const SearchFilterPagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortVlaue, setSortValue] = useState("asc");
  const [query, setQuery] = useState("");
  const [cate, setCat] = useState("");

  const [category, setCategory] = useState([]);

  const getProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data.products && data.products.length > 0) {
      setProducts(data.products);
      const cat = data.products.map((item) => item.category);
      const unique = [...new Set(cat)];
      setCategory(unique);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const transformedProducts = () => {
    let newProducts = products;

    newProducts.sort((a, b) =>
      sortVlaue === "asc" ? a.price - b.price : b.price - a.price
    );

    newProducts = products.filter((item) =>
      item.category.toLowerCase().includes(cate.toLowerCase())
    );

    // if (newProducts.length === 0) {
    //   return products;
    // }

    if (query && query.length > 0) {
      newProducts = products.filter((prod) =>
        prod.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return newProducts;
  };

  return (
    <div className="container">
      <h2 className="heading">sort filter and pagination</h2>

      <div className="main-container">
        <div className="filter-container">
          <h3 style={{ fontSize: "18px" }}>sort filter search here</h3>

          <div>
            <div>
              <input
                style={{ border: "1px solid black", padding: "5px" }}
                onChange={(e) => setQuery(e.target.value)}
              />{" "}
              <button style={{ border: "1px solid black", padding: "5px" }}>
                search
              </button>
            </div>
            <div>
              sort:
              <select
                style={{ border: "1px solid black ", padding: "5px" }}
                onChange={(e) => setSortValue(e.target.value)}
              >
                <option disabled defaultChecked>
                  price
                </option>
                <option value="dsc">High to low</option>
                <option value="asc">low to high</option>
              </select>
            </div>
            <div>
              filter{" "}
              <select
                style={{ border: "1px solid black ", padding: "5px" }}
                onChange={(e) => setCat(e.target.value)}
              >
                {category.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="product-container">
          <h3 style={{ fontSize: "18px" }}>products</h3>
          <div className="product-wrapper">
            {products.length > 0 &&
              transformedProducts()
                .slice(page * 10 - 10, page * 10)
                .map((product) => (
                  <div
                    key={product.id}
                    style={{
                      border: "2px solid black",
                      gap: "5px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={product.thumbnail} style={{ height: "150px" }} />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                  </div>
                ))}
          </div>
          <div style={{ margin: "10px" }}>
            <button
              style={{
                fontSize: "18px",
                border: "1px solid black",
                padding: "10px",
              }}
              onClick={() => setPage(page + 1)}
              disabled={page === products.length / 10}
            >
              next
            </button>
            <button>
              {[...Array(products.length / 10)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "18px",
                    border: "1px solid black",
                    padding: "10px",
                    backgroundColor: page === i + 1 ? "gray" : "",
                  }}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </span>
              ))}
            </button>
            <button
              style={{
                fontSize: "18px",
                border: "1px solid black",
                padding: "10px",
              }}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              prev
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterPagination;
