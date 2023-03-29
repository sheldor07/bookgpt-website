const BookTemplate = ({ img, price, title, description }) => {
    return (
        <div className="bg-[#1b1b1b] shadow-black card rounded-lg shadow-lg transform transition duration-300 hover:bg-[#3d3c3c]" style={{ cursor: 'pointer', maxHeight: '700px' }}>
            <img src={img} alt={title} className="w-full object-cover h-[45%] md:h-[30%] lg:h-[50%]" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-gray-400">{price}</p>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    )
}

export default BookTemplate