import Typography from '@mui/material/Typography'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useParams } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const CategoryPage = () => {

    const { slug } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchCategoryProduct = async () => {

        const isMounted = true
        setLoading(true)

        try {

            const response = await axios.get(`https://dummyjson.com/products/category/${slug}`)
            setProducts(response.data.products)
            console.log(response.data.products, 'catergory products')

        } catch(error) {
            console.log(error)
        } finally {
            if(isMounted) {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchCategoryProduct()
    }, [slug])

    return (
        <section className=' bg-blue-950 p-4'>
            <article className='container-full ms-auto'>
                <Typography variant='h4' className='text-center mb-4 uppercase'>
                    { slug } Products
                </Typography>

                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-3'>
                    { loading ? (
                        <Typography variant='body2'>
                            ...Loading
                        </Typography>
                    ) : (
                        products?.length > 0 ? (
                            products.slice(0, 50)?.map((pro) => (
                                <div className='bg-white rounded p-6 border border-1 mb-3 h-full flex shadow-sm'>
                                    <div key={ pro } className='w-full h-full flex flex-col p-3'>
                                        <Typography variant='h5' className=' rounded bg-green-600 flex items-center justify-between p-2 mb-3'>
                                            <div>id</div>
                                            { pro.id }
                                        </Typography>
                                        <img src={ pro.thumbnail } loading='lazy' alt="pro-title"
                                            className=' object-contain max-h-full rounded mb-3 bg-gray-100 img-fluid w-full' srcSet='' />
                                        <Typography variant='body2' className='text-slate-700 line-clamp-1 mb-2'>
                                            { pro.title }
                                        </Typography>
                                        <div>
                                            <Typography variant='body2' className='text-slate-800 mb-2 flex items-center'>
                                                <CurrencyRupeeIcon fontSize='small' className='text-orange-400' /> { pro.price }
                                            </Typography>
                                            <Typography variant='body2' className='text-orange-400 flex items-center mb-2'>
                                                <Rating name="size-small" value={ pro.rating } precision={ 0.1 } size="small" readOnly />
                                                <span className='text-sm'> { pro.rating }</span>
                                            </Typography>
                                        </div>
                                        <div className="mt-auto pt-3 border-t flex justify-between items-center">
                                            <Typography variant="subtitle2" className="text-slate-800">
                                                { pro.availabilityStatus || "In Stock" }
                                            </Typography>
                                            <Typography variant="subtitle2" className="text-blue-900 capitalize">
                                                { pro.title }
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className=' col-span-12 flex items-center justify-center w-full h-lvh'>
                                <div className='border bg-gray-400 p-3 w-full'>
                                    <Typography variant='h2' className='text-center'>
                                        No Data Found
                                    </Typography>
                                </div>
                            </div>
                        )
                    ) }
                </div>

            </article>
        </section>
    )
}

export default CategoryPage