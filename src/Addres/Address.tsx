import { useState } from 'react';
import './address.css'
import emailjs from 'emailjs-com';
import ReactPlayer from 'react-player';
import { Alert, message } from 'antd';



function sendEmail(e: any) {
    emailjs.send('service_sa697be', 'template_21ss7pp', {
        from_name: "dsfsdf",
        message: e,
        to_name: "me"
    }, 'nCjJUKma_msnyTNjM')
        .then(
            () => {
                console.log('SUCCESS!');
            },
        ).catch((error) => {
            console.log('FAILED...', error.text);
        })
}

export const Address: React.FC = () => {


    const [messageApi, contextHolder] = message.useMessage();
    const [isAgree, setIsAgree] = useState<boolean | null>(null)

    const [urlPlay, setURLPlay] = useState("")

    const handleOk = () => {
        setURLPlay('https://www.youtube.com/watch?v=8Go6dHuylyM')
        setIsAgree(true)
        //setURLPlay(()=>'../../public/happy-cat.mp4')
        sendEmail('Yes')
    }

    const handleNo = () => {
        setURLPlay('https://www.youtube.com/watch?v=uQnIGTaEiFU&ab_channel=KermittheGreenScreen')
        // setURLPlay(()=>'../../public/sad-sad-cat.mp4')
        setIsAgree(false)
        sendEmail('No')
        info();
    }

    const info = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a prompt message with custom className and style',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    return (
        <>
            {/* {contextHolder} */}
            <p className='text-address'>Подтвердите своё согласие на проведение вечера с классным Мэном</p>
            {
                isAgree === false ?
                    <Alert message="Подумай ещё, только хорошо подумай!!!" type="warning" showIcon closable onClose={()=>setIsAgree(null)} />
                    :
                    <></>
            }

            <div className='container-button'>
                <button className='agree' onClick={handleOk}>Согласна</button>
                <button className='no' onClick={handleNo} disabled={isAgree===true}>Отказываюсь</button>
            </div>
            <div className='video-container'>
                <ReactPlayer
                    url={urlPlay}
                    playing
                    loop
                    muted

                />
            </div>
            <p className='text-address'>Для связи с нами вы можете воспользоваться</p>
            <div className='container'>
                <a href='https://t.me/KabaVolan'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                    </svg>
                </a>
            </div>
        </>
    )
}   