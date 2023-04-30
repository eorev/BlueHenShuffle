import { Link } from "react-router-dom";

interface LearnProps {
  username: string;
  level: number;
}

function LessonCard(props: any) {
    return (
        <div className="min-w-[16rem] h-72 bg-slate-100 rounded-lg shadow-md p-2 m-2">
            <Link to={props.to}>{props.lesson}</Link>
        </div>
    )
}


const Learn: React.FC<LearnProps> = ({ username, level }) => {
    return (
        <div className="mt-24 flex flex-col justify-center items-center text-4xl">
            <div>Hello, {username}</div>
            <div>You have {level} XP</div>
            <div className="flex m-32  w-[80vw] overflow-scroll">
                <LessonCard to={'/Lesson1'} lesson={"Lesson 1"}></LessonCard>
                <LessonCard to={'/Lesson1'} lesson={"Lesson 1"}></LessonCard>
                <LessonCard to={'/Lesson1'} lesson={"Lesson 1"}></LessonCard>
                <LessonCard to={'/Lesson1'} lesson={"Lesson 1"}></LessonCard>
            </div>
        </div>
    )
}

export default Learn;