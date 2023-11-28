import { useForm } from "react-hook-form";

export default function Useform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      {/* 
      {errors.firstName ? "firstName error" : ""}
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input
        {...register("email", {
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          required: true,
        })}
        placeholder="email"
      />
      {errors.email ? "email error" : ""}

      <input
        type="number"
        {...register("age", { min: 18, max: 99, required: "true" })}
      />
      {errors.age ? "number error" : ""}
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
      <input type="submit" />
    </form>
  );
}
