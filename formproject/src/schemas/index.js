import * as yup from "yup";
const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir mail giriniz.")
    .required("Mail alanı boş bırakılamaz."),
  age: yup
    .number("")
    .positive("Yaş alanı pozitif bir sayı olmalıdır.")
    .integer("Yaş alanı tam sayı olmalıdır.")
    .required("Yaş alanı boş bırakılamaz."),
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalıdır.")
    .matches(passwordRules, {
      message: "Şifreniz en az bir harf ve bir rakam içermelidir.",
    })
    .required("Şifre alanı boş bırakılamaz."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor.")
    .required("Şifre tekrarı alanı boş bırakılamaz."),
});

export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalıdır.")
    .required("Kullanıcı adı alanı boş bırakılamaz."),
  university: yup
    .string()
    .oneOf(["ODTÜ", "Boğaziçi", "İTÜ", "Hacettepe"], "Geçerli bir üniversite seçiniz.")
    .required("Üniversite alanı boş bırakılamaz."),
  isAccepted: yup
  .boolean()
  .oneOf([true], "Kabul etmelisiniz."),
});
