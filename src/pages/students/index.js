import Link from "next/link";
const courses=[
    {id:1, name:1},
    {id:2, name:2},
    {id:3, name:3},
    {id:4, name:4},
    {id:5, name:5},
    {id:6, name:6},
]

function Students(){
    return (
        <>
     <h1>StudentId</h1>
        <ul>

            {
                courses.map(course =>(
                    <li key={course.id}>
                        <Link href={`students/1/courses/${course.id}`}> course {course.name}</Link>
                    </li>
                ))
            }

        </ul>

        </>)
}
export default Students;