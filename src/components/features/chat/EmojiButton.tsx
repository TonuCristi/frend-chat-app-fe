import { useState } from "react";

import Icon from "../../common/Icon";
import Button from "../../common/Button";
import EmojiPicker, { EmojiStyle, Theme } from "emoji-picker-react";

import { useClickOutside } from "../../../hooks/useClickOutside";
import { useFormContext } from "react-hook-form";

export default function EmojiButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useClickOutside(() => setIsOpen(false));
  const { setValue, getValues } = useFormContext();

  return (
    <div ref={containerRef} className="relative">
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center"
      >
        <Icon name="emoji" className="text-primary ml-auto stroke-3 text-xl" />
      </Button>
      {isOpen && (
        <div className="absolute right-full bottom-full">
          <EmojiPicker
            theme={Theme.DARK}
            emojiStyle={EmojiStyle.GOOGLE}
            onEmojiClick={(emojiObject) =>
              setValue("message", `${getValues("message")}${emojiObject.emoji}`)
            }
          />
        </div>
      )}
    </div>
  );
}
