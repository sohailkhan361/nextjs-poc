import React from 'react'
import ItemCard from '../Home/ItemCard'
import Form from './Form'

const BookingModal = ({ selectedItem }: any) => {
    return (
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
            <div className='border-b-[1px] pb-2'>
                <h3 className='text-[30px] font-light text-gray-400'>
                    Get your book now!
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <ItemCard item={selectedItem} />
                </div>
                <div>
                    <Form item={selectedItem} />
                </div>
            </div>
        </form>
    )
}

export default BookingModal