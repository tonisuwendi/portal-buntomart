import DottedBg from "../UI/DottedBg";

export default function ImageWrapper({ image }) {
    return (
        <div className="flex-1 flex justify-center">
            <img src={image} alt="slide 1" style={{ height: 550 }} />
            <DottedBg color top={150} left={40} />
        </div>
    )
}