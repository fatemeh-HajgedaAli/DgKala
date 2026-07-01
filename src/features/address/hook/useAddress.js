import { useState } from "react";

export default function useAddress() {
  const [address, setAddress] = useState(null);

  return {
    address,
    setAddress,
  };
}
