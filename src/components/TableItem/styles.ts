import styled from "styled-components";

export const TableLine = styled.tr``
export const TableColumn = styled.td`
    padding: 10px 0;
`

export const Category = styled.div<{color: string}>`
    display: inline-block;
    color: #fff;
    background: ${props => props.color};
    padding: 8px 12px;
    border-radius: 4px;

`

export const Value = styled.div<{color: string}>`   
    color: ${props => props.color};

`