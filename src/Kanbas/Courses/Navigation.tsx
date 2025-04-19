import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const location = useLocation(); // Get the current path
  const { cid } = useParams<{ cid: string }>(); // Extract course ID from params

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  // Helper function to check if the current path matches the link
  const isActive = (link: string) => {
    const targetPath = `/Kanbas/Courses/${cid}/${link}`;
    return location.pathname === targetPath;
  };

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`} // Ensure course ID is always included in the path
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border-0 py-2 ${isActive(link)
            ? 'text-black border-start border-3 border-dark'
            : 'text-danger'
            }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
