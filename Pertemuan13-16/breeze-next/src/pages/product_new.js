import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductNew = () => {
    const router = useRouter();

    const handeSubmit = async(event) => {
        event.preventDefault();
        await axios.post('/api/products', {
            name: event.target.name.value,
            price: event.target.price.value,
            description: event.target.description.value
        }).then(response => {
            console.log('response', response.data);
        }).catch(error => {
            console.log('error', error);
        });
        router.push('/products');
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    New Product
                </h2>
            }>
            <Head>
                <title>Laravel - New Product</title>
            </Head>

            <div className="py-12">
                <form
                    onSubmit={handeSubmit}
                    method="POST"
                    className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold leading-6 text-gray-900">
                                Product Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-semibold leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-semibold leading-6 text-gray-900">
                                Description
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}

export default ProductNew
