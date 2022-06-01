import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

type SongProps = {
    resetState: ()=>void,
    items: string[]
}

const Song = (props: SongProps): JSX.Element => {
    return (<Card>
        <Button onClick={() => props.resetState()}>Albums</Button>
            <h1>Songs</h1>
            {props.items.map((song, index) => (
                <ul
                    key={Math.random().toString()}>
                    {index + 1}. {song}
                </ul>
            ))}
    </Card>);
};

export default Song;