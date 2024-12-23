import React from "react";
import { useFormik } from "formik";

function GeneralForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
  });

  console.log(formik);

  return (
    <form>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formik.values.email}
          id="email"
          placeholder="Mail adresini gir"
        />
      </div>
    </form>
  );
}

export default GeneralForm;
