import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import { useLocation } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();
  let keyword = useLocation().search;

  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  const [category, setCategory] = useState("all");

  useEffect(() => {
    dispatch(listProducts(keyword, category));
  }, [dispatch, keyword, category]);

  let categoryProds = products;
  if (category !== "all") {
    categoryProds = products.filter(
      (product) => product.category === category
    );
  }

  return (
    <div>
      {!keyword && <ProductCarousel />}

      <h1>Latest Products</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Cameras">Cameras</option>
      </select>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {categoryProds.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
