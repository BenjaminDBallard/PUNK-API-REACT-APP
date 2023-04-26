import {useState} from 'react';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LikeBtn() {
    const [like, setLike] = useState(false)
    return(
        <a className='like_btn' onClick={() => setLike((prevLike) => !prevLike)}>{
            like ? <FontAwesomeIcon icon={solidHeart} /> : <FontAwesomeIcon icon={regularHeart} />
            }
        </a>
    )
}