import React from 'react';
import {connect} from 'dva';
import ProductList from '../../components/common/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>产品列表</h2>

    </div>
  );
};

// <ProductList onDelete={handleDelete} products={products} />

// export default connect(({products}) => {
//   products
// })(Products);

export default connect(({ products }) => ({
  products,
}))(Products);
