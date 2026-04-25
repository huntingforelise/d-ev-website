"use client";

import type { JSX } from "react";

const APPOINTMENT_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3l7taapC5pWms5Ont5__0Bo1mCwPnseQRmaTuhfcBAF-vBjLutJ6sZSuEE4St--zEKgUp6YswX?gv=true";
const BUTTON_LABEL = "Schedule 30 minutes with me";

export const GoogleAppointmentButton = (): JSX.Element => {
  return (
    <a
      href={APPOINTMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-primary"
    >
      {BUTTON_LABEL}
    </a>
  );
};
