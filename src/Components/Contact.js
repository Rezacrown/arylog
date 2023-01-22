/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Route,
    RouterProvider,
  } from "react-router-dom";


export default function Contact({icon, link}) {
    return (

        <BrowserRouter>
                    {/* contact icon */}
                    <div className="">
                        <a href={link} target={'_blank'} >
                            <img src={icon} alt=""  className='h-12 w-12' />
                        </a>
                    </div>
        </BrowserRouter>
    )
}