import React, { useState } from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import AddEditModal from "./components/AddEditModal";
import { Student } from "./interfaces";

const App: React.FC = () => {
  const [modal, setModal] = useState<{
    show: boolean;
    modalType?: string;
    student?: Student;
  }>({ show: false });

  const [students, setStudents] = useState<Student[]>([]);

  const handleClose = (): void => {
    setModal({ show: false });
  };
  const handleShow = (modalType: string, student?: Student): void => {
    setModal({ show: true, modalType, student });
    console.log("yoooo");
  };

  const addStudent = (newStudent: Student): void => {
    setStudents([...students, newStudent]);
    console.log(students);
  };

  const editStudent = (newStudent: Student): void => {
    setStudents(
      students.map((oldStudent) =>
        oldStudent.id === newStudent.id ? newStudent : oldStudent
      )
    );
  };

  const removeStudent = (studentId: number): void => {
    setStudents(students.filter((oldStudent) => oldStudent.id !== studentId));
  };

  return (
    <div className="App">
      <h1>Ostrom code challenge</h1>
      {modal.show ? (
        <AddEditModal
          editStudent={editStudent}
          show={modal.show}
          modalType={modal.modalType}
          student={modal.student}
          handleClose={handleClose}
          addStudent={addStudent}
        />
      ) : null}

      <div className="container">
        <div className="row">
          <button
            id="add-student-btn"
            onClick={() => handleShow("Add")}
            className="btn text-white"
            style={{ width: "150px", backgroundColor: "rgba(0, 193, 177, 1)" }}
          >
            Add Student
          </button>
        </div>
        <div className="row mt-3">
          <Table id="students-table" color="#828282" striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Course</th>
                <th>Hours</th>
                <th>Price</th>
              </tr>
            </thead>
            {students.length ? (
              students.map((student: Student, i: number) => (
                <tbody>
                  <tr key={i}>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.dateOfBirth}</td>
                    <td>{student.course} </td>
                    <td>{student.hours}H</td>
                    <td>{student.price} €</td>
                    <td className="d-flex justify-content-evenly">
                      <button
                        onClick={() => handleShow("Edit", student)}
                        className="btn"
                        style={{ color: "#00C1B1" }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => removeStudent(student.id)}
                        className="btn"
                        style={{ color: "#00C1B1" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div style={{ display: "table-caption" }}>
                <h6 className="align-self-center text-info">
                  You Have no Students yet
                </h6>
              </div>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default App;
