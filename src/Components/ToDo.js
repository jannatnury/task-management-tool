import React from 'react';
// import './../App.css';

const ToDo = () => {
    return (
        <div className=' mx-auto my-6 w-96 p-5 bg-neutral'>
             <h1 className='text-4xl text-center text-white'>Todo-List</h1>
            <form className="ml-3 p-4 container mx-auto">
                <label className='text-white' htmlFor='task'>Task</label>
                <div className=''>
                    <input className="form-control w-72 py-3 pl-4" type='task' name='task'
                        id='task' required  placeholder='Enter Task'/>
                </div>
                <br />
                <label className='text-white' htmlFor='text'>Description</label>
                <div className=''>
                    <input className="form-control w-72 py-3 pl-4" type='text' name='description'
                        id='text' required  placeholder='Enter description'/>
                </div>
                <br />
                <label className='text-white' htmlFor='date'>Date</label>
                <div className=''>
                    <input className="form-control w-72 " type='date' name='date'
                        id='date' required  placeholder='Select date'/>
                </div>
                <br />
                <button className='bg-warning font-bold w-72 mx-auto text-white mb-4 py-2 px-4 rounded-lg' type="submit">ADD</button>
            </form>
        </div>
    );
};

export default ToDo;