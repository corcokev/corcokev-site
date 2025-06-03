import { Page } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  containerClass,
  sectionClass,
  headingClass,
  inputStyles,
  errorClass,
  buttonClass,
} from "../classUtils";

interface Props {
  setSelectedPage: (value: Page) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  return (
    <section id="contact" className={sectionClass}>
      <motion.div
        onViewportEnter={() => setSelectedPage(Page.Contact)}
        viewport={{ amount: "all" }}
        className={containerClass}
      >
        <div className="flex w-full flex-col justify-between gap-3">
          <h1 className={headingClass}>Contact Me</h1>
          <div className="md:flex md:justify-between md:gap-8">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/535bd121d4a3f51c9bfaeb93793f7213"
              method="POST"
              className="w-full"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className={errorClass}>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className={errorClass}>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className={errorClass}>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button type="submit" className={buttonClass}>
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
