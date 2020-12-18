import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Details({ username, name, email }) {
    return (
        <div>
            <Paper>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead style={{ backgroundColor: '#b8bfd1' }}>
                            <TableCell>Username</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>email</TableCell>
                        </TableHead>
                        <TableBody>
                            <TableCell>{username}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default Details;