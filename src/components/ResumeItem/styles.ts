import styled from "styled-components";

export const Container = styled.div`
    flex:1

`
export const Title = styled.div`
    text-align: center;
    font-weight: 700;
    margin-bottom: 5px;
    color: #888;
`
export const Value = styled.div<{color?: string}>`
    text-align: center;
    font-weight: 700;
    color: ${props => props.color ?? '#000'};
`