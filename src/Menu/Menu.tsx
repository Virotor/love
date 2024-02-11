import { Carousel } from 'antd'
import { Dish } from './Dish'
import './menu.css'


const dishes = [
    {
        name: 'картошечка',
        title: 'лучшая картошка',
        description: 'картошка омномно',
        icon: `https://gotovim-doma.ru/images/recipe/3/15/315cd0a6401755bcdedfe15dbe082754.jpg`
    },
    {
        name: 'курочка',
        title: 'нежная курочка',
        description: 'самая вкусная курочка',
        icon: `https://img.povar.ru/main/fb/69/2e/b7/file_grudki_kurici_v_duhovke-429257.jpg`
    },
    {
        name: 'Вино',
        title: 'Красное вино',
        description: 'Самое лучшее вино в мире, вместе с прекрасным человеком',
        icon: `https://th.bing.com/th/id/R.f93d4f016b67b21830a7a19886af8310?rik=zF1qO2pleX8Rcw&pid=ImgRaw&r=0`
    },
    {
        name: 'Сок',
        title: 'Апельсиновый сок',
        description: 'Самый вкусный сок в Минске, только у нас',
        icon: `https://th.bing.com/th/id/R.6663085218fa85ac25896791c6fd4c76?rik=RJfSsIE5hKyf8w&pid=ImgRaw&r=0`
    }
]







export const Menu: React.FC = () => {
    return (
        <>
            <p className='text-menu'>
                Ниже представленно наше меню
            </p>
            <div className='container-dish'>

                {/* <Carousel
                autoplay
                autoplaySpeed={5000}
            > */}
                {
                    dishes.map((dish) => {
                        return (
                            <div className='column'>
                                <Dish
                                    icon={dish.icon}
                                    name={dish.name}
                                    title={dish.title}
                                    description={dish.description}
                                />
                            </div>
                        )
                    })
                }
                {/* </Carousel> */}
            </div>
        </>
    )
}