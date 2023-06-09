import React from 'react'
import { Dropdown, Form, Segment } from 'semantic-ui-react'


export const AddTransaction = () => {



    return (
        <Segment>
            <Form>
                <Dropdown placeholder='Category' search/>
                <Form.Input placeHolder='Amount' />
                <Dropdown placeholder='Type' search/>
            </Form>
        </Segment>
    )
}
