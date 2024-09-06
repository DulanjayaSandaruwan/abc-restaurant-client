import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { AdjustRounded, DeleteOutlineRounded } from '@mui/icons-material';
import AddStaffAlert from './AddStaffAlert/AddStaffAlert';
import HeaderCard from './HeaderCard';
import { deleteUser, getAllStaff } from '../../../../services/admin/AdminService';
import { notify } from '../../../../utils/Common/Notification';
import Conform from '../../../../components/Common/Conform/Conform';

const columns = ["Name", "Email", 'Address', 'Phone', 'Status', 'Action'];

export default function Staff() {
    const [rerender, setRerender] = React.useState()

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [searchText, setSearchText] = React.useState();

    const [open, setOpen] = React.useState(false);
    const [isDelete, setIsDelete] = React.useState(false);

    const [activeUser, setActiveUser] = React.useState()

    const closeDialog = () => {
        setOpen(false)
    }

    // get starf

    const [staffList, setStaffList] = React.useState([])

    React.useEffect(() => {
        console.log('calling api')
        getAllStaff()
            .then(response => {
                console.log(response)
                setStaffList(response.content)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [rerender])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onDelete = () => {
        deleteUser(activeUser)
    }

    return (
        <>
            <AddStaffAlert open={open} close={closeDialog} rerender={() => setRerender(!rerender)} />

            <HeaderCard setOpen={setOpen} />

            <Conform open={isDelete} close={() => setIsDelete(false)} conformFunction={onDelete} rerender={() => setRerender(!rerender)} />

            <Paper sx={{ overflow: 'hidden' }} className='mt-10 max-w-full me-0.5'>
                <TableContainer >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {/* {columns.map((column) => ( */}
                                <TableCell colSpan={7}>
                                    <div class="w-full max-w-sm min-w-[200px]">
                                        <div class="relative flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-500">
                                                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                                            </svg>

                                            <input
                                                class="w-full pl-10 h-10 pr-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                                placeholder="UI Kits, Dashboards..."
                                                onChange={(e) => setSearchText(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </TableCell>
                                {/* ))} */}
                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                {columns.map((column, col_id) => (
                                    <TableCell
                                        className='border-s-2 border-gray-200'
                                        key={col_id}
                                    >
                                        <p className='font-bold'>{column}</p>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {staffList.filter(item => !searchText || (item.fullName.includes(searchText) || item.email.includes(searchText)))
                                .map((row, rowId) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={rowId}>
                                            {Object.keys(row)
                                                .filter(key => key !== 'id' && key !== 'userRole' && key !== 'userStatus')
                                                .map((key, index) => (
                                                    <TableCell key={index} className='border-s-2 border-gray-200'>{row[key]}</TableCell>
                                                ))}
                                            <TableCell className='border-s-2 border-gray-200 '>
                                                {
                                                    row.userStatus == "ACTIVE"
                                                        ? <div className='relative text-green-300 flex justify-center'>
                                                            <AdjustRounded className='animate-ping' sx={{ fontSize: 20 }} />
                                                            <AdjustRounded className='absolute ' sx={{ fontSize: 20 }} />
                                                        </div>
                                                        : <div className='relative text-red-300 flex justify-center'>
                                                            <AdjustRounded className='animate-ping' sx={{ fontSize: 20 }} />
                                                            <AdjustRounded className='absolute ' sx={{ fontSize: 20 }} />
                                                        </div>
                                                }
                                            </TableCell>
                                            <TableCell className='border-s-2 border-gray-200 '>
                                                <span onClick={() => {
                                                    setActiveUser(row.id)
                                                    setIsDelete(true)
                                                }} className='flex justify-center text-red-300 hover:scale-110 duration-150'> <DeleteOutlineRounded /></span>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={staffList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}