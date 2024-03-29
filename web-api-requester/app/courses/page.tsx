"use client";

export default function CoursesPage() {
  const handleGetHealthCheck = () => {
    console.log("Fetching healthcheck...");
    fetch("http://0.0.0.0:666/api/v1/hello")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleGetAllCourses = () => {
    // TODO: Implement logic to retrieve all courses from the API
  };

  const handleCreateCourse = () => {
    // TODO: Implement logic to create a new course via the API
  };

  const handleUpdateCourse = () => {
    // TODO: Implement logic to update an existing course via the API
  };

  const handleDeleteCourse = () => {
    // TODO: Implement logic to delete a course via the API
  };

  return (
    <div>
      <ul>
        <button onClick={handleGetHealthCheck}>Backend healthcheck</button>
      </ul>
      <ul>
        <button onClick={handleGetAllCourses}>Get All Courses</button>
      </ul>
      <ul>
        <button onClick={handleCreateCourse}>Create Course</button>
      </ul>
      <ul>
        <button onClick={handleUpdateCourse}>Update Course</button>
      </ul>
      <ul>
        <button onClick={handleDeleteCourse}>Delete Course</button>
      </ul>
    </div>
  );
}
