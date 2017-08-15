import React from 'react';
import {connect} from 'dva';

// import ProductList from '../../components/common/ProductList';

const Main = ({ dispatch, products }) => {


  // const qus = [{
  //     name:'232',
  //     list:'dsf'
  // },{
  //     name:'232',
  //     list:'dfsd'
  // }];

  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
    <div>
        <h2>代办事项</h2>
        <br/>
        <div style={{ width: 400, height:150,backgroundColor:'#8893a6',float:'left',marginRight:30}}>
        </div>
        <div style={{ width: 400, height:150,backgroundColor:'#8893a6',float:'left'}}>
        </div>
        <br/>
        <br style={{clear:'both'}}/>
        
        <h2 style={{marginTop:40}}>模块总览</h2>
        <br/>
        <div style={{ width: 400, height:150,backgroundColor:'#8893a6',float:'left',marginRight:30}}></div>
        <div style={{ width: 400, height:150,backgroundColor:'#8893a6',float:'left',marginRight:30}}></div>
        <div style={{ width: 400, height:150,backgroundColor:'#8893a6',float:'left'}}></div>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Main);
