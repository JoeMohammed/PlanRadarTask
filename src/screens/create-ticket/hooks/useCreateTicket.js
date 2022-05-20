import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTicketSchema } from "../schema/createTicket.schema";
import { useDispatch, useSelector } from "react-redux";
import { addTicket } from "../../../app/tickets/tickets.reducer";
import { useNavigate } from "react-router-dom";

export default function useCreateTicket() {
  const ticketList = useSelector((state) => state.tickets.tickets);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTicketSchema),
  });
  const onSubmit = (data) => {
    const newData = {
      API: data.subject,
      Cors: data.priority,
      Description: data.description,
      Category: data.status,
    };
    dispatch(addTicket({ tickets: [newData, ...ticketList] }));
    navigation("/");
  };

  return { register, errors, handleSubmit, onSubmit };
}
