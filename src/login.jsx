import X from "../public/x.svg"
import google from "../public/Google.svg"
import apple from "../public/apple.svg"

export const Login = () => {


    return (
        <div className="flex flex-col justify-center items-center mt-20 border-1 mx-110 bg-black rounded-2xl mb-30 main">
            <div className="main3">
                <div className="w-8 mt-5 ml-36 bg-white img  ">
                    <img src={X} />

                </div>
                <div className="main1">
                    <h1 className="flex ml-7 mt-5 text-[25px] font-semibold text-white">Sign in to X</h1>
                    <div className="relative mt-5 w-75 flex justify-center items-center ">
                        <img
                            src={google}
                            alt="This is a ggogle icons"
                            className="absolute left-3 top-1/2 ml-15 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="text"
                            placeholder="Sign in with Google"
                            className="w-full border text-center bg-white cursor-pointer border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="relative mt-5 w-75">
                        <img
                            src={apple}
                            alt="This is a ggogle icons"
                            className="absolute  left-3 top-1/2 ml-15 transform -translate-y-1/2 w-5 h-5"
                        />
                        <input
                            type="text"
                            placeholder="Sign in with Google"
                            className="w-full bg-white border text-center cursor-pointer border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm placeholder-gray-600 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="flex items-center  my-4">
                        <div className="flex-grow h-px bg-gray-500"></div>
                        <span className="mx-4 text-gray-400 text-sm font-medium">OR</span>
                        <div className="flex-grow h-px bg-gray-500"></div>
                    </div>
                    <div className="relative mt-5 w-75">

                        <input
                            type="text"
                            placeholder="Phone, email address, or username"
                            className="w-full text-[17px] border  border-gray-700  text-center   py-4 bg-transparent text-sm placeholder-gray-600 focus:outline-none " style={{}}
                        />
                    </div>

                    <div className="border-1 font-semibold cursor-pointer text-center mt-7 text-sm rounded-[50px] p-2 border-none  bg-white text-black ">
                        <button className="cursor-pointer" >Next</button>

                    </div>
                    <div className="border-1 font-semibold cursor-pointer text-center mt-5 text-sm rounded-[50px] p-2 border border-gray-500  bg-transparent text-white ">
                        <button className="cursor-pointer" >Forget password?</button>

                    </div>


                    <p className="mt-10 mb-20  text-[14px] text-[#71767b] text-center">Dont't have an account?<a className="cursor-pointer text-[#1d9bf0]" > Sign up</a></p>
                </div>
            </div>
        </div>
    )
}