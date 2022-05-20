import useCreateTicket from "../../../hooks/useCreateTicket";

export default function CreateTicketForm() {
  const { register, errors, handleSubmit, onSubmit } = useCreateTicket();

  return (
    <form className="form w-full lg:w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="form_group">
        <label htmlFor="subject" className="form_label">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register("subject")}
          className="form_control"
          placeholder="Subject"
        />
        <div className={`form_invalid ${errors?.subject ? "block" : "hidden"}`}>
          {errors?.subject?.message}
        </div>
      </div>

      <div className="form_group">
        <label htmlFor="status" className="form_label">
          Status
        </label>
        <input
          type="text"
          id="status"
          {...register("status")}
          className="form_control"
          placeholder="Status"
        />
        <div className={`form_invalid ${errors?.status ? "block" : "hidden"}`}>
          {errors?.status?.message}
        </div>
      </div>

      <div className="form_group">
        <h5 className="text-lg font-medium mb-2">Priority</h5>
        <div className="flex-div">
          <div className="px-2 w-1/2 flex items-center gap-1">
            <input
              type="radio"
              className="form_radio"
              id="yes"
              value="yes"
              {...register("priority")}
            />
            <label htmlFor="yes" className="form_radio_laabel">
              Yes
            </label>
          </div>
          <div className="px-2 w-1/2 flex items-center gap-1">
            <input
              type="radio"
              className="form_radio"
              id="no"
              value="no"
              {...register("priority")}
              checked
            />
            <label htmlFor="no" className="form_radio_laabel">
              No
            </label>
          </div>
        </div>
        <div
          className={`form_invalid ${errors?.priority ? "block" : "hidden"}`}
        >
          {errors?.priority?.message}
        </div>
      </div>

      <div className="form_group">
        <label htmlFor="description" className="form_label">
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="form_control"
          placeholder="Description"
          rows={3}
        ></textarea>
        <div
          className={`form_invalid ${errors?.description ? "block" : "hidden"}`}
        >
          {errors?.description?.message}
        </div>
      </div>

      <div className="w-full text-center">
        <button type="submit" className="form_submit">
          Submit
        </button>
      </div>
    </form>
  );
}
