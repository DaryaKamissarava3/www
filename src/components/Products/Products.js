import React from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductsItem from "../ProductsItem/productsItem";
import './products.css';
import More from "../../assets/images/more.svg"
import Slider from "../Slider/Slider";
import {useDispatch} from "react-redux";
import allActions from "../../redux/actions";


const Products = () => {
  const [minNumberImg, setMinNumberImg] = useState(0);
  const [maxNumberImg, setMaxNumberImg] = useState(4);

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://modnikky-api.herokuapp.com/api/catalog')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        dispatch(allActions.productsAction.fetchData(data));
      });
  }, []);

  const scrollAhead = () => {
    setMaxNumberImg(maxNumberImg + 1);
    setMinNumberImg(minNumberImg + 1);
  };

  const scrollBack = () => {
    setMaxNumberImg(maxNumberImg - 1);
    setMinNumberImg(minNumberImg - 1);
  };

  return (
    <div className="products-section container">
      <div className="section-header">
        <h2 className="section-products">#MODNIKKY_Sale</h2>
      </div>
      <div className="products">
        <div className="products-items">
          <Slider
            sliderBtn={More}
            changeSlide={scrollBack}
            classForBtn="minus"
            minNumberOfImg={minNumberImg}
          />
          {products.slice(minNumberImg, maxNumberImg).map((item) =>
            (
              <Link className="product-link" to={`/products/${item.id}`} key={item.id}>
                <ProductsItem
                  imgUrl={item.images[0]}
                  name={item.name}
                  type={item.type}
                  price={item.price}
                  color={item.color}
                  availableSizes={item.availableSizes}
                  description={item.description}
                  key={item.id}
                />
              </Link>
            ))}
          <Slider
            sliderBtn={More}
            changeSlide={scrollAhead}
            classForBtn="plus"
            maxNumberOfImg={maxNumberImg}
            numberOfImg={products.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;