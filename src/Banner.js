import Search from './Search';
import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import './Banner.css'

const Banner=()=> {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
        </div>
    )
}

export default Banner
