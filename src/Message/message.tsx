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
            cancelText="Любимая "
        
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
                    Когда тебя забрал туман, <br />
                    Накинув бель фаты,<br />
                    Мне все казалось, что обман… <br />
                    Что здесь была не ты… <br />
                    Когда упала синью ночь, <br />
                    Рассыпав звездный град,<br />
                    Я гнал туман от дома прочь,<br />
                    Стремясь поймать твой взгляд… <br />
                    Когда полночные ветра <br />
                    Кружили вальс листвой, <br />
                    Я думал: видно, никогда <br />
                    Не встречусь я с тобой… <br />
                    Но, лишь, в окно блеснул рассвет, <br />
                    Как искорка костра,<br />
                    Услышал я сквозь сон: <br />
                    «Привет! Ты спи… А мне – пора…»<br />
                </p>
            </Modal>

        </div>
    )
}