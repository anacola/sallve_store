import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header'
import Button from './components/Button'

function App() {

  const [productList, setProductList] = useState([]);
  const [productSku, setProductSku] = useState([]);
  const [productSelect, setProductSelect] = useState([]);
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    Axios.all([
      Axios.get('http://localhost:3001/product/get'),
      Axios.get('http://localhost:3001/sku/get'),
    ])
      .then(Axios.spread((products, skus) => {
        setProductList(products.data);
        setProductSku(skus.data);
      }))
  }, [])  

  const addProductToCart = (e, val, sku) => {
    e.preventDefault();
    setAddToCart(true);
      
    if (!productSelect.includes(val, sku)) {
      val.contador = 1;
      val.value = sku.price
      val.total = val.contador * val.value
      
      setProductSelect([...productSelect, val])
    } else {
      val.value = sku.price
      val.total = val.total + val.value
      val.contador += 1;
      setProductSelect([...productSelect])
    }
  
  }; 

  const increaseUnit = product => {
    if (!productSelect.includes(product)) {
        product.contador = 1;
        setProductSelect([...productSelect, product])
    } else {
        product.contador += 1;
        setProductSelect([...productSelect])
    }
  };

const decreaseUnit = (product) => {
  if (product.contador === 1) {
      const removeProductFromScreen = productSelect.filter(erase => {
          return erase !== product;
      });
      setProductSelect([...removeProductFromScreen])
  } else {
      product.contador--
      setProductSelect([...productSelect])
  }
};

const totalOrder = productSelect.reduce((acc, val) => {
  return acc + val.contador * val.value }, 0);


const deletProduct = (item) => {
  const index = (productSelect.indexOf(item));
  productSelect.splice(index, 1);
  setProductSelect([...productSelect]);
};



  return (
    <>
      <Header />
      <div className={'app'}>
        <section className={'list'}>

          <div className={'card'}>
            {productList.map((val, index) => {
              return (
                <div className={'product'} key={val.id}>
                  <img src={val.image} className={'cardImage'} />
                  <h3 className={'productName'}>{val.name} </h3>
                  {productSku.map((sku) => {
                    if (sku.productId === val.id) {
                      return (
                        <div>
                          <p className="textCard"> R${sku.price},00</p>
                          <Button
                              handleClick={ (e) =>{
                                addProductToCart(e, val, sku)
                              }}
                              index={index}
                              className={'btn-buy'}
                              text={'comprar'}
                          />
                        </div>
                      )
                    }
                  })}
                  
                </div>
              )
            })
            }

          </div>
        </section>

        
        <div className={'cart'}>
          <div>
            {addToCart ? 
              <div>
                <h2 className={'textCart'}>Sua sacola</h2>
                {productSelect.map((product, index)=>{
                  return(
                    <div className={'cartProduct'} key={index}>
                      <img src={product.image} className={'cartImage'} />
                        <section className={'cartSection'}>
                          <section className={'nameAndDelete'}>
                            <h4 className={'textCart'}>{product.name} </h4>
                            <Button
                              className={'btn-small-del'}
                              text={'X'} handleClick={(e) => {
                                e.preventDefault();
                                deletProduct(product);
                              }}
                            />
                          </section>
                          <div className={'buttons'}>
                            <Button
                              className={'btn-small'}
                              text={'+'}
                              handleClick={(e) => {
                                  e.preventDefault()
                                  increaseUnit(product)
                              }}
                            />
                            <p className={'textCart'}>{product.contador}</p>
                            <Button
                              className={'btn-small'}
                              text={'-'}
                              handleClick={(e) => {
                                  e.preventDefault()
                                  decreaseUnit(product)
                              }}
                            />
                          </div> 
                        </section>  
                      </div>
                  ) 
                })}
                <h3 className={'textCart'}>Total:{totalOrder.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
              </div>
            : <h4 className={'textCart'}> ops! sua sacola ainda está vazia. vem cá descobrir nossas fórmulas e escolher a sua!</h4>}
          </div>
        </div>
      </div>

    </>

  );
}

export default App;