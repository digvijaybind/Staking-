import { Link } from "react-router-dom"
import styled from "styled-components"
import Web3 from 'web3'


const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

const DashboardWrap = styled.div<any>`

`

const StyledLink = styled<any>(Link)`
 
`

export const Dashboard: React.FC = () => {
    console.log('web3 object: ', web3);

   
    return <DashboardWrap>
       
      
    </DashboardWrap>
}