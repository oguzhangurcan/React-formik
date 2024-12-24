import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
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
        {(isSubmitting) => (
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
              <option value="ODTÜ">ODTÜ</option>
              <option value="Boğaziçi">Boğaziçi</option>
              <option value="İTÜ">İTÜ</option>
              <option value="Hacettepe">Hacettepe</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">Ana forma git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
