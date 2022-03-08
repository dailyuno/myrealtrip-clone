import React, { ReactNode } from "react";

interface MaybeProps {
  test: boolean;
  children: ReactNode;
}

const Maybe: React.FC<MaybeProps> = ({ test, children }: MaybeProps) => (
  <>{test && children}</>
);

export default Maybe;
