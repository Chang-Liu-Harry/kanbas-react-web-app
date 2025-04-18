// Sample users for authentication
export const users = [
    {
      _id: "1",
      username: "student",
      password: "student",
      firstName: "Student",
      lastName: "User",
      role: "STUDENT",
      email: "student@example.com",
      dob: "2000-01-01"
    },
    {
      _id: "2",
      username: "faculty",
      password: "faculty",
      firstName: "Faculty",
      lastName: "User",
      role: "FACULTY",
      email: "faculty@example.com",
      dob: "1980-01-01"
    },
    {
      _id: "3",
      username: "admin",
      password: "admin",
      firstName: "Admin",
      lastName: "User",
      role: "ADMIN",
      email: "admin@example.com",
      dob: "1990-01-01"
    }
  ];
  
  // Sample courses
  export const courses = [
    {
      _id: "1234",
      name: "CS5610 Web Development",
      number: "CS5610",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "This course teaches web development with React and Node.js",
      image: "/images/reactjs.png"
    },
    {
      _id: "2345",
      name: "CS5500 Software Engineering",
      number: "CS5500",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Software engineering principles and practices",
      image: "/images/reactjs.png"
    },
    {
      _id: "3456",
      name: "CS4550 Web Development",
      number: "CS4550",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Undergraduate web development course",
      image: "/images/reactjs.png"
    }
  ];
  
  // Sample modules
  export const modules = [
    {
      _id: "M101",
      name: "Introduction to Web Development",
      course: "1234",
      lessons: [
        {
          _id: "L101",
          name: "What is HTML",
          description: "Basic HTML tags and structure"
        },
        {
          _id: "L102",
          name: "What is CSS",
          description: "CSS styling and selectors"
        },
        {
          _id: "L103",
          name: "What is JavaScript",
          description: "JavaScript fundamentals"
        }
      ]
    },
    {
      _id: "M102",
      name: "React.js",
      course: "1234",
      lessons: [
        {
          _id: "L201",
          name: "React Components",
          description: "Creating React components"
        },
        {
          _id: "L202",
          name: "React State",
          description: "Managing state in React"
        }
      ]
    },
    {
      _id: "M103",
      name: "Introduction to Software Engineering",
      course: "2345",
      lessons: [
        {
          _id: "L301",
          name: "SDLC",
          description: "Software Development Life Cycle"
        }
      ]
    }
  ];
  
  // Sample assignments
  export const assignments = [
    {
      _id: "A101",
      title: "A1 - ENV + HTML",
      course: "1234",
      description: "Create a basic HTML page with environment setup",
      points: 100,
      dueDate: "2023-02-15",
      availableFromDate: "2023-01-10",
      availableUntilDate: "2023-02-15"
    },
    {
      _id: "A102",
      title: "A2 - CSS + Bootstrap",
      course: "1234",
      description: "Style a web page using CSS and Bootstrap",
      points: 100,
      dueDate: "2023-03-01",
      availableFromDate: "2023-02-16",
      availableUntilDate: "2023-03-01"
    },
    {
      _id: "A103",
      title: "A3 - React Components",
      course: "1234",
      description: "Create React components for a web application",
      points: 100,
      dueDate: "2023-03-15",
      availableFromDate: "2023-03-02",
      availableUntilDate: "2023-03-15"
    },
    {
      _id: "A201",
      title: "Project Proposal",
      course: "2345",
      description: "Submit a proposal for your software project",
      points: 100,
      dueDate: "2023-02-10",
      availableFromDate: "2023-01-15",
      availableUntilDate: "2023-02-10"
    }
  ];
  
  // Sample enrollments
  export const enrollments = [
    { user: "1", course: "1234" },  // Student enrolled in Web Dev
    { user: "1", course: "2345" },  // Student enrolled in Software Eng
    { user: "2", course: "1234" },  // Faculty teaching Web Dev
    { user: "2", course: "2345" },  // Faculty teaching Software Eng
    { user: "3", course: "1234" }   // Admin enrolled in Web Dev
  ];
  
  // Sample grades
  export const grades = [
    { student: "1", assignment: "A101", grade: 90 },
    { student: "1", assignment: "A102", grade: 85 },
    { student: "1", assignment: "A103", grade: 92 },
    { student: "1", assignment: "A201", grade: 88 }
  ];