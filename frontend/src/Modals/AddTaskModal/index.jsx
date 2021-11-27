import React, { useCallback, useEffect } from "react";
import {
  Modal,
  ModalTitle,
  ModalBody,
  Form,
  InputGroup,
  FormControl,
  Button,
  ModalFooter,
  Spinner,
} from "react-bootstrap";
import { useFormik } from "formik";
import { initialValues, validationSchema, validate } from "./util";
import { addTask, updateTask } from "../../app/store/actions/taskActions";
import { useSelector } from "react-redux";
import { toggleTaskModal } from "../../app/store/actions/modalActions";

const AddTaskModal = () => {
  const { taskModal, edit } = useSelector((state) => state.modals);

  const onSubmitHandler = useCallback(
    (values, { setSubmitting }) => {
      if (edit) {
        updateTask(
          {
            _id: edit._id,
            content: values.content,
          },
          setSubmitting
        );
      } else {
        addTask(values, setSubmitting);
      }
      formik.resetForm();
    },
    [edit]
  );

  const formik = useFormik({
    initialValues,
    validationSchema,
    validate,
    onSubmit: onSubmitHandler,
  });

  useEffect(() => {
    if (edit) {
      formik.setValues({ content: edit.content });
    }
  }, [edit]);

  return (
    <Modal show={taskModal} onHide={() => toggleTaskModal()}>
      <Modal.Header closeButton className="p-1 px-2">
        <ModalTitle>{edit ? "Edit Task" : "Add Task"}</ModalTitle>
        {/* <h3 className="text-center">{edit ? "Edit" : "Add"} Task</h3> */}
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <ModalBody>
          <InputGroup>
            <FormControl
              type="text"
              name="content"
              placeholder="Add Task"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.content}
              disabled={formik.isSubmitting}
              isValid={formik.touched.content && !formik.errors.content}
              isInvalid={formik.touched.content && !!formik.errors.content}
            />
            <FormControl.Feedback type="invalid">
              {formik.errors.content}
            </FormControl.Feedback>
          </InputGroup>
        </ModalBody>
        <ModalFooter className="p-1">
          <Button variant="secondary" onClick={formik.handleReset}>
            Reset
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Submit"
            )}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
