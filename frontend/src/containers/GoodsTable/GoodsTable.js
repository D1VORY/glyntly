import React, {useState} from 'react'
import Card from '../../components/Card';

import goodsData from './goods.json';
import styles from './GoodsTable.module.scss'

function GoodsTable(){
    const [goods, setGoods] = useState(Array(16).fill(goodsData.data[0]))
    //const [goods, setGoods] = useState(goodsData.data)
   
    //setGoods(kek.fill(goodsData.data[0]));
    //console.log(goods);
    return(
        <div className={styles.container}>
            {
                goods.map(sneaker =>( <div className={styles.element} > <Card {...sneaker}/> </div> )) 
            }
        </div>
    );
}

export default GoodsTable;