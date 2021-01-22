import React, {useEffect, useState} from "react";
import background from "../../assets/images/banner-1.jpg";
import LeftSideMenu from './Component/LeftSideMenu'
import Product from './Component/Product'
import {getBook, getCategories, getBookCategory} from '../../services/home.services'
import ProductHeader from "./Component/ProductHeader";
import Pagination from "./Component/Pagination";
function Home() {
  
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(true);

  useEffect(()=>{
    if(isLoading){
      getBook(page,9)
      .then((response)=>{
        setProducts(response.data.data)
      })
      .catch(()=>{
        console.log('error!!');
      })

      getCategories()
      .then((response)=>{
        setCategories(response.data)
      })
      .catch(()=>{
        console.log('error!!');
      })
    }
    setIsloading(false);
    
  })

  const onClickCategory = (loaiId) =>{
    getBookCategory(loaiId,page,9)
    .then((response)=>{
      setProducts(response.data.data)
      console.log("Okela get product category")
    })
    .catch(()=>{
      console.log('error!!');
    })
  }

  return (
    <>
      <div>
        <section
          className="box box-image bg-light text-white"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container">
            <header className="wow fadeInUp" data-wow-delay=".1s">
              <div className="row justify-content-center pt-5 text-center">
                <div className="col-lg-8">
                  <h1 className="mb-0">Everything you love</h1>
                  <p>
                    Find new items now, with great deals and limited time offers
                  </p>
                </div>
              </div>
            </header>
          </div>
        </section>
        {/* Products grid */}
        <section className="bg-white p-0 sider sider-left">
          <div className="container">
            <div className="row">
              {/* Left side filters */}
              <LeftSideMenu categories={categories} onClickCategory={onClickCategory}/>
              {/* Products content */}
              <div className="col-lg-9 bg-white pl-lg-5">
                {/* ProductHeader */}
                <ProductHeader/>
                {/* Products collection */}
                <div className="row gutters-mobile">
                  {products.map(function(product, index){
                    return (<Product product={product}/>)
                  })}
                  
                </div>
                <Pagination/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
