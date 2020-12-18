import React from 'react';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';

// The data is hardcoded. Because I have no prior experience in connecting React JS with mysql database. 

function List() {

    //Hardcoded user details 
    const users = [
        { username: "admin", name: "Lilja Lampinen", email: "lilja@example.com" },
        { username: "heinz", name: "Heinz Georg", email: "heinz@example.com" },
        { username: "katie", name: "Katie Hughes", email: "katie@example.com" },
    ]



    //Below the users will be listed in a table 
    return (
        <div>
            <h1>List</h1>
            <Paper>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead style={{ backgroundColor: '#b8bfd1' }}>
                            <TableCell><b>Username</b></TableCell>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRow>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {/* Back Button to navigate back to the login page */}
            <form action="/" method="get">
                <div
                    style={{ padding: 20 }}>
                    <Button variant="contained" color="primary"
                        type="submit">
                        Back
                 </Button>
                </div>


            </form>
        </div>
    );
}

export default List;