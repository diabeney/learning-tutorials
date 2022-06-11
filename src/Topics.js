function Topics({courses,toggle}) {
  return (
      <div style={{display: toggle ? 'none' : 'block'}}>
        <h2>Chemical Engineering</h2>
        <ul>{courses.map(course=> <li key={course}>{course}</li>)}</ul>
      </div> 
  )
}
// 
export default Topics