import React from 'react';
import Details from './Details';

// The data is hardcoded. Because I have no prior experience in connecting React JS with mysql database. 

function List() {

    const users = [
        { username: "admin", name: "Lilja Lampinen", email: "lilja@example.com" },
        { username: "heinz", name: "Heinz Georg", email: "heinz@example.com" },
        { username: "katie", name: "Katie Hughes", email: "katie@example.com" },
    ]


    return (
        <div>
            <h1>List</h1>

            {users.map(user => (
                <Details username={user.username} name={user.name} email={user.email} />
            ))}

            <form action="/login" method="get">
                <button
                    type="submit"
                >Back</button>
            </form>
        </div>
    );
}

export default List;