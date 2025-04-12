import React from 'react'

const CouponForm = () => {
    return (
        <section className='mb-4'>
            <label htmlFor="">Have promo code?</label>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter coupon code"
                    className="flex-grow sm:w-64 h-10 border-2 border-solid border-primary p-2 mb-2 sm:mb-0"
                />
                <input
                    type="submit"
                    value="Apply Coupon"
                    className="h-10 bg-primary text-foreground border-2 border-solid border-primary py-1 px-4 font-medium"
                />
            </div>
        </section>
    )
}

export default CouponForm
