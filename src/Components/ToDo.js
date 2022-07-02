import React from 'react';
// import './../App.css';

const ToDo = () => {
    return (
        <div>
            <div className=' mx-auto my-6 w-96 p-5 bg-neutral'>
                <h1 className='text-4xl text-center text-white'>Todo-List</h1>
                <form className="ml-3 p-4 container mx-auto">
                    <label className='text-white' htmlFor='task'>Task</label>
                    <div className=''>
                        <input className="form-control w-72 py-3 pl-4" type='task' name='task'
                            id='task' required placeholder='Enter Task' />
                    </div>
                    <br />
                    <label className='text-white' htmlFor='text'>Description</label>
                    <div className=''>
                        <input className="form-control w-72 py-3 pl-4" type='text' name='description'
                            id='text' required placeholder='Enter description' />
                    </div>
                    <br />
                    <label className='text-white' htmlFor='date'>Date</label>
                    <div className=''>
                        <input className="form-control w-72 " type='date' name='date'
                            id='date' required placeholder='Select date' />
                    </div>
                    <br />
                    <button className='bg-warning font-bold w-72 mx-auto text-white mb-4 py-2 px-4 rounded-lg' type="submit">ADD</button>
                </form>
            </div>
            {/* Table */}

            <div class="overflow-x-auto w-3/4 mx-auto shadow-lg mb-10">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">Task-1</div>
                            </td>
                            <td>
                               06/22/2022                               
                            </td>
                            <td>7 PM</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr className='active'>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">Task-2</div>
                            </td>
                            <td>
                              04/15/2022
                            </td>
                            <td>12 PM</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">Task-3</div>
                            </td>
                            <td>
                            06/15/2022
                            </td>
                            <td>8 PM</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                        {/* <!-- row 4 --> */}
                        <tr className='active'>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="font-bold">Task-4</div>
                            </td>
                            <td>
                            05/17/2022
                            </td>
                            <td>10 AM</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDo;