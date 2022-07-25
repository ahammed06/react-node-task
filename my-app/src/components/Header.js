import React from 'react'

export default function Header({productSearchFn}) {

    const resultSubmit = (e) => {
        e.preventDefault()
        productSearchFn(e.target.productSearch.value)
    }

    const openModal = (e) => {
        document.body.classList.add("modal-open");
        document.getElementById('add-product-modal').classList.add("d-block")
        document.getElementById('modal-backdrop').classList.add("d-block")
        document.getElementById('modal-backdrop').classList.add("show")
    }

    return (
        <header className='header-bg py-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='logo-container py-3'>
                            <a href='/'>
                                <img src='/common/media/LOGO.png' alt='logo' title='logo' className="img-fluid img100" />
                            </a>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='product-action-container'>
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <form id="search-box" autoComplete='off' onSubmit={resultSubmit}>
                                        <div className="form-group clearfix search-fields">
                                            <input type="text" className="search_field" placeholder='Search by Title or Brand' name="productSearch" />
                                            <button type='submit' className="search_submit" ><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-sm-4'>
                                    <button type='button' className='add_product_opener' onClick={openModal}>Add Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}