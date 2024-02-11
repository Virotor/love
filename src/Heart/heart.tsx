import { Modal } from 'antd';
import './heart.css'
import { useState } from 'react';
import { Message } from '../Message/Message';


const Heart: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Message
                isOpen={isModalOpen}
                close={() => { setModalOpen(false) }}
            />
            <div className='grid'>
{/* 
                <div className='rotate'>
                    <p>
                        sdskhfjksdhfjkhdsjkhfjhjkfhajkhfjkahdjfhajkhfjkadhfkjadjhfdhfdhadhajhfajkddfhakjdshfkajdsfhjkadshfjkhadsf
                    </p>
                </div> */}
                <div className='heartWrapper'>
                    <div className="heart" onClick={() => setModalOpen(true)} >
                        <p>Click, me</p>
                    </div>

                </div>
                {/* <div className='rotate'>
                    <p>
                        sdskhfjksdhfjkhdsjkhfjhjkfhajkhfjkahdjfhajkhfjkadhfkjadjhfdhfdhadhajhfajkddfhakjdshfkajdsfhjkadshfjkhadsf
                    </p>
                </div> */}
            </div>

        </>
    )
}

export default Heart; 