import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(4, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/,
      "Password must contain at least one uppercase letter, one symbol, and one number."
    ),
});
