import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormBootstrap from "./components/Form";

function App() {
  // const schema = yup.object().shape({
  //   username: yup.string().required("username is required"),
  //   email: yup.string().email().required("email is required"),
  //   age: yup
  //     .number("age should be a number between 18 and 50")
  //     .integer("age shold be integer")
  //     .min(18)
  //     .max(50)
  //     .required("age is required"),
  //   password: yup
  //     .string()
  //     .required()
  //     .min(6, "Password must be at least 6 characters long")
  //     .max(30, "Password must be at least 30 characters long")
  //     .required("password is required"),
  //   confirmPassword: yup
  //     .string()
  //     .oneOf([yup.ref("password"), null], "passwords must match")
  //     .required("confirm Password is required"),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <>
      <FormBootstrap />
      {/* <div style={{}}>
        <form
          style={{
            margin: "auto",
            position: "absolute",
            left: "40%",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="errors">{errors.username?.message}</p>
          <span>User Name:</span>
          <input
            type="username"
            placeholder="Username"
            {...register("username")}
          />
          <br />
          <p className="errors">{errors.email?.message}</p>
          <span>Email:</span>{" "}
          <input type="email" placeholder="Email" {...register("email")} />
          <br />
          <p className="errors">{errors.age?.message}</p>
          <span>Age:</span>{" "}
          <input type="number" placeholder="Age" {...register("age")} />
          <br />
          <p className="errors">{errors.password?.message}</p>
          <span>Password:</span>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <br />
          <p className="errors">{errors.confirmPassword?.message}</p>
          <span>Confirm Passwrord:</span>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
          />
          <br />
          <input type="submit" className="submitBtn" />
        </form>
      </div> */}
    </>
  );
}

export default App;
