import { format, parseISO, isValid } from "date-fns";

export const FormatDate = (dateString) => {
  const date = parseISO(dateString);
  return isValid(date) ? format(date, "MMM yyyy") : "Present";
};
