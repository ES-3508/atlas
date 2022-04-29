import  "./progress_bar.css" 
import LinearProgressWithLabel from "./HourlyProgressbarSet"
// import ProgressBar from "./Progressbar2";


export default function Progress_bar() {

    return (
        <div className="progress_bar">
            <div className="hourly_progress_bar">
                <span className="space"></span>
                <LinearProgressWithLabel/>
            </div>
        </div>
    )
}
