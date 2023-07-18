const projects = [
  { _id: "127fae", name: "EatBCN", techStack: "React, Express, MongoDB" },
  { _id: "985afw", name: "TravelLite", techStack: "React, Express, Redux" },
  { _id: "347eef", name: "IronClub", techStack: "Express, HBS, MongoDB" },
  { _id: "90af21", name: "ChatApp", techStack: "React, Express, SocketIO" }
];

export default function ProjectList() {
  return (
    <div className="list">
      <h2>Project List</h2>

      {projects.map((project) => {
        return (
          <div key={project._id}>
            <h2>{project.name}</h2>
            <h2>{project.techStack}</h2>
          </div>
        );
      })}
    </div>
  );
}
