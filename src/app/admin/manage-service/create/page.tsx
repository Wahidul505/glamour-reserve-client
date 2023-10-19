"use client";
import Form from "@/components/ui/Forms/Form";
import FormInput from "@/components/ui/Forms/FormInput";
import FormTextArea from "@/components/ui/Forms/FormTextArea";
import SubmitButton from "@/components/ui/Forms/SubmitButton";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const CreateServicePage = () => {
  const [contentInputs, setContentInputs] = useState([0]);
  const [createCategory] = useCreateCategoryMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    data.information = data.information?.filter((info: any) => !!info);
    const res = await createCategory(data).unwrap();
    if (res.id) {
      toast.success("Service Created");
      router.push("/admin/manage-service");
    } else toast.error("Something went wrong");
  };

  return (
    <div>
      <h2 className="mb-4">Create Service</h2>
      <div className="lg:w-2/3">
        <Form submitHandler={handleSubmit} doReset={false}>
          <FormInput name="title" label="Title" placeholder="Service Title" />
          {contentInputs.map((order) => (
            <div key={order}>
              <FormTextArea
                name={`information[${order}]`}
                placeholder="Add Information"
                label="Information"
              />
            </div>
          ))}

          {/* buttons  */}
          <button
            type="button"
            onClick={() =>
              setContentInputs([
                ...contentInputs,
                contentInputs[contentInputs.length - 1] + 1,
              ])
            }
            className="btn btn-sm btn-neutral block mb-10"
          >
            Add Information
          </button>

          {/* ends here  */}
          <SubmitButton label="Create" />
        </Form>
      </div>
    </div>
  );
};

export default CreateServicePage;
