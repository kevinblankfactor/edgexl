import React from 'react';
import styled, { css } from 'styled-components';
import NestedGrid from './grid';
import { makeStyles } from '@material-ui/core/styles';

const Button = styled.button`
    background: blue;
    border-radius: 3px;
    // border: 2px solid;
    border-radius: 5px;
    color: white;
    margin: 5px;
    padding: 0.25em 1em;
    width: 95px

    ${props =>
            props.primary &&
            css`
                background: palevioletred;
                color: white;
            `
    };
`

const Placeholder = styled.div`
    background: gray;
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props =>
            props.primary &&
            css`
                background: palevioletred;
                color: white;
            `
    };
`

const Container = styled.div`
    // background: red;
    height: 115px;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: row
`

const ContentContainer = styled.div`
    // background: green;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    padding: 10px 10px 10px 20px;
`

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
    },
}));

const AssessmentCardContent = ({data}) => {
    return (
        <>
            {
                data ?
                    <ContentContainer>
                        <div className="assessment-card-content" style={{width: '80%'}}>
                            <h3>Created by {data.createdBy}</h3>
                            <p>{data.subtitleLine}</p>
                        </div>
                        <div className="assessment-card-buttons">
                            {
                                data.buttons.map((button) => {
                                    return ( 
                                        <Button onPress={() => console.log(`go to ${button.link}`)}>{button.name}</Button> 
                                    );
                                })
                            }
                        </div>
                    </ContentContainer>
                :
                    <div><p>No data avilable</p></div>
            }
        </>
    );
}

const AssignmentCardContent = ({data}) => {
    return (
        <>
            {
                data ?
                    <ContentContainer>
                        <div className="assessment-card-content" style={{width: "100%"}}>
                            <h3>{data.name}</h3>
                            <p>{data.subtitle} | Answer Key</p>
                            {/* <NestedGrid /> */}
                        </div>
                        <div className="assessment-card-buttons" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end"}}>
                            {
                                data.buttons.map((button) => {
                                    return ( 
                                        <Button onPress={() => console.log(`go to ${button.link}`)}>{button.name}</Button> 
                                    );
                                })
                            }
                        </div>
                    </ContentContainer>
                :
                    <div><p>No data avilable</p></div>
            }
        </>
    );
}


export default function Card ({ type, data }) {
    return (
        <div>
            <Container>
                <Placeholder><p style={{color: 'white', weight: '700'}}>Placeholder</p></Placeholder>
                {
                    type = "assignment" ?
                        <AssignmentCardContent data={data} />
                    : 
                    type = "assesmentData" ?
                            <AssessmentCardContent data={data}/>
                        :   
                            <div>No data</div>
                }
            </Container>
        </div>
    );
}