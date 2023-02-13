import { useRouter } from "next/router";

function CourseId(){

 const router = useRouter();
 console.log(router);

const courseId =router.query.courseId
const studentId =router.query.students

 return <h1> 
    StudentId: {studentId} ,
    CourseId : {courseId}
             </h1>
}

export default CourseId;