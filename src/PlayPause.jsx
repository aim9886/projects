import React,{useState} from 'react'

const PlayPause = () => {
    let [authUser , setAuthUser] = useState(false)

    let AcceptedUser = ()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>LOGO</li>
                    <li>MENU</li>
                    <li>CONTACT</li>
                    <li>SEARCH</li>
                    </ol>
                    </nav>
                    </>
        )
    }

    let NotAcceptedUser = ()=>{
        return(
            <>
            <nav>
                <ol>
                    <li>
                        LOGIN
                    </li>
                    <li>
                        SIGN-UP
                    </li>
                    <li>
                        FORGOT PASSWORD ?
                    </li>
                </ol>
                </nav>
                </>
        )
    }
  return<> {authUser ? <AcceptedUser/> : <NotAcceptedUser/> }</>
}

export default PlayPause