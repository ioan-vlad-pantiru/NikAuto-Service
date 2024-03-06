import Card from "./Card";
import "../Components/Three-card-layout.css"

function ThreeCardLayout() {
    return (
        <div className="three-card-layout">
            <Card title="Get inspired" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." img="https://via.placeholder.com/300"/>
            <Card title="Get organized" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." img="https://via.placeholder.com/300"/>
            <Card title="Get motivated" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." img="https://via.placeholder.com/300"/>
        </div>
    )
}

export default ThreeCardLayout