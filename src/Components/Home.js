import React from 'react';
import CompletedTasks from './CompletedTasks';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-4 font-bold'> Welcome to <span className='text-red-700'>Task Manager</span></h1>
            <ToDo/>
            <CompletedTasks/>
        </div>
    );
};

export default Home;