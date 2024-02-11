import './dish.css'
import { PropsWithChildren } from 'react'



type DishProps = {
    description: string,
    title: string,
    name: string,
    icon: string,
}


export const Dish: React.FC<PropsWithChildren<DishProps>> = (props: PropsWithChildren<DishProps>) => {


    return (
        <div className="dish-containers">
            <img className='image' src={props.icon} alt="Snow" />
            <div className='middle'>
                <div className="text">
                    <p >{props.name}</p>
                    <p >{props.title}</p>
                    <p >{props.description}</p>
                </div>
                {/* <div className="centered-title">{props.title}</div>
                    <div className="centered-description">{props.description}</div> */}
            </div>
        </div>
    )
}