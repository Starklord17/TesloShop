'use client'

import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChanged: (value: number) => void;
}

export const QuantitySelector = ({quantity, onQuantityChanged}: Props) => {

  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;

    onQuantityChanged(quantity + value);
  }

  return (
    <main className="flex">
      <button onClick={() => onValueChanged(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="w-20 mx-3 my-1 bg-gray-200 text-center rounded-lg">{quantity}</span>

      <button onClick={() => onValueChanged(+1)}>
        <IoAddCircleOutline size={30} />
      </button>

    </main>
  )
}
