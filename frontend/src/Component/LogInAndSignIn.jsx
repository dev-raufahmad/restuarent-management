import React from "react";
import {
    X,
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff
} from "lucide-react";

const LogInAndSignIn = ({ prop }) => {

    const {
        setLogIn,
        setSignIn,
        logIn,
        signIn
    } = prop;

    const [showPassword, setShowPassword] = React.useState(false);

    if (!signIn && !logIn) return null;

    const closeModal = () => {
        setLogIn(false);
        setSignIn(false);
    };

    const openSignIn = () => {
        setLogIn(true);
        setSignIn(false);
        setShowPassword(false);
    };

    const openSignUp = () => {
        setLogIn(false);
        setSignIn(true);
        setShowPassword(false);
    };

    return (
        <div className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
            p-4
        ">

            {/* Main Modal */}

            <div
                className="
                    w-full
                    max-w-[520px]
                    h-[90vh]
                    max-h-[90vh]
                    bg-white
                    shadow-2xl
                    overflow-y-auto
                    overflow-x-hidden
                "
            >

                {/* ================= TABS ================= */}

                <div className="
                    sticky
                    top-0
                    z-20
                    w-full
                    h-[55px]
                    flex
                    bg-white
                    border-b
                    border-gray-100
                ">

                    {/* SIGN IN */}

                    <button
                        type="button"
                        onClick={openSignIn}
                        className={`
                            w-1/2
                            h-full
                            text-sm
                            font-medium
                            tracking-widest
                            transition-all
                            duration-300

                            ${
                                logIn
                                    ? `
                                        bg-white
                                        text-black
                                        border-b-[3px]
                                        border-black
                                    `
                                    : `
                                        bg-gray-50
                                        text-gray-400
                                        hover:text-black
                                    `
                            }
                        `}
                    >
                        SIGN IN
                    </button>


                    {/* SIGN UP */}

                    <button
                        type="button"
                        onClick={openSignUp}
                        className={`
                            w-1/2
                            h-full
                            text-sm
                            font-medium
                            tracking-widest
                            transition-all
                            duration-300

                            ${
                                signIn
                                    ? `
                                        bg-white
                                        text-black
                                        border-b-[3px]
                                        border-black
                                    `
                                    : `
                                        bg-gray-50
                                        text-gray-400
                                        hover:text-black
                                    `
                            }
                        `}
                    >
                        SIGN UP
                    </button>

                </div>


                {/* ================================================= */}
                {/* ==================== SIGN IN ==================== */}
                {/* ================================================= */}

                {logIn && (

                    <form
                        className="
                            relative
                            w-full
                            px-[10%]
                            pt-9
                            pb-8
                        "
                    >

                        {/* CLOSE BUTTON */}

                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Close"
                            className="
                                absolute
                                top-4
                                right-4
                                z-30
                                w-9
                                h-9
                                flex
                                items-center
                                justify-center
                                rounded-full
                                text-gray-500
                                hover:text-black
                                hover:bg-gray-100
                                transition-all
                                duration-200
                            "
                        >
                            <X
                                size={22}
                                strokeWidth={1.5}
                            />
                        </button>


                        {/* Heading */}

                        <div className="text-center mb-9">

                            <h1 className="
                                text-[34px]
                                sm:text-[38px]
                                leading-tight
                                font-serif
                                font-medium
                                text-black
                            ">
                                Welcome to QuickDine
                            </h1>

                            <p className="
                                mt-3
                                text-[14px]
                                sm:text-[16px]
                                text-gray-500
                                tracking-wide
                            ">
                                Access your account and continue
                                your dining experience.
                            </p>

                        </div>


                        {/* EMAIL */}

                        <div className="mb-7">

                            <label className="
                                block
                                text-[13px]
                                sm:text-[14px]
                                font-medium
                                tracking-wider
                                text-gray-500
                                mb-3
                            ">
                                EMAIL ADDRESS
                            </label>

                            <div className="relative">

                                <Mail
                                    size={22}
                                    strokeWidth={1.5}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                />

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        pr-2
                                        text-[17px]
                                        text-gray-800
                                        placeholder-gray-400
                                        border-b
                                        border-gray-300
                                        outline-none
                                        focus:border-black
                                        transition-all
                                        duration-300
                                    "
                                />

                            </div>

                        </div>


                        {/* PASSWORD */}

                        <div className="mb-3">

                            <label className="
                                block
                                text-[13px]
                                sm:text-[14px]
                                font-medium
                                tracking-wider
                                text-gray-500
                                mb-3
                            ">
                                PASSWORD
                            </label>

                            <div className="relative">

                                <Lock
                                    size={22}
                                    strokeWidth={1.5}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        pr-10
                                        text-[17px]
                                        text-gray-800
                                        placeholder-gray-400
                                        border-b
                                        border-gray-300
                                        outline-none
                                        focus:border-black
                                        transition-all
                                        duration-300
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="
                                        absolute
                                        right-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        hover:text-black
                                        transition-colors
                                    "
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>

                            </div>

                        </div>


                        {/* FORGOT PASSWORD */}

                        <div className="
                            flex
                            justify-end
                            mt-3
                        ">

                            <button
                                type="button"
                                className="
                                    text-sm
                                    text-gray-500
                                    hover:text-black
                                    hover:underline
                                    transition-all
                                "
                            >
                                Forgot Password?
                            </button>

                        </div>


                        {/* SIGN IN BUTTON */}

                        <button
                            type="submit"
                            className="
                                w-full
                                h-[60px]
                                mt-9
                                bg-black
                                text-white
                                text-[16px]
                                font-semibold
                                tracking-widest
                                hover:bg-gray-800
                                active:scale-[0.99]
                                transition-all
                                duration-300
                            "
                        >
                            SIGN IN
                        </button>


                        {/* BOTTOM */}

                        <div className="
                            text-center
                            mt-7
                        ">

                            <p className="
                                text-[14px]
                                sm:text-[15px]
                                text-gray-500
                            ">

                                Don't have an account?

                                <button
                                    type="button"
                                    onClick={openSignUp}
                                    className="
                                        ml-2
                                        text-black
                                        font-semibold
                                        tracking-wide
                                        hover:underline
                                    "
                                >
                                    CREATE ACCOUNT
                                </button>

                            </p>

                        </div>

                    </form>

                )}


                {/* ================================================= */}
                {/* ==================== SIGN UP ==================== */}
                {/* ================================================= */}

                {signIn && (

                    <form
                        className="
                            relative
                            w-full
                            px-[10%]
                            pt-8
                            pb-8
                        "
                    >

                        {/* CLOSE BUTTON */}

                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Close"
                            className="
                                absolute
                                top-4
                                right-4
                                z-30
                                w-9
                                h-9
                                flex
                                items-center
                                justify-center
                                rounded-full
                                text-gray-500
                                hover:text-black
                                hover:bg-gray-100
                                transition-all
                                duration-200
                            "
                        >
                            <X
                                size={22}
                                strokeWidth={1.5}
                            />
                        </button>


                        {/* Heading */}

                        <div className="text-center mb-7">

                            <h1 className="
                                text-[34px]
                                sm:text-[38px]
                                leading-tight
                                font-serif
                                font-medium
                                text-black
                            ">
                                Welcome to QuickDine
                            </h1>

                            <p className="
                                mt-3
                                text-[14px]
                                sm:text-[16px]
                                text-gray-500
                                tracking-wide
                            ">
                                Access your exclusive reservations
                                and curated dining profile.
                            </p>

                        </div>


                        {/* FULL NAME */}

                        <div className="mb-5">

                            <label className="
                                block
                                text-[13px]
                                sm:text-[14px]
                                font-medium
                                tracking-wider
                                text-gray-500
                                mb-2
                            ">
                                FULL NAME
                            </label>

                            <div className="relative">

                                <User
                                    size={22}
                                    strokeWidth={1.5}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                />

                                <input
                                    type="text"
                                    placeholder="Sarah Jenkins"
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        text-[17px]
                                        text-gray-800
                                        placeholder-gray-400
                                        border-b
                                        border-gray-300
                                        outline-none
                                        focus:border-black
                                        transition-all
                                    "
                                />

                            </div>

                        </div>


                        {/* EMAIL */}

                        <div className="mb-5">

                            <label className="
                                block
                                text-[13px]
                                sm:text-[14px]
                                font-medium
                                tracking-wider
                                text-gray-500
                                mb-2
                            ">
                                EMAIL ADDRESS
                            </label>

                            <div className="relative">

                                <Mail
                                    size={22}
                                    strokeWidth={1.5}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                />

                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        text-[17px]
                                        text-gray-800
                                        placeholder-gray-400
                                        border-b
                                        border-gray-300
                                        outline-none
                                        focus:border-black
                                        transition-all
                                    "
                                />

                            </div>

                        </div>


                        {/* PHONE */}

                        <div className="mb-5">

                            <label className="
                                block
                                text-[13px]
                                sm:text-[14px]
                                font-medium
                                tracking-wider
                                text-gray-500
                                mb-2
                            ">
                                PHONE NUMBER (OPTIONAL)
                            </label>

                            <div className="relative">

                                <Phone
                                    size={22}
                                    strokeWidth={1.5}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                />

                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        text-[17px]
                                        text-gray-800
                                        placeholder-gray-400
                                        border-b
                                        border-gray-300
                                        outline-none
                                        focus:border-black
                                        transition-all
                                    "
                                />

                            </div>

                        </div>


                        {/* PASSWORD */}

                        <div className="mb-6">

                            <label className="
                                block
                                text-[13px]
                                sm:text-[14px]
                                font-medium
                                tracking-wider
                                text-gray-500
                                mb-2
                            ">
                                PASSWORD
                            </label>

                            <div className="relative">

                                <Lock
                                    size={22}
                                    strokeWidth={1.5}
                                    className="
                                        absolute
                                        left-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-500
                                    "
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="••••••••"
                                    className="
                                        w-full
                                        h-11
                                        pl-9
                                        pr-10
                                        text-[17px]
                                        text-gray-800
                                        placeholder-gray-400
                                        border-b
                                        border-gray-300
                                        outline-none
                                        focus:border-black
                                        transition-all
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="
                                        absolute
                                        right-0
                                        top-1/2
                                        -translate-y-1/2
                                        text-gray-400
                                        hover:text-black
                                    "
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>

                            </div>

                        </div>


                        {/* RESTAURANT OWNER */}

                        <label className="
                            flex
                            items-center
                            gap-3
                            cursor-pointer
                            mb-7
                        ">

                            <input
                                type="checkbox"
                                className="
                                    appearance-none
                                    w-5
                                    h-5
                                    shrink-0
                                    border
                                    border-gray-400
                                    cursor-pointer
                                    checked:bg-black
                                    checked:border-black
                                "
                            />

                            <span className="
                                text-[14px]
                                sm:text-[15px]
                                text-gray-600
                            ">
                                I am a Restaurant Owner / Manager
                            </span>

                        </label>


                        {/* CREATE ACCOUNT */}

                        <button
                            type="submit"
                            className="
                                w-full
                                h-[60px]
                                bg-black
                                text-white
                                text-[16px]
                                font-semibold
                                tracking-widest
                                hover:bg-gray-800
                                active:scale-[0.99]
                                transition-all
                                duration-300
                            "
                        >
                            CREATE ACCOUNT
                        </button>


                        {/* BOTTOM */}

                        <div className="
                            text-center
                            mt-7
                        ">

                            <p className="
                                text-[14px]
                                sm:text-[15px]
                                text-gray-500
                            ">

                                Already have an account?

                                <button
                                    type="button"
                                    onClick={openSignIn}
                                    className="
                                        ml-2
                                        text-black
                                        font-semibold
                                        tracking-wide
                                        hover:underline
                                    "
                                >
                                    SIGN IN
                                </button>

                            </p>

                        </div>

                    </form>

                )}

            </div>

        </div>
    );
};

export default LogInAndSignIn;