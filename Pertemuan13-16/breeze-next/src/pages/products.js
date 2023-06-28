import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Products = () => {
    const router = useRouter()
    const [Datas, setDatas] = useState([])

    useEffect(() => {
        axios
            .get('/api/products')
            .then(function (response) {
                setDatas(response.data.data)
                console.log(Datas)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [Datas])
    console.log('Data:', Datas)
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products Page
                </h2>
            }>
            <Head>
                <title>Laravel - Product</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {Datas.map(product => (
                                    <div
                                        key={product.id}
                                        className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={
                                                    'https://w7.pngwing.com/pngs/184/159/png-transparent-clothing-dress-up-fashion-rose-red-dress-leave-the-material-clothes-hanger-woman.png'
                                                }
                                                alt={product.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={product.href}>
                                                        <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0"
                                                        />
                                                        {product.product_name}
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {
                                                        product.product_description
                                                    }
                                                </p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {product.discounted_price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Products
