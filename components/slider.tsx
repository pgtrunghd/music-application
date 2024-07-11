import React, { useEffect, useRef, useState } from "react";
import * as SliderComponent from "@radix-ui/react-slider";

type Props = {
  data: number[];
} & React.ComponentProps<typeof SliderComponent.Root>;

const Slider = ({ data, ...props }: Props) => {
  const [value, setValue] = useState(data);
  const isPress = useRef(false);

  useEffect(() => {
    if (!isPress.current) {
      setValue(data);
    }
  }, [data, isPress.current]);

  return (
    <SliderComponent.Root
      className="relative flex items-center select-none touch-none w-full h-5 group"
      defaultValue={[0]}
      step={1}
      value={value}
      onValueChange={setValue}
      {...props}
    >
      <SliderComponent.Track className="bg-neutral-600 relative grow rounded-full h-1">
        <SliderComponent.Range className="absolute bg-white group-hover:bg-green-500 rounded-full h-full" />
      </SliderComponent.Track>
      <SliderComponent.Thumb
        className="hidden group-hover:block size-3 bg-white rounded-[10px] cursor-pointer"
        aria-label="Volume"
        onPointerUp={() => {
          props.onValueCommit?.(value);
          isPress.current = false;
        }}
        onPointerDown={() => {
          isPress.current = true;
        }}
      />
    </SliderComponent.Root>
  );
};

export default Slider;
