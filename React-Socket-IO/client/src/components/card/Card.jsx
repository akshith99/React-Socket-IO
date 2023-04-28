import './card.css';
import Heart from '../../img/heart.svg';
import Comment from '../../img/comment.svg';
import Share from '../../img/share.svg';
import Info from '../../img/info.svg';
import HeartFilled from '../../img/heartFilled.svg';
import { useState } from 'react';

const Card = ({ post, socket, user }) => {

    const [liked, setLiked] = useState(false);

    const handleLike = (type) => {
        type === 1 && setLiked(true);
        socket.emit("sendNotification", {
            senderName: user,
            receiverName: post.username,
            type,
        })
    }

    // const handleDislike = () => {
    //     setLiked(false);
    // }

    return (
        <div className='card'>
            <div className='info'>
                <img src={post.userImg} alt='' className='userImg' />
                <span>{post.fullname}</span>
            </div>
            <img className='postImg' src={post.postImg} alt='' />
            <div className='interaction'>
                {
                    liked ? (
                        <img className='cardIcon' src={HeartFilled} alt='' />
                    )
                        : (
                            <img className='cardIcon' src={Heart} alt='' onClick={() => handleLike(1)}/>
                        )
                }
                <img className='cardIcon' src={Comment} alt='' onClick={() => handleLike(2)}/>
                <img className='cardIcon' src={Share} alt='' onClick={() => handleLike(3)}/>
                <img className='cardIcon infoIcon' src={Info} alt='' />
            </div>
        </div>
    );
}

export default Card;