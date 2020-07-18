import React, {ReactNode} from 'react'
import Appbar from './Appbar'
import Container from '@material-ui/core/Container';

type Props = {
    children:ReactNode
}

type pageData = {
    name:string,
    path:string
}
type pageArray = pageData[]

const pages:pageArray = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Class Component',
        path:'/class'
    },
    {
        name:'Functional Component',
        path:'/function'
    }
]

export default function Layout({children}:Props) {
    return (
        <React.Fragment>
            <Appbar/>
            <Container>
                <div>
                    <ul>
                        {
                            pages.map(pageData => {
                                return (
                                    <li>
                                        <a href={pageData.path}>{pageData.name}</a>
                                    </li> 
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    {children}
                </div> 
            </Container>
            
        </React.Fragment>
    )
}