import { Modal } from 'antd';
import './heart.css'
import { useState } from 'react';
import { Message } from '../Message/message';


const Heart: React.FC = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>

            <div className='grid'>
                <Modal
                    open={isModalOpen}
                    onOk={() => setModalOpen(false)}
                    onCancel={() => setModalOpen(false)}

                >
                    <Message />
                </Modal>
                <div className='rotate'>
                    <div className="wrapper">
                        <div className="petals"></div>
                        <div className="petals"></div>
                    </div>
                </div>
                <div className='heartWrapper'>
                    <div className="heart" onClick={() => setModalOpen(true)} >
                        <p>Click, me</p>
                    </div>

                </div>


                <div className='rotate'>
                    <div className="wrapper">
                        <div className="petals"></div>
                        <div className="petals"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Heart; 