import style from "styles/components/dataCountDisplay.module.sass"
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import RateReviewIcon from '@mui/icons-material/RateReview';

// interface Args {
//     salariesCount: number
//     reviewsCount: number
// }

export default function DataCountDisplay() {
    return (
        <div className={style.dataCountDisplay}>
            <div className={style.salary}>
                {/* <div className={style.icon}>
                    <LocalAtmIcon fontSize="large" />
                </div> */}

                <h1>30+</h1>
                
                <p>ხელფასის მონაცემი</p>
            </div>

            <div className={style.reviews}>
                {/* <div className={style.icon}>
                    <RateReviewIcon fontSize="large" />
                </div>
                 */}
                <h1>0+</h1>

                <p>შეფასება</p>
            </div>
        </div>
    )
}