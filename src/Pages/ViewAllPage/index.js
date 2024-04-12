import React, { useEffect, useState } from "react"
import { PhotoAPI } from "./../../API/PhotoAPI"
import "./index.css"

function ViewAllPage() {
    useEffect(() => {
        PhotoAPI.filter().then((photos) => {
            // response handling
            console.log(photos);
        })
    }, [])
    return (
        <h1>
            View All
        </h1>
    );
}

export default ViewAllPage;
