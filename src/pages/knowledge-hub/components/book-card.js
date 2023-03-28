import React from 'react'

const BookTemplate = ({ img, price, title, description }) => {
    return (
<div className="bg-[#1b1b1b] shadow-black card rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:bg-[#3d3c3c]" style={{ cursor: 'pointer', minHeight: '700px' }}>
            <img src={img} alt={title} className="h-full object-cover" />
            <div className="p-4">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <p className="text-gray-400 mt-2">{price}</p>
                <p className="text-gray-300 mt-2">{description}</p>
            </div>
        </div>
    )
}

export default BookTemplate