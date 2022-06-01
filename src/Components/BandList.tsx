import React, { useState } from 'react';
import Card from '../UI/Card';
import Albums from './Albums';
import './BandList.css';
import IDiscography from '../UI/IDiscography';
import IAlbum from '../UI/IAlbum';

type BandProps = {
    items: IDiscography[]
}

const Band =(props: BandProps): JSX.Element => {
    const a: IAlbum[] = [];
    const [bandName, setBand] = useState(a);

    const resetState = ():void => {
        setBand(a);
    }

    const showBand=(): JSX.Element =>{
        return <Card>
            {props.items.map((band, index) =>
                <ul key={index}
                    className='square'
                    style={{ backgroundImage: `url(${band.img})` }}
                    onClick={() => setBand(band.albums)}
                >{band.name}
                </ul>)}
        </Card>;
    };

    return bandName.length === 0 ? showBand() : <Albums resetState={resetState} albums={bandName}/>;
};

export default Band;
