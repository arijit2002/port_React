import React from 'react'
import './education.css'

export const Education = () => {
  return <table className="tabble">
      <thead>
          <tr>
              <th>Degree</th>
              <th>Department</th>
              <th>Institute</th>
              <th>Year</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>BCA</td>
              <td>Computer Application</td>
              <td>Institute of Engineering and Management</td>
              <td>2020-Present</td>
          </tr>
          <tr>
              <td>ISC - 12</td>
              <td>Computer Science</td>
              <td>Julien Day School</td>
              <td>2018-2020</td>
          </tr>
          <tr>
              <td>ICSE - 10</td>
              <td>General Science</td>
              <td>Julien Day School</td>
              <td>2016-2018</td>
          </tr>
      </tbody>
  </table>
}

export default Education