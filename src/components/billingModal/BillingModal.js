import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';

const BillingModal = () => {
    //get the logged in user name and email
    const { user } = AuthState();

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const amount = form.amount.value;

        if (phone.length < 11) {
            alert("please enter 11 digit");
        } else if (typeof amount !== "Number") {
            alert('please enter numeric value');
        } else {
            alert('form submitted');
        }



        console.log(booking);



        //create booking data and send it to the server
        // fetch('https://vendor-store-server.vercel.app/bookings', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',

        //     },
        //     body: JSON.stringify(booking)
        // }).then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.acknowledged) {
        //             toast.success(`Wow!!! Your product is booked successfully`, {
        //                 position: toast.POSITION.TOP_CENTER,
        //                 toastId: customId1,
        //                 autoClose: 1000
        //             });

        //             setProductInfo(null);


        //         }

        //     })
        //     .catch(err => console.log(err))
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative w-11/12 max-w-xl">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-2xl text-center py-3 font-semibold">Get {name} Now!</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                        <div className="mb-1">

                            <input
                                type="text"
                                name="userName"

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue={user ? user.displayName : "Unauthourized "}
                                readOnly
                                disabled
                                required

                            />

                        </div>
                        <div className="mb-1">

                            <input
                                type="email"
                                name="email"

                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue={user ? user.email : "Unauthourized "}
                                readOnly
                                disabled
                                required

                            />

                        </div>
                        <div className="mb-1">

                            <input
                                type="text"
                                name="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required

                            />
                        </div>

                        <div className="mb-1">

                            <input
                                type="text"
                                name="amount"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                                required
                            />

                        </div>


                        <button className='bg-firstCol text-white hover:bg-secondCol py-2 rounded-lg text-lg' type="submit" >
                            Purchase
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BillingModal
