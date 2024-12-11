// 测试结构和视图绑定

// 测试数据
/**
 * Fake data for testing structure and view binding
 * School {
 *   name: string
 *   students: Student[]
 *   teachers: Teacher[]
 * }
 * 
 * Student {
 *   name: string
 *   age: number
 *   grade: number
 * }
 * 
 * Teacher {
 *   name: string
 *   age: number
 *   subject: string
 * }
 * 
 */



function StructureViewTest(){
    let view_map = {
        "School": SchoolView,
        "Student": StudentView,
        "Teacher": TeacherView
    }
    let data = {
        "School": {
            "renderFunctionKey": "School",
            "name": "School Name",
            "students": [
                {   
                    "name": "Student Name 1",
                    "age": 18,
                    "grade": 10,
                    "renderFunctionKey": "Student"
                },
                {   
                    "name": "Student Name 2",
                    "age": 19,
                    "grade": 11,
                    "renderFunctionKey": "Student"
                }
            ],
            "teachers": [
                {   
                    "name": "Teacher Name 1",
                    "age": 30,
                    "subject": "Math",
                    "renderFunctionKey": "Teacher"
                }
            ]
        }
    }

    return (
        <div>
            <h1>Structure and View Binding Test</h1>
            {view_map[data.School.renderFunctionKey](data.School, view_map)}
        </div>
    )
}

function SchoolView(school, view_map){
    return (
        <div>
            <h1>{school.name}</h1>
            <h2>Students</h2>
            {school.students.map(student => {
                return view_map[student.renderFunctionKey](student)
            })}
            <h2>Teachers</h2>
            {school.teachers.map(teacher => {
                return view_map[teacher.renderFunctionKey](teacher)
                })}

        </div>
    )

}

function StudentView(student, view_map){
    return (
        <div style={{margin: "10px", color: "blue"}}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
        </div>
    )
}

function TeacherView(teacher, view_map){
    return (
        <div style={{margin: "10px", color: "red"}}>
            <p>Name: {teacher.name}</p>
            <p>Age: {teacher.age}</p>
            <p>Subject: {teacher.subject}</p>
        </div>
    )
}

export default StructureViewTest