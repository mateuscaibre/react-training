function StudentList() {
  const students = ["Mat", "Ell", "Osca"];
  return (
    <div className="list">
      <h2>Student List</h2>
      {students.map((name, key) => {
        return <p key={key}>{name}</p>;
      })}
    </div>
  );
}

export default StudentList;
