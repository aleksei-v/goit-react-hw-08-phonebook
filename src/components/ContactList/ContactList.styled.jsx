import styled from "styled-components";

export const ContactOrder = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -5px;
    margin-left: -5px;
`
export const ContactLi = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #1976d2;
    border-radius: 4px;
    flex-basis: calc((100% - 10px) / 4);
    padding: ${p => p.theme.space[4]}px;
    margin-top: 10px;
    margin-left: 10px;
`