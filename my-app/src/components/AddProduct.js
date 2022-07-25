import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from "axios";

var tags = []

export default function Header({newProductFn}) {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

    const options = [
        { value: '1', label: 'Best value' },
        { value: '2', label: 'Best camera' },
        { value: '3', label: 'Best performance' }
    ]

    useEffect(() => {
    }, [])

    const closeModal = (e) => {
        document.body.classList.remove("modal-open");
        document.getElementById('add-product-modal').classList.remove("d-block")
        document.getElementById('modal-backdrop').classList.remove("d-block")
        document.getElementById('modal-backdrop').classList.remove("show")
        document.getElementById("add_product_form").reset();
    }

    const resultSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData();
        formData.append('Name', e.target.txtName.value);
        formData.append('Brand', e.target.txtBrand.value);
        formData.append('RamRom', e.target.txtRamRom.value);
        let txtTags = (tags.map(a => a.value)).toString();
        formData.append('Tags', txtTags);
        formData.append('Price', e.target.txtPrice.value);
        formData.append('Image', selectedFile);

        axios
            .post(`http://localhost:4000/insert/add-product`, formData)
            .then(({ data }) => {
                if(!data.error){
                    newProductFn(formData)
                    closeModal()
                    document.getElementById("add_product_form").reset();
                }
            });
    }

    const getVal = (value) => {
        tags = value;
    }
    const fileChangeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

    return (
        <>
            <div id='add-product-modal' className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" id='add-product-modal-close' className="add-product-modal-btn-close" onClick={closeModal}><i className="fa fa-times"></i></button>
                        </div>
                        <div className="modal-body">
                        <form id="add_product_form" autoComplete='off' onSubmit={resultSubmit}>
                            <div className="form-group clearfix">
                                <label className="control-label" htmlFor="txtName">Product name</label>
                                <input type="text" id="txtName" name="txtName" className="form-control" placeholder='Enter your product name' required="required" maxLength="200" />
                            </div>
                            <div className="form-group clearfix row">
                                <div className='col-sm-6'>
                                    <label className="control-label" htmlFor="txtBrand">Brand</label>
                                    <input type="text" id="txtBrand" name="txtBrand" className="form-control" placeholder='Enter brand name' required="required" maxLength="200" />
                                </div>
                                <div className='col-sm-6'>
                                    <label className="control-label" htmlFor="txtRamRom">Ram/Rom</label>
                                    <input type="text" id="txtRamRom" name="txtRamRom" className="form-control" placeholder='Enter Ram/Rom' required="required" maxLength="20" />
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <label className="control-label" htmlFor="txtTags">Tags</label>
                                <Select options={options} isMulti className="basic-multi-select" classNamePrefix="select" placeholder="Search and Select" name='txtTags' required="required" onChange={getVal} />
                            </div>
                            <div className="form-group clearfix row">
                                <div className='col-sm-6'>
                                    <label className="control-label" htmlFor="fileImage">Image</label>
                                    <input type="file" id="fileImage" name="fileImage" className="form-control" placeholder='Enter your product image' required="required" onChange={fileChangeHandler} />
                                </div>
                                <div className='col-sm-6'>
                                    <label className="control-label" htmlFor="txtPrice">Price</label>
                                    <input type="text" id="txtPrice" name="txtPrice" className="form-control" placeholder='Enter your product price' required="required" maxLength="10" />
                                </div>
                            </div>

                            <div className="actions clearfix">
								<ul className='action-btn-container'>
                                    <li>
                                        <button type='button' className='btnCancel' onClick={closeModal}><i className="far fa-times-circle"></i> Cancel</button>
                                        <button type='submit' className='btnSubmit'><i className="far fa-check-circle"></i> Publish</button>
								    </li>
                                </ul>
							</div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id='modal-backdrop' className="modal-backdrop fade"></div>
        </>
    )
}