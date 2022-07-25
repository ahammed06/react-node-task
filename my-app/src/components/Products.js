import React, { useEffect, useState } from 'react'
import axios from "axios";

var showMore = true
var loading = false
var limit = 20
var offset = 0
var sort = 0

export default function Products({productSearch,newProduct}) {
    const [productData, setProductData] = useState([])
    const [productSearchText, setProductSearchText] = useState([])

    useEffect(() => {
        setProductSearchText(productSearch)
        let plen = 0
        if(newProduct){
            offset=0
            showMore=true
        }else{
            plen = productData.length
        }
        if(productSearch===''){
            axios
                .get(`http://localhost:4000/view/get-product/${limit}/${offset}/${sort}`)
                .then(({ data }) => {
                    if (data.data.length < limit || plen+data.data.length>=data.count) {
                        showMore = false
                    }
                    setProductData(data.data)
                });
        } else {
            offset = 0;
            axios
                .post(`http://localhost:4000/view/search-product/${limit}/${offset}/${sort}`, {'productSearch': productSearch})
                .then(({ data }) => {
                    if (data.data.length < limit || plen+data.data.length>=data.count) {
                        showMore = false
                    }
                    setProductData(data.data)
                });
        }
    }, [productSearch, newProduct])

    const sortProduct = (e) => {
        offset = 0;
        sort = e.target.value;
        if(productSearch===''){
            axios
                .get(`http://localhost:4000/view/get-product/${limit}/${offset}/${sort}`)
                .then(({ data }) => {
                    if (data.data.length < limit || productData.length+data.data.length>=data.count) {
                        showMore = false
                    }
                    setProductData(data.data)
                });
        } else {
            axios
                .post(`http://localhost:4000/view/search-product/${limit}/${offset}/${sort}`, {'productSearch': productSearch})
                .then(({ data }) => {
                    if (data.data.length < limit || productData.length+data.data.length>=data.count) {
                        showMore = false
                    }
                    setProductData(data.data)
                });
        }
    }

    window.onscroll = function(event) {
        var elmnt = document.getElementById("products-list-container");
        var loader = document.getElementById("load_more");

        if (window.pageYOffset > ((elmnt.offsetHeight + elmnt.offsetTop) - window.innerHeight) && showMore && !loading) {
            loader.style.display = "block";
            offset = productData.length;
            loading = true;
            setTimeout(() => {
                if(productSearch===''){
                    axios
                        .get(`http://localhost:4000/view/get-product/${limit}/${offset}/${sort}`)
                        .then(({ data }) => {
                            if (data.data.length < limit || productData.length+data.data.length>=data.count) {
                                showMore = false
                            }
                            for (let i = 0; i < data.data.length; i++) {
                                setProductData(oldArray => [...oldArray, data.data[i]]);
                            }
                            loader.style.display = "none";
                            loading = false;
                        });
                } else {
                    axios
                        .post(`http://localhost:4000/view/search-product/${limit}/${offset}/${sort}`, {'productSearch': productSearch})
                        .then(({ data }) => {
                            if (data.data.length < limit || productData.length+data.data.length>=data.count) {
                                showMore = false
                            }
                            for (let i = 0; i < data.data.length; i++) {
                                setProductData(oldArray => [...oldArray, data.data[i]]);
                            }
                            loader.style.display = "none";
                            loading = false;
                        });
                }
            }, 1500);
        }
    };

    return (
        <div className='row products my-5 py-5'>
            <div className='col-sm-12 pb-2'>
                <div className='products-title-container'>
                    <h4 className='products-title'>All Products</h4>
                    <div className="products-sort-container">
                        <label>Sort By: </label>
                        <select name='sort' className='sort-product' onChange={sortProduct}>
                            <option value='0'>All Products</option>
                            <option value='1'>Best Value</option>
                            <option value='3'>Best Performance</option>
                            <option value='2'>Best Camera</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='col-sm-12'>
                <div className='products-list-container' id='products-list-container'>
                    <div className='row products-list-head'>
                        <div className='col-sm-5'>Model</div>
                        <div className='col-sm-2'>Ram/Rom</div>
                        <div className='col-sm-3'>Tag</div>
                        <div className='col-sm-2 text-end'>Price</div>
                    </div>
                    {productData.map((nc, i) => {
                        return (
                            <React.Fragment key={nc.ProductID}>
                                <div className='row products-list-row'>
                                    <div className='col-sm-5'>
                                        <div className='row'>
                                            <div className='col-3'>
                                                { nc.Name ?
                                                    <img src={'uploads/'+nc.Image} alt={nc.Name} title={nc.Name} className='w-100' />
                                                : false }
                                            </div>
                                            <div className='col-9'>
                                                <h6 className='product-title'>{nc.Name}</h6>
                                                <p className='product-brand'>{nc.Brand}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-2'>
                                        <p className='product-ram-rom'>{nc.RamRom}</p>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='product-tags'>
                                            {(nc.Tags).includes("1") ? (
                                                <div className='tag value'>Best value</div>
                                            ) : false }
                                            {(nc.Tags).includes("2") ? (
                                                <div className='tag camera'>Best camera</div>
                                            ) : false }
                                            {(nc.Tags).includes("3") ? (
                                                <div className='tag performance'>Best performance</div>
                                            ) : false }
                                        </div>
                                    </div>
                                    <div className='col-sm-2 text-end'>TK {nc.Price}</div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    <div className='load_more' id='load_more'>
                        <img src='/common/media/loading.gif' alt='loader' title='loader' className='loader-image w-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}