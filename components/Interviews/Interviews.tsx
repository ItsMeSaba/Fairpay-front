import { Rating } from "react-simple-star-rating";
import { InterviewType } from "types";
import style from "./interviews.module.sass"
import { FaRegUser } from 'react-icons/fa';

interface Args {
    interviews: InterviewType[],
}

export default function Interviews(args: Args) {
    const { interviews } = args;
    
    return (
        <div className={style.interviews}>
            {
                interviews.map(interview => <Interview key={interview._id} interview={interview} />)
            }
        </div>
    )
}

interface InterviewArgs {
    interview: InterviewType
}

function Interview(args: InterviewArgs) {
    const { comment, date, rating } = args.interview;

    return (
        <div className={style.interview}>  
            <div className={style.user}>
                <div className={style.left}>
                    {/* <BiUser /> */}
                    <FaRegUser  />
                    
                </div>

                <div className={style.right}>
                    <div className={style.rating}>
                        {/* <div className={style.number}>{ rating/20 }</div> */}
                        
                        <div className={style.stars}> 
                            <Rating
                                ratingValue={rating}
                                initialValue={0}
                                allowHover={false}
                                readonly={true}
                                size={28}                        
                            />
                        </div>
                    </div>
                </div>

            </div>


            { comment.length > 0 && <p className={style.comment}>{ comment }</p> }            
        </div>
    )
}