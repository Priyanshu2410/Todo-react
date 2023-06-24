import React from "react";
import Courseform from "./courseform"
import CourseList from "./courselist";


function Home() {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <Courseform/>
            <CourseList/>
            <button onClick={handleClick}>Logout</button>
        </>
    )
}
export default Home;