import { PropsWithChildren } from 'react'
import './message.css'
import { Modal } from 'antd'

type PropsModal = {
    isOpen:boolean,
    close : ()=>void
}


export const Message: React.FC<PropsWithChildren<PropsModal>> = (props: PropsWithChildren<PropsModal>) => {
    return (
        <div >
            <Modal
            className='modalBoby'
            open = {props.isOpen}
            onCancel={props.close}
            onOk={props.close}
            cancelText="Звучит интересно"
        
            >
                <p>
                    Когда с неба ты <br />
                    По радуге… дождем, <br />
                    Я думал: это мечты – <br />
                    Нельзя нам быть вдвоем… <br />
                    Когда стекала по стеклу<br />
                    Хрустальная капель, <br />
                    Тебя я видел наяву, <br />
                    Распахивая дверь… <br />
                    Услышал я сквозь сон: <br />
                    «Привет! Ты спи… А мне – пора…»<br />
                    <br /><br /><br />
                    Тебя пригласили на замечательный ужин в компании мэна!!!<br/>
                </p>
            </Modal>

        </div>
    )
}