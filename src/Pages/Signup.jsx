import React from 'react'
import formImg from '../Images/two-girls-chat-phone.png'
const Signup = () => {
    return (<>
        <div className="container mx-auto p-4 mt-20 ">
            <div
                className="bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row border-[1.2px] border-gray-300">

                <div class="md:w-1/2">
                    <img src={formImg} className='h-[500px] w-[450px]' alt="img" />
                </div>

                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-extrabold mb-4 text-purple-700">Sign Up</h2>
                    <form>
                        <div className="mb-4">
                            <label for="name" className="block text-sm font-bold  text-purple-600">Name</label>
                            <input type="text" id="name" name="name"
                                className="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div className="mb-4">
                            <label for="email" class="block text-sm font-bold  text-purple-600">Email</label>
                            <input type="email" id="email" name="email"
                                class="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div className="mb-4">
                            <label for="password" class="block text-sm font-bold  text-purple-600">Password</label>
                            <input type="password" id="password" name="password"
                                class="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <button type="submit"
                            class="w-full py-2 px-4 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer">Sign
                            Up</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default Signup
