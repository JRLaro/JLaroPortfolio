import ImageSlider from "./ImageSlider"
import { SliderData } from "./SliderData"


const Portfolio = () => {
    return (
        <div className="col">
            <div className="row">
        <ImageSlider slides={SliderData}/>
            </div>
            </div>
    )
}

export default Portfolio
