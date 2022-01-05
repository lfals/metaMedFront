import styled  from "styled-components";
import { TableCell as MuiTableCell,TableRow as MuiTableRow, TableContainer as MuiTableContainer, Card as MuiCard, Button as MuiButton } from '@material-ui/core';

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


export const TextContainer = styled.div`

`

export const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    background-color: #C4C4C4;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    svg{
        font-size: 30px;
    }
`

export const Card = styled(MuiCard)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 12px 24px;
    min-height: 150px;
    margin-bottom: 12px;


`
export const CardParagraphTitle = styled.h1`
    margin: 24px 0 0 6px;
    font-size: 18px;
`

export const CardTitle = styled.h1`
    font-size: 24px;
    font-weight: 200;
`

export const Button = styled(MuiButton)`
    width: 200px;
`

export const CardsContainer = styled.div`
    height: 500px;
    overflow-y: auto;
    padding-right: 20px;
`


