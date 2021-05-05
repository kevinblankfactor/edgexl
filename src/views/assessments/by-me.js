import React, { useEffect } from "react";
import { Button } from '@material-ui/core';
import Card from '../../components/card';
import data from '../../utils/fakeData';

export default function By_me() {
    useEffect(() => {
        console.log(data.assignments);
    }, []);

    return (
        <div>
            <h2 data-testid="by_me">By me</h2>
            {/* <Button variant="contained" color="secondary">
                Secondary
            </Button> */}
            <Card type="assignment" data={data.assignments[0]} />
        </div>
    );
}