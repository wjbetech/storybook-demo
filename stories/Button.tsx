import React from "react";

import { Button as QdsButton } from "@quotalab/qds"
import { container } from "../app.css"


interface ButtonProps {
  label?: string,
  primary?: boolean,
  size?: "small" | "medium" | "large",
  color?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger"
  backgroundColor?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger"
  borderRadius?: number
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "outline"
}

export const Button = ({ label, primary, size, color, backgroundColor, borderRadius, disabled, onClick, variant }: ButtonProps) => (
  <QdsButton
    className={container}
    disabled={disabled}
    onClick={onClick}
  >{label}</QdsButton>
);
