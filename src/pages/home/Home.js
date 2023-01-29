import React, { useState } from 'react'
import BillingDeleteModal from '../../components/billingDeleteModal/BillingDeleteModal';
import { AuthState } from '../../context/AuthProvider';

const Home = () => {

    //geth logged in user info
    const { user } = AuthState();
    //state to save the deleted Item data
    const [deletedItem, setDeletedItem] = useState(null);

    //display delete modal clicking on delete button
    const handleShow = (product) => {
        setDeletedItem(product);
    }
    return (
        <section className="py-20 ">
            <div className="container w-full mx-auto md:max-w-7xl px-8">
                <div className="bg-gray-200 py-5 px-4  mb-7 rounded shadow-md">
                    <div className="md:flex items-center justify-center md:justify-between">
                        <div className="flex items-center justify-center  ">
                            <h3 className="text-lg font-medium text-dark mr-6">Billings</h3>

                            <form className="flex items-center">
                                <label for="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                </div>

                            </form>

                        </div>

                        <div className="pt-7 md:pt-0 px-2 md:py-1">
                            <label
                                htmlFor="my-modal-3"
                                className="bg-gray-700 text-white hover:bg-gray-900 rounded-lg text-normal py-3 px-7 cursor-pointer"
                            // onClick={() => handleShow(product)}
                            >Add New Bill</label>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Billing Id
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Full Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Email
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Phone
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Paid Amount
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr className="border-b shadow-lg shadow-gray-100 m-3 md:shadow-none md:rounded-none md:m-0 dark:bg-gray-900 dark:border-gray-700 bg-gray-100">
                                <th scope="row" className="py-4 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                </th>
                                <td className="py-4 px-5 text-darkBlack text-normal">

                                </td>
                                <td className="py-4 px-5">

                                </td>
                                <td className="py-4 px-5">


                                </td>
                                <td className="py-4 px-5">


                                </td>

                                <td className="py-4 px-5">


                                    <button

                                        className="bg-yellow-300 text-white hover:bg-yellow-400 rounded-lg text-normal py-3 px-7 mr-4"
                                    // onClick={() => handleShow(product)}
                                    >Edit</button>



                                    <label
                                        htmlFor="my-modal-3"
                                        className="bg-firstCol text-white hover:bg-secondCol rounded-lg text-normal py-3 px-7"
                                    // onClick={() => handleShow(product)}
                                    >Delete</label>

                                    {/* {
                                        deletedItem && (
                                            <BillingDeleteModal
                                                handleDelete={handleDelete}
                                                deletedItem={deletedItem}
                                            />
                                        )
                                    } */}

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Home
