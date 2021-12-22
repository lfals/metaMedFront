import styled  from "styled-components";
import { TableCell as MuiTableCell,TableRow as MuiTableRow, Paper, Table, TableBody, TableContainer as MuiTableContainer, TableHead } from '@material-ui/core';

export const TableContainer = styled(MuiTableContainer)`
    width: 200px;
`

export const TableCell = styled(MuiTableCell)`
    padding: 16px 4px;
`

export const TableRow = styled(MuiTableRow)`
    th{
        max-width :20px ;
    }
    .id{
        padding: 16px 4px !important;
        text-align: center;

    }
    .editIcon{
        padding: 0 16px;
    }

    .description{
        max-width: 100px;
    }

    .name{

        width: 200px;
    }
`