import React, { useState } from 'react';
import Song from './Song';
import Card from '../UI/Card';
import Button from '../UI/Button';
import IAlbum from '../UI/IAlbum';

type AlbumProps = {
    resetState:()=> void,
    albums: IAlbum[]
}

const Albums = (props: AlbumProps): JSX.Element => {

    const s: string[] = [];
    const [songs, setSongs] = useState(s);

    const resetState = ():void => {
        setSongs(s);
    }

    const showAlbum = (): JSX.Element => {
        return (
            <Card>
                <Button onClick={() => props.resetState()} >Bands</Button>
                <h1>Albums</h1>
                {props.albums.map((album) => (
                    <div
                        key={Math.random().toString()}
                        className="square"
                        style={{ backgroundImage: `url(${album.img})` }}
                        onClick={() => setSongs(album.songs)}>
                        {album.title}
                    </div>
                ))}
            </Card >);
    };

    return songs.length === 0 ? showAlbum() : <Song resetState={resetState} items={songs} ></Song>;
};

export default Albums;