import React, { useState } from 'react'
import LogInAndSignIn from './LogInAndSignIn'

const AuthenticateRequire = () => {

    const [showAuth, setShowAuth] = useState(false)

    // Sign In is shown by default
    const [logIn, setLogIn] = useState(true)
    const [signIn, setSignIn] = useState(false)

    return (
        <div className='relative h-dvh w-dvw bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 flex justify-center items-center px-4'>

            {/* Main Card */}
            <div className='w-full max-w-2xl min-h-[420px] bg-white rounded-3xl shadow-2xl flex flex-col justify-center items-center px-8 md:px-16 py-10 gap-6 border border-gray-200'>

                <div className='w-20 h-20 rounded-full bg-gray-100 flex justify-center items-center shadow-inner'>
                    <img
                        className='w-10 h-10'
                        src="https://cdn-icons-png.flaticon.com/128/4448/4448933.png"
                        alt="Authentication required"
                    />
                </div>

                <h1 className='text-3xl md:text-4xl font-bold text-gray-900 text-center'>
                    Login to continue
                </h1>

                <p className='max-w-lg text-center text-gray-500 text-base md:text-lg leading-relaxed'>
                    Reservation booking and dashboard management are reserved
                    exclusively for registered QuickDine members.
                </p>

                <button
                    onClick={() => setShowAuth(true)}
                    className='w-full max-w-xs h-14 bg-black text-white rounded-xl text-lg font-semibold
                    hover:bg-gray-800 hover:scale-105
                    active:scale-95
                    transition-all duration-200 shadow-lg'
                >
                    AUTHENTICATE
                </button>

                <p className='text-sm text-gray-400'>
                    Don't have an account? You can create one after authentication.
                </p>

            </div>

            {/* Authentication */}
            {showAuth && (
                <LogInAndSignIn
                    prop={{
                        logIn,
                        setLogIn,
                        signIn,
                        setSignIn
                    }}
                />
            )}

        </div>
    )
}

export default AuthenticateRequire