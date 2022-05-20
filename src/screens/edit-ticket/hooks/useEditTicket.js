import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editTicketSchema } from "../schema/editTicket.schema";
import { useDispatch, useSelector } from "react-redux";
import { editTicket } from "../../../app/tickets/tickets.reducer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function useEditTicket() {
  const ticketList = useSelector((state) => state.tickets.tickets);
  const [ticketIdx, setTicketIdx] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editTicketSchema),
  });

  useEffect(() => {
    const ticketId = location.pathname.replace("/edit-ticket/", "");
    setTicketIdx(+ticketId);
  }, [location]);

  useEffect(() => {
    if (ticketIdx || ticketList) {
      const val = ticketList[ticketIdx]?.API;
      setValue("subject", val);
    }
  }, [ticketList, ticketIdx, setValue]);

  useEffect(() => {
    if (ticketIdx || ticketList) {
      const val = ticketList[ticketIdx]?.Category;
      setValue("status", val);
    }
  }, [ticketList, ticketIdx, setValue]);

  useEffect(() => {
    if (ticketIdx || ticketList) {
      const val = ticketList[ticketIdx]?.Cors;
      setValue("priority", val);
    }
  }, [ticketList, ticketIdx, setValue]);

  useEffect(() => {
    if (ticketIdx || ticketList) {
      const val = ticketList[ticketIdx]?.Description;
      setValue("description", val);
    }
  }, [ticketList, ticketIdx, setValue]);

  const onSubmit = (data) => {
    const newData = {
      API: data.subject,
      Cors: data.priority,
      Description: data.description,
      Category: data.status,
    };

    let newTicketList = [...ticketList];
    newTicketList[ticketIdx] = { ...newTicketList[ticketIdx], ...newData };

    dispatch(editTicket({ tickets: newTicketList }));
    navigation("/");
  };

  return { register, errors, handleSubmit, onSubmit };
}
