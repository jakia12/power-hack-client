import React from 'react'

const DisplayError = () => {
    // const error = useRouteError();

    // const navigate = useNavigate();
    // //get log out data from authState

    // const { logOut, setLoading } = AuthState();

    // //log out when getting error
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {
    //             navigate('/login');
    //         })
    //         .catch(err => console.log(err))
    //         .finally(() => {
    //             setLoading(false);
    //         })
    // }
    return (
        <div className='py-28 text-center'>
            <h4 className='text-gray-900 text-xl my-3'>Oops!!Something went wrong. </h4>
            <p className='text-red-500'>
                {/* {error.statusText || error.message} */}
            </p>

            <div className="text-center mt-4 mb-5">
                <button
                    className="py-2.5 hover:bg-teal-700  hover:text-white px-7  bg-teal-500 text-white rounded-lg"
                // onClick={handleLogOut}
                >Log Out</button>
            </div>
        </div>
    )
}

export default DisplayError
