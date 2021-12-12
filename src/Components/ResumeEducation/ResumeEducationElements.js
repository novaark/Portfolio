import styled from 'styled-components'

export const EducationContainer = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:opacity 1.5s ease-in-out;
`
export const EducationWrapper = styled.div`
    display:grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
    width:70%;

`   
export const Header = styled.p`
    display:flex;
    font-size:2rem;
    padding:0 3rem;
    font-weight:700;
    justify-self: center;
`
export const ContentWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-auto-rows:auto;
    padding-top: .5rem;
    font-size:1.5rem;
    grid-gap: .2rem;
`
export const University = styled.div`
    font-weight:600;
`
export const Degree = styled.div`
    font-size:1.3rem;
    display:grid;
    grid-template-columns: 1fr auto;
    font-weight:600;
`
export const DegreeName = styled.div`

`
export const Date = styled.div`

`
export const Courses = styled.div`
    display:grid;
    grid-template-columns: auto 1fr;
    font-weight:300;
`
export const Name = styled.div`
    padding-right:.5rem;
    font-size:1.3rem;
`
export const Classes = styled.div`
    padding-top:.2rem;
    font-size:1.1rem;
    word-spacing:normal;
`