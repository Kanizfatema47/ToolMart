import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='py-12 text-white bg-base-200 text-base-content rounded ' style={{ backgroundImage: `url(${bg})` }}>
            <footer>
                <div className='grid lg:grid-cols-4 sm:grid-cols-1 '>
                    <div className="text-center flex flex-row justify-center items-center gap-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                        </svg>
                        <p className=' text-2xl'> ToolMart
                        </p>
                    </div>
                    <div className="mb-6 text-center">
                        <h5 className="uppercase font-bold mb-2.5">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <Link to='' className="text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="text-white">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/review" className="text-white">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-white">Login</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-white">My Portfolio</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6 text-center">
                        <h5 className="uppercase font-bold mb-2.5">Policies</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <Link to='' className="text-white">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to='' className="text-white">Return Policy</Link>
                            </li>
                            <li>
                                <Link to='' className="text-white">Accessibility</Link>
                            </li>
                            <li>
                                <Link to='' className="text-white">Privacy </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-6 text-center">
                        <h5 className="uppercase font-bold mb-2.5">Our info</h5>

                        <div className='text-center'>
                            <p>+ 88 018 4113 6251</p>
                            <p>info@toolmart.com</p>
                            <p>Sidestate NSW 4132, Australia</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1'>
                    <div class="grid grid-flow-col gap-3 justify-center items-center">
                        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                        <Link to=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                        <Link to=''><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                    </div>
                    <div className=" text-center py-5">
                        Copyright &copy; 2022
                        <Link className="text-white" to="/"> ToolMart</Link>
                    </div>
                </div>

            </footer>
        </div>

        
    );
};

export default Footer;