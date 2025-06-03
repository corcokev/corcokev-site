import { Page } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface Props {
  setSelectedPage: (value: Page) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-secondary
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="bg-secondary gap-16 py-3 md:h-full">
      <div className="bg-primary justify-left mx-auto w-3/4 items-center rounded-lg p-10 md:flex md:h-3/4">
        <div className="flex flex-col justify-between gap-3">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <div className="mt-5 justify-between gap-8 md:flex">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/535bd121d4a3f51c9bfaeb93793f7213"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-primary-500 mt-1">
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
                <p className="text-primary-500 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-primary-500 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <motion.div
                onViewportEnter={() => setSelectedPage(Page.Contact)}
                onViewportLeave={() => setSelectedPage(Page.Experience)}
              >
                <button
                  type="submit"
                  className="bg-secondary hover:text-mgreen mt-5 rounded-lg px-20 py-3 transition duration-500"
                >
                  SUBMIT
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
