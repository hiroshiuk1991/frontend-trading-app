import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function LessonFour() {
    const history = useHistory()

    function Goback() {
        history.push('./lessons')
    }

    return (
        <div>
            <div>
                <Button onClick={() => Goback()} variant='contained' color='primary'>
                    {' '}
                    Back{' '}
                </Button>
            </div>
        </div>
    )



}
