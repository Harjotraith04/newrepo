import Spline from '@splinetool/react-spline';
import React from 'react';

const Model = () => {
    return (
        <>
            {/* You can uncomment the following section if needed */}
            {/* <section>
                <Spline scene="https://prod.spline.design/QsfpJfuAY1RWLm0q/scene.splinecode" />
            </section> */}

            {/* You can uncomment this div if needed */}
            {/* <div className='text-[16px] text-center justify-center items-center mt-[150px] z-1'>Hello</div> */}

            <div className='w-[394px] h-[540px] z-0 ml-[960px] mb-9'>
                <Spline scene="https://prod.spline.design/cBmeM9BUBHAK7sFL/scene.splinecode" />
            </div>
        </>
    );
}

export default Model;
