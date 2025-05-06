import { Carousel } from 'antd'

import {ReviewItem} from "../../widgets/ReviewItem/ReviewItem.tsx";

export function Reviews({ title, reviews }: {title:string, reviews: IReviewItem[]}) {
    return (
        <div className="reviews">
            <h3 className="simple_title">{title}</h3>
            <div className="reviews_carousel">
                <Carousel slidesToShow={3} adaptiveHeight arrows>
                    {reviews.map(el => (
                        <ReviewItem
                            key={el.id}
                            img={el.img}
                            date={el.date}
                            rating={el.rating}
                            userName={el.userName}
                            reviewText={el.reviewText}
                        />
                    ))}
                </Carousel>
            </div>

        </div>
    )
}

