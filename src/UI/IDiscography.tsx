import React from 'react';
import IAlbum from './IAlbum';

export default interface IDiscography {
    id: string,
    name: string,
    img: string,
    albums: IAlbum[]
}
