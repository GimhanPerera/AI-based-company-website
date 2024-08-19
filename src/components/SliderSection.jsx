import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { customers } from '../constants';
import Heading from './Heading';

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Below 1024px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // Below 640px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
        <Heading className='pt-24 pb-3 text-center' title="Customer Testimonials" />
        <div className='max-w-[1000px] m-auto'>
            <div className='mt-20'>
            <Slider {...settings}>
                {customers.map((item) => (
                        <div className='bg-white h-[360px] text-black rounded-xl shadow-xl backdrop-blur-sm'>
                            <div className='h-40 bg-indigo-950 flex justify-center items-center rounded-t-xl'>
                                <img src={item.imageUrl} alt='' className='h-40 w-40 rounded-full' />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2 p-4'>
                                <p className='text-xl font-semibold'>{item.title}</p>
                                <p className='text-justify'>{item.text}</p>
                            </div>
                        </div>
                ))}
                    </Slider>
            </div>
        </div>
        </>
    );
};

export default SliderSection;
