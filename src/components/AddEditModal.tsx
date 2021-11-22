import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Student } from "../interfaces";
import * as yup from "yup";
import { useFormik } from "formik";

interface IProps {
  show: boolean;
  handleClose(): void;
  addStudent(newStudent: Student): void;
  editStudent(newStudent: Student): void;
  student?: Student;
  modalType?: string;
}

const AddEditModal: React.FC<IProps> = ({
  show,
  handleClose,
  addStudent,
  editStudent,
  modalType,
  student,
}) => {
  const formSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    dateOfBirth: yup.string().required(),
    course: yup.string().required(),
    hours: yup.number().required(),
    price: yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      firstName: student?.firstName || "",
      lastName: student?.lastName || "",
      dateOfBirth: student?.dateOfBirth || "",
      course: student?.course || "",
      hours: student?.hours || 0,
      price: student?.price || 0,
      id: student?.id || Math.round(Math.random() * 1000),
    },
    onSubmit: (values: Student) => {
      if (modalType === "Add") {
        addStudent(values);
      } else editStudent(values);
      handleClose();
    },
    validationSchema: formSchema,
  });

  return (
    <Modal
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalType} Student</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <table color="#828282">
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
            <tbody>
              <tr>
                <td>
                  <Form.Group className=" w-75">
                    <Form.Control
                      id="firstName"
                      type="text"
                      placeholder="Kimberly"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="firstName"
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                      <div className="text-danger" style={{ fontSize: "10px" }}>
                        first name is required
                      </div>
                    ) : null}
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className=" w-75">
                    <Form.Control
                      id="lastName"
                      type="text"
                      placeholder="Williams"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="lastName"
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                      <div className="text-danger" style={{ fontSize: "10px" }}>
                        Last name is required
                      </div>
                    ) : null}
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className=" w-75">
                    <Form.Control
                      id="dateOfBirth"
                      type="date"
                      placeholder="04.06.1992"
                      value={formik.values.dateOfBirth}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="dateOfBirth"
                    />
                    {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
                      <div className="text-danger" style={{ fontSize: "10px" }}>
                        birthday is required
                      </div>
                    ) : null}
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className=" w-90">
                    <Form.Control
                      id="course"
                      type="text"
                      placeholder="Modern Paython 3"
                      value={formik.values.course}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="course"
                    />
                    {formik.errors.course && formik.touched.course ? (
                      <div className="text-danger" style={{ fontSize: "10px" }}>
                        course is required
                      </div>
                    ) : null}
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className=" w-75">
                    <Form.Control
                      id="hours"
                      type="number"
                      placeholder="50"
                      value={formik.values.hours}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="hours"
                    />
                    {formik.errors.hours && formik.touched.hours ? (
                      <div className="text-danger" style={{ fontSize: "10px" }}>
                        hours is required
                      </div>
                    ) : null}
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className=" w-75">
                    <Form.Control
                      id="price"
                      type="number"
                      placeholder="3,200.00"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="price"
                    />
                    {formik.errors.price && formik.touched.price ? (
                      <div className="text-danger" style={{ fontSize: "10px" }}>
                        price is required
                      </div>
                    ) : null}
                  </Form.Group>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#16295A" }}>
          <Button
            type="submit"
            id="submit-btn"
            className="btn text-white"
            style={{ backgroundColor: "rgba(0, 193, 177, 1)" }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddEditModal;
