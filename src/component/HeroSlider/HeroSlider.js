import React, { useState } from 'react'
import Slider from 'react-slick'

const HeroSlider = () => {

    const [loading, setLoading] = useState(false)

    const sliderSettings = {

        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        lazyload: 'ondemand',
        pauseOnHover: false,
    }

    const slides = [

        {
            id: 1,
            title: 'Build Stunning Experiences',
            image: 'https://portotheme.com/html/wolmart/assets/images/demos/demo11/slides/slide-1.jpg',

        },
        {
            id: 2,
            title: 'Build Stunning Experiences',
            image: 'https://portotheme.com/html/wolmart/assets/images/demos/demo11/slides/slide-2.jpg',

        },
        {
            id: 3,
            title: 'Build Stunning Experiences',
            image: 'https://portotheme.com/html/wolmart/assets/images/demos/demo11/slides/slide-3.jpg',

        }
    ]

    return (

        <section className=' h-dvh overflow-hidden hero-slider'>
            <Slider { ...sliderSettings }>
                { loading ? (
                    <p>...Loading</p>
                ) : (
                    slides?.length > 0 ? (
                        slides?.slice(0, 10)?.map((item, index) => (
                            <div key={ index } className=' relative h-dvh'>
                                <img src={ item.image } alt={ item.image }
                                    className='w-100 object-fit-cover h-dvh' loading='lazy' />
                                <div className=' absolute inset-0 flex flex-column justify-content-center ps-2'>
                                    <h2 className='text-4xl text-slate-800 text-center'>{ item.title }</h2>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No Data Found</p>
                    )
                ) }
            </Slider>
        </section>
    )
}

export default HeroSlider