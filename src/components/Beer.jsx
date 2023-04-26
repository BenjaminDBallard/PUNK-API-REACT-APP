import React from 'react';
import LikeBtn from './LikeBtn'


export default function Beer({beers}){

    return(
        beers.map((beer) => {
            
            return(
                <div className='beer_card' key={beer.id}>
                    <div className='top'>
                        <div className='img_container'>
                            <img className='beer_img' src={beer.image_url} alt={beer.name} />
                        </div>
                        <div className='info_container'>
                            <h3 className='beer_title'>{beer.name}</h3>
                            <h5 className='beer_tagline'>{beer.tagline}</h5>
                            <h5 className='beer_abv'>{beer.abv}</h5>
                            <LikeBtn />
                            
                        </div>
                    </div>
                    <div className='desc'>
                        <p className='beer_description'>{beer.description}</p>
                    </div>
                </div>
            )
        })
    )
}
