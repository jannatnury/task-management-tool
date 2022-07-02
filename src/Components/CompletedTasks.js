import React from 'react';

const CompletedTasks = () => {
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold  my-3'>Completed task</h1>
            <div class="overflow-x-auto">
                <table class="table w-3/4 mx-auto mb-10 shadow-lg">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Task</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Task 1</td>
                            <td>Date</td>
                            <td>
                            <button class="btn btn-ghost btn-xs">Delete</button>
                            </td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr class="active">
                            <th>2</th>
                            <td>Task 2</td>
                            <td>Date</td>
                            <td>
                            <button class="btn btn-ghost btn-xs">Delete</button>
                            </td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Task 3</td>
                            <td>Date</td>
                            <td>
                            <button class="btn btn-ghost btn-xs">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTasks;