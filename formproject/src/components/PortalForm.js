import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";

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
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {() => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen Okulunuzu Seçiniz"
            >
              <option value="">Okul Seçiniz</option>
            </CustomSelect>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
