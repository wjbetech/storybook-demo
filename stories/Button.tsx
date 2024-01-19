import React from 'react';
import './button.css';
import { Button as qdsButton } from "@quotalab/qds";

interface ButtonProps {
  label?: string;
  size?: string;
  variant?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, size, variant, ...props }) => {
  return (
    <div>
      <qdsButton>{label}</qdsButton>
    </div>
  )
}
