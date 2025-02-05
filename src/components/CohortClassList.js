
export default function ClassList({displayAllStudents, sortCohort}) {
    return (
        
      <div className="cohort-list">
        <aside>
          <br></br>
          <h2>Choose a Class by Start Date</h2>
          <h4 onClick={displayAllStudents}>All Students</h4>
          <hr></hr>
          <h3 onClick={() => sortCohort("Winter 2026")}>Winter 2026</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Fall 2026")}>Fall 2026</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Summer 2026")}>Summer 2026</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Spring 2026")}>Spring 2026</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Winter 2025")}>Winter 2025</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Fall 2025")}>Fall 2025</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Summer 2025")}>Summer 2025</h3>
          <hr></hr>
          <h3 onClick={() => sortCohort("Spring 2025")}>Spring 2025</h3>
          <hr></hr>
        </aside>
      </div>
    )
  }