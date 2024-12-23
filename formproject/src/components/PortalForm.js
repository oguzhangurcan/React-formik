import React from "react";
import { Formik, Form } from "formik";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((r) => setTimeout(r, 1000));
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "red", isAccepted: false }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <CustomInput/>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
